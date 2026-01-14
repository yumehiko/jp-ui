import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');
const PAGES_DIR = path.join(SRC_DIR, 'pages');
const OUT_DIR = path.join(ROOT, 'docs', 'llm');
const DIST_COMPONENTS_DIR = path.join(ROOT, 'dist', 'components');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      return [fullPath];
    }),
  );
  return files.flat();
}

function titleCase(value) {
  return value
    .split(/\s+/)
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}

function formatTitleFromPath(relativePath) {
  return relativePath
    .split(path.sep)
    .map((segment) => titleCase(segment.replace(/-/g, ' ')))
    .join(' / ');
}

function formatTitleFromPage(name) {
  return name.endsWith('Page') ? name.slice(0, -4) : name;
}

function toComponentName(segment) {
  if (!segment) return '';
  if (segment.includes('-')) {
    return segment
      .split('-')
      .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
      .join('');
  }
  return segment[0].toUpperCase() + segment.slice(1);
}

function extractCssImports(content) {
  const results = [];
  const regex = /from\s+['"](.+?\.module\.css)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('.') || importPath.startsWith('..')) {
      results.push(importPath);
    }
  }
  return results;
}

function buildCodeSection(label, language, code) {
  return `## ${label}\n\n\`\`\`${language}\n${code}\n\`\`\`\n`;
}

function extractTypeBlocks(content) {
  const lines = content.split(/\r?\n/);
  const blocks = [];
  let current = null;
  let depth = 0;

  const startRegex = /^(export\s+)?(type|interface)\s+\w+/;

  const updateDepth = (line) => {
    const opens = (line.match(/{/g) || []).length;
    const closes = (line.match(/}/g) || []).length;
    return opens - closes;
  };

  const isBlockEnd = (line, currentDepth) => {
    if (currentDepth > 0) {
      return false;
    }
    const trimmed = line.trim();
    if (trimmed.endsWith(';')) {
      return true;
    }
    if (trimmed.endsWith('}')) {
      return true;
    }
    if (trimmed.endsWith('};')) {
      return true;
    }
    return false;
  };

  for (const line of lines) {
    if (!current && startRegex.test(line)) {
      current = [line];
      depth = updateDepth(line);
      if (isBlockEnd(line, depth)) {
        blocks.push(current.join('\n'));
        current = null;
        depth = 0;
      }
      continue;
    }

    if (current) {
      current.push(line);
      depth += updateDepth(line);
      if (isBlockEnd(line, depth)) {
        blocks.push(current.join('\n'));
        current = null;
        depth = 0;
      }
    }
  }

  return blocks;
}

async function buildMarkdown({
  title,
  sourcePath,
  content,
  cssFiles,
  typeFiles = [],
}) {
  const sections = [];
  sections.push(`# ${title}\n`);
  sections.push(`Source: ${sourcePath}\n`);
  sections.push(buildCodeSection('Example', 'tsx', content));

  for (const cssFile of cssFiles) {
    sections.push(`Source: ${cssFile.path}\n`);
    sections.push(buildCodeSection('Styles', 'css', cssFile.content));
  }

  for (const typeFile of typeFiles) {
    const blocks = extractTypeBlocks(typeFile.content);
    if (blocks.length === 0) {
      continue;
    }
    sections.push(`Source: ${typeFile.path}\n`);
    sections.push(buildCodeSection('Types', 'ts', blocks.join('\n\n')));
  }

  return sections.join('\n');
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeDoc({ outputPath, markdown }) {
  await ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, markdown, 'utf8');
}

async function loadCssFiles(baseDir, importPaths) {
  const results = [];
  for (const importPath of importPaths) {
    const resolvedPath = path.resolve(baseDir, importPath);
    try {
      const content = await fs.readFile(resolvedPath, 'utf8');
      results.push({ path: path.relative(ROOT, resolvedPath), content });
    } catch {
      // Skip missing files to keep generation robust.
    }
  }
  return results;
}

async function loadTypeFiles(distDir) {
  try {
    const entries = await fs.readdir(distDir, { withFileTypes: true });
    const dtsFiles = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith('.d.ts'))
      .map((entry) => entry.name);

    if (dtsFiles.length === 0) {
      return [];
    }

    let selected = [];
    if (dtsFiles.length === 1) {
      selected = dtsFiles;
    } else {
      selected = dtsFiles.filter((name) => name !== 'index.d.ts');
      if (selected.length === 0) {
        selected = dtsFiles;
      }
    }

    const results = [];
    for (const fileName of selected) {
      const resolvedPath = path.join(distDir, fileName);
      try {
        const content = await fs.readFile(resolvedPath, 'utf8');
        results.push({ path: path.relative(ROOT, resolvedPath), content });
      } catch {
        // Skip missing type files.
      }
    }

    return results;
  } catch {
    return [];
  }
}

async function generateComponentDocs() {
  const files = await walk(COMPONENTS_DIR);
  const examples = files.filter((file) => file.endsWith('Example.tsx'));

  for (const examplePath of examples) {
    const exampleDir = path.dirname(examplePath);
    const relativeDir = path.relative(COMPONENTS_DIR, exampleDir);
    const baseName = path.basename(examplePath, '.tsx');
    const exampleName = baseName === 'Example' ? null : baseName.replace(/Example$/, '');
    const titleSource = exampleName ? path.join(relativeDir, exampleName) : relativeDir;
    const title = formatTitleFromPath(titleSource);
    const content = await fs.readFile(examplePath, 'utf8');
    const cssImports = extractCssImports(content);
    const cssFiles = await loadCssFiles(exampleDir, cssImports);
    const typeFiles = await loadTypeFiles(
      path.join(DIST_COMPONENTS_DIR, relativeDir),
    );
    const markdown = await buildMarkdown({
      title,
      sourcePath: path.relative(ROOT, examplePath),
      content,
      cssFiles,
      typeFiles,
    });
    const segments = relativeDir ? relativeDir.split(path.sep) : [];
    const componentSegment = segments.pop();
    const componentName = toComponentName(componentSegment);
    const outputName = exampleName
      ? `${exampleName}.md`
      : componentName
        ? `${componentName}.md`
        : 'index.md';
    const outputPath = path.join(
      OUT_DIR,
      'components',
      ...segments,
      outputName,
    );
    await writeDoc({ outputPath, markdown });
  }
}

async function generatePageDocs() {
  let entries = [];
  try {
    entries = await fs.readdir(PAGES_DIR, { withFileTypes: true });
  } catch {
    return;
  }

  const pages = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('Page.tsx'))
    .map((entry) => path.join(PAGES_DIR, entry.name));

  for (const pagePath of pages) {
    const name = path.basename(pagePath, '.tsx');
    const title = formatTitleFromPage(name);
    const content = await fs.readFile(pagePath, 'utf8');
    const cssImports = extractCssImports(content);
    const cssFiles = await loadCssFiles(path.dirname(pagePath), cssImports);
    const markdown = await buildMarkdown({
      title,
      sourcePath: path.relative(ROOT, pagePath),
      content,
      cssFiles,
    });
    const outputPath = path.join(OUT_DIR, 'pages', `${name}.md`);
    await writeDoc({ outputPath, markdown });
  }
}

async function main() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await ensureDir(OUT_DIR);
  await generateComponentDocs();
  await generatePageDocs();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

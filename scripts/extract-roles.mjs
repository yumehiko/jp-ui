import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

const inputs = [
  { name: 'light', path: resolve(rootDir, 'docs/Light.tokens.json') },
  { name: 'dark', path: resolve(rootDir, 'docs/Dark.tokens.json') },
];

const outputDir = resolve(rootDir, 'tokens');

const normalizeKey = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const parseAlias = (alias) => {
  if (!alias || typeof alias !== 'string') {
    return null;
  }

  const parts = alias.split('/');
  if (parts.length < 3) {
    return null;
  }

  const palette = normalizeKey(parts[1]);
  const tone = Number(parts[2]);
  if (!Number.isFinite(tone)) {
    return null;
  }

  return { palette, tone };
};

for (const input of inputs) {
  const raw = await readFile(input.path, 'utf8');
  const data = JSON.parse(raw);
  const roleRoot = data?.Role;

  if (!roleRoot || typeof roleRoot !== 'object') {
    throw new Error(`Missing Role section in ${input.path}`);
  }

  const output = {};

  for (const [groupName, groupRoles] of Object.entries(roleRoot)) {
    if (!groupRoles || typeof groupRoles !== 'object') {
      continue;
    }

    const groupKey = normalizeKey(groupName);
    output[groupKey] = {};

    for (const [roleName, roleValue] of Object.entries(groupRoles)) {
      const alias = roleValue?.$extensions?.['com.figma.aliasData']?.targetVariableName;
      const parsed = parseAlias(alias);
      if (!parsed) {
        continue;
      }

      output[groupKey][normalizeKey(roleName)] = parsed;
    }
  }

  await mkdir(outputDir, { recursive: true });
  const outputPath = resolve(outputDir, `roles.${input.name}.json`);
  await writeFile(outputPath, JSON.stringify(output, null, 2) + '\n', 'utf8');
  console.log(`Generated ${outputPath}`);
}

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

const inputs = [
  { name: 'light', path: resolve(rootDir, 'tokens/roles.light.json') },
  { name: 'dark', path: resolve(rootDir, 'tokens/roles.dark.json') },
];

const outputDir = resolve(rootDir, 'tokens');
const outputPath = resolve(outputDir, 'roles.css');
const sourcePath = resolve(rootDir, 'tokens/source.json');

const normalizeKey = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const toKebab = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();

const readRoles = async (input) => {
  const raw = await readFile(input.path, 'utf8');
  const data = JSON.parse(raw);
  const output = [];

  for (const [groupName, groupRoles] of Object.entries(data)) {
    if (!groupRoles || typeof groupRoles !== 'object') {
      continue;
    }

    const groupKey = normalizeKey(groupName);
    for (const [roleName, roleValue] of Object.entries(groupRoles)) {
      if (!roleValue || typeof roleValue !== 'object') {
        continue;
      }

      const roleKey = normalizeKey(roleName);
      const palette = normalizeKey(roleValue.palette || '');
      const tone = roleValue.tone;

      if (!palette || !Number.isFinite(tone)) {
        continue;
      }

      const varName = `--${roleKey}`;
      const toneVar = `--tone-${palette}-${tone}`;
      output.push(`  ${varName}: var(${toneVar});`);
    }
  }

  return output;
};

const readPaletteRoles = async (theme) => {
  const raw = await readFile(sourcePath, 'utf8');
  const data = JSON.parse(raw);
  const palette = data?.palette ?? {};
  const entries = Object.keys(palette).map((name) => toKebab(name));

  const toneMap = theme === 'dark'
    ? {
        base: 80,
        on: 20,
        container: 30,
        onContainer: 90,
        inverse: 40,
      }
    : {
        base: 40,
        on: 100,
        container: 90,
        onContainer: 10,
        inverse: 80,
      };

  const output = [];
  for (const name of entries) {
    output.push(`  --${name}: var(--tone-${name}-${toneMap.base});`);
    output.push(`  --on-${name}: var(--tone-${name}-${toneMap.on});`);
    output.push(`  --${name}-container: var(--tone-${name}-${toneMap.container});`);
    output.push(`  --on-${name}-container: var(--tone-${name}-${toneMap.onContainer});`);
    output.push(`  --inverse-${name}: var(--tone-${name}-${toneMap.inverse});`);
    output.push(`  --${name}-fixed: var(--tone-${name}-90);`);
    output.push(`  --${name}-fixed-dim: var(--tone-${name}-80);`);
    output.push(`  --on-${name}-fixed: var(--tone-${name}-10);`);
    output.push(`  --on-${name}-fixed-variant: var(--tone-${name}-30);`);
  }

  return output;
};

const lines = [];
for (const input of inputs) {
  const roleLines = await readRoles(input);
  const paletteLines = await readPaletteRoles(input.name);
  const combinedLines = [...roleLines, ...paletteLines].sort();
  lines.push(`.theme-${input.name} {`);
  lines.push(...combinedLines);
  lines.push('}');
  lines.push('');
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, lines.join('\n'), 'utf8');

console.log(`Generated ${outputPath}`);

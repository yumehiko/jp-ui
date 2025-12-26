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

const normalizeKey = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

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

const lines = [];
for (const input of inputs) {
  const roleLines = await readRoles(input);
  lines.push(`.theme-${input.name} {`);
  lines.push(...roleLines.sort());
  lines.push('}');
  lines.push('');
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, lines.join('\n'), 'utf8');

console.log(`Generated ${outputPath}`);

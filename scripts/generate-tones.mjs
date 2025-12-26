import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Hct, hexFromArgb } from '@material/material-color-utilities';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const sourcePath = resolve(rootDir, 'tokens/source.json');
const tonesPath = resolve(rootDir, 'tokens/tones.json');
const cssPath = resolve(rootDir, 'tokens/tones.css');

const toneSets = {
  primary: [10, 20, 30, 40, 80, 90, 100],
  secondary: [10, 20, 30, 40, 80, 90, 100],
  tertiary: [10, 20, 30, 40, 80, 90, 100],
  error: [10, 20, 30, 40, 80, 90, 100],
  neutral: [0, 4, 6, 10, 12, 17, 20, 22, 24, 87, 90, 92, 94, 95, 96, 98, 100],
  neutralVariant: [30, 50, 60, 80],
};

const chromaAdjustTones = new Map([
  [80, 0.8],
  [90, 0.5],
]);

const highChromaPalettes = new Set(['primary', 'secondary', 'tertiary', 'error']);

const paletteOutputKey = (palette) => {
  if (palette === 'neutralVariant') {
    return 'neutral-variant';
  }
  return palette;
};

function assertBaseColor(name, value) {
  if (!value || !Number.isFinite(value.h) || !Number.isFinite(value.c) || !Number.isFinite(value.t)) {
    throw new Error(`Base color \"${name}\" must have numeric h/c/t in tokens/source.json`);
  }
}

function toHex(h, c, tone, palette) {
  const factor = highChromaPalettes.has(palette)
    ? chromaAdjustTones.get(tone) ?? 1
    : 1;
  const chroma = c * factor;
  const hct = Hct.from(h, chroma, tone);
  return hexFromArgb(hct.toInt()).toLowerCase();
}

const sourceRaw = await readFile(sourcePath, 'utf8');
const source = JSON.parse(sourceRaw);
const base = source.base ?? {};

for (const key of Object.keys(toneSets)) {
  assertBaseColor(key, base[key]);
}

const tones = {};

for (const [palette, paletteTones] of Object.entries(toneSets)) {
  const { h, c } = base[palette];
  const paletteOutput = {};
  const outputKey = paletteOutputKey(palette);

  for (const tone of paletteTones) {
    paletteOutput[tone] = toHex(h, c, tone, palette);
  }

  tones[outputKey] = paletteOutput;
}

await mkdir(dirname(tonesPath), { recursive: true });
await writeFile(tonesPath, JSON.stringify(tones, null, 2) + '\n', 'utf8');

const cssLines = [':root {'];
for (const [palette, paletteTones] of Object.entries(tones)) {
  for (const [tone, hex] of Object.entries(paletteTones)) {
    cssLines.push(`  --tone-${palette}-${tone}: ${hex};`);
  }
}
cssLines.push('}');
cssLines.push('');

await writeFile(cssPath, cssLines.join('\n'), 'utf8');

console.log(`Generated ${tonesPath}`);
console.log(`Generated ${cssPath}`);

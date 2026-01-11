import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Hct, hexFromArgb } from '@material/material-color-utilities';

type BaseColor = { h: number; c: number; t: number };
type ThemeFactory = (input: {
  primary: string;
  secondary: string;
  tertiary: string;
  error?: string;
  neutral?: string;
  neutralVariant?: string;
}) => {
  toneCss: string;
  roleCss: string;
};

const rootDir = resolve(import.meta.dirname, '..');
const sourcePath = resolve(rootDir, 'tokens/source.json');
const tonesPath = resolve(rootDir, 'tokens/tones.css');
const rolesPath = resolve(rootDir, 'tokens/roles.css');

const toHex = (base: BaseColor) =>
  hexFromArgb(Hct.from(base.h, base.c, base.t).toInt()).toLowerCase();

const normalizeCss = (value: string) =>
  value.replace(/\r\n/g, '\n').trim() + '\n';

const parseToneCss = (css: string) => {
  const map = new Map<string, string>();
  const regex = /--tone-([a-z0-9-]+)-([0-9]+):\s*(#[0-9a-f]{6})/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(css)) !== null) {
    const key = `${match[1]}-${match[2]}`;
    map.set(key, match[3].toLowerCase());
  }
  return map;
};

const hexToRgb = (hex: string) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
});

const compareTones = (expectedCss: string, actualCss: string) => {
  const expected = parseToneCss(expectedCss);
  const actual = parseToneCss(actualCss);
  const channelTolerance = 2;

  let failed = false;
  let maxDelta = 0;
  let missing = 0;
  let extra = 0;

  for (const [key, expectedHex] of expected.entries()) {
    const actualHex = actual.get(key);
    if (!actualHex) {
      missing += 1;
      failed = true;
      continue;
    }
    const exp = hexToRgb(expectedHex);
    const act = hexToRgb(actualHex);
    const delta = Math.max(
      Math.abs(exp.r - act.r),
      Math.abs(exp.g - act.g),
      Math.abs(exp.b - act.b),
    );
    maxDelta = Math.max(maxDelta, delta);
    if (delta > channelTolerance) {
      failed = true;
    }
  }

  for (const key of actual.keys()) {
    if (!expected.has(key)) {
      extra += 1;
      failed = true;
    }
  }

  if (failed) {
    console.error(`Tone CSS mismatch. Max channel delta: ${maxDelta}. Missing: ${missing}, extra: ${extra}.`);
    process.exitCode = 1;
  }
};

const loadSource = async () => {
  const raw = await readFile(sourcePath, 'utf8');
  const data = JSON.parse(raw);
  return {
    base: data.base as Record<string, BaseColor>,
  };
};

const readCss = async (path: string) => normalizeCss(await readFile(path, 'utf8'));

const importCreateTheme = async (): Promise<ThemeFactory> => {
  const distEntry = resolve(rootDir, 'dist/index.js');
  const mod = await import(distEntry);
  if (typeof mod.createTheme !== 'function') {
    throw new Error('createTheme was not found in dist/index.js');
  }
  return mod.createTheme as ThemeFactory;
};

const main = async () => {
  const createTheme = await importCreateTheme();
  const { base } = await loadSource();
  const theme = createTheme({
    primary: toHex(base.primary),
    secondary: toHex(base.secondary),
    tertiary: toHex(base.tertiary),
    error: toHex(base.error),
    neutral: toHex(base.neutral),
    neutralVariant: toHex(base.neutralVariant),
  });

  const expectedToneCss = await readCss(tonesPath);
  const expectedRoleCss = await readCss(rolesPath);
  const actualToneCss = normalizeCss(theme.toneCss);
  const actualRoleCss = normalizeCss(theme.roleCss);

  compareTones(expectedToneCss, actualToneCss);

  if (expectedRoleCss !== actualRoleCss) {
    console.error('Role CSS mismatch. Run `pnpm gen:roles-css` to regenerate tokens.');
    process.exitCode = 1;
  }

  if (!process.exitCode) {
    console.log('Theme generation matches tokens (dist).');
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

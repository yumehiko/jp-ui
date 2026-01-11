import { Hct, argbFromHex, hexFromArgb } from '@material/material-color-utilities';
import sourceTokens from '../../tokens/source.json';
import rolesLight from '../../tokens/roles.light.json';
import rolesDark from '../../tokens/roles.dark.json';

type BaseColor = { h: number; c: number; t: number };
type ColorInput = string | BaseColor;
type RoleEntry = { palette: string; tone: number };
type RoleGroups = Record<string, Record<string, RoleEntry>>;

export type ThemeInput = {
  primary: ColorInput;
  secondary: ColorInput;
  tertiary: ColorInput;
  error?: ColorInput;
  neutral?: ColorInput;
  neutralVariant?: ColorInput;
};

export type ThemeOutput = {
  tones: Record<string, Record<number, string>>;
  roles: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  css: string;
  toneCss: string;
  roleCss: string;
};

const primaryTones = [10, 20, 30, 40, 80, 90, 100];

const baseToneSets: Record<string, number[]> = {
  primary: primaryTones,
  secondary: primaryTones,
  tertiary: primaryTones,
  error: primaryTones,
  neutral: [0, 4, 6, 10, 12, 17, 20, 22, 24, 87, 90, 92, 94, 95, 96, 98, 100],
  neutralVariant: [30, 50, 60, 80],
};

const chromaAdjustTones = new Map([
  [80, 0.8],
  [90, 0.5],
]);

const highChromaPalettes = new Set(['primary', 'secondary', 'tertiary', 'error']);

const toKebab = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();

const paletteOutputKey = (palette: string) => {
  if (palette === 'neutralVariant') {
    return 'neutral-variant';
  }
  return toKebab(palette);
};

const isBaseColor = (value: unknown): value is BaseColor =>
  !!value
  && typeof value === 'object'
  && Number.isFinite((value as BaseColor).h)
  && Number.isFinite((value as BaseColor).c)
  && Number.isFinite((value as BaseColor).t);

const toBaseColor = (value: ColorInput): BaseColor => {
  if (isBaseColor(value)) {
    return value;
  }
  const hct = Hct.fromInt(argbFromHex(value));
  return { h: hct.hue, c: hct.chroma, t: hct.tone };
};

const toHex = (h: number, c: number, tone: number, palette: string) => {
  const factor = highChromaPalettes.has(palette)
    ? chromaAdjustTones.get(tone) ?? 1
    : 1;
  const chroma = c * factor;
  const hct = Hct.from(h, chroma, tone);
  return hexFromArgb(hct.toInt()).toLowerCase();
};

const buildRoleVars = (roles: RoleGroups) => {
  const output: Record<string, string> = {};
  for (const groupRoles of Object.values(roles)) {
    for (const [roleName, roleValue] of Object.entries(groupRoles)) {
      const palette = toKebab(roleValue.palette);
      const tone = roleValue.tone;
      output[`--${roleName}`] = `var(--tone-${palette}-${tone})`;
    }
  }
  return output;
};

const buildPaletteVars = (paletteNames: string[], theme: 'light' | 'dark') => {
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

  const output: Record<string, string> = {};
  for (const name of paletteNames) {
    output[`--${name}`] = `var(--tone-${name}-${toneMap.base})`;
    output[`--on-${name}`] = `var(--tone-${name}-${toneMap.on})`;
    output[`--${name}-container`] = `var(--tone-${name}-${toneMap.container})`;
    output[`--on-${name}-container`] = `var(--tone-${name}-${toneMap.onContainer})`;
    output[`--inverse-${name}`] = `var(--tone-${name}-${toneMap.inverse})`;
    output[`--${name}-fixed`] = `var(--tone-${name}-90)`;
    output[`--${name}-fixed-dim`] = `var(--tone-${name}-80)`;
    output[`--on-${name}-fixed`] = `var(--tone-${name}-10)`;
    output[`--on-${name}-fixed-variant`] = `var(--tone-${name}-30)`;
  }
  return output;
};

const toVarLines = (vars: Record<string, string>) =>
  Object.entries(vars)
    .map(([name, value]) => `  ${name}: ${value};`)
    .sort();

export const createTheme = (input: ThemeInput): ThemeOutput => {
  const sourceBase = sourceTokens.base as Record<string, BaseColor>;
  const sourcePalette = sourceTokens.palette as Record<string, BaseColor>;

  const primary = toBaseColor(input.primary);
  const secondary = toBaseColor(input.secondary);
  const tertiary = toBaseColor(input.tertiary);
  const error = input.error ? toBaseColor(input.error) : sourceBase.error;

  const neutral = input.neutral
    ? toBaseColor(input.neutral)
    : { ...sourceBase.neutral, h: primary.h };

  const neutralVariant = input.neutralVariant
    ? toBaseColor(input.neutralVariant)
    : { ...sourceBase.neutralVariant, h: primary.h };

  const baseColors: Record<string, BaseColor> = {
    primary,
    secondary,
    tertiary,
    error,
    neutral,
    neutralVariant,
  };

  const toneSets: Record<string, number[]> = { ...baseToneSets };
  for (const key of Object.keys(sourcePalette)) {
    toneSets[key] = primaryTones;
    highChromaPalettes.add(key);
  }

  const tones: Record<string, Record<number, string>> = {};
  for (const [paletteName, paletteTones] of Object.entries(toneSets)) {
    const paletteEntry = baseColors[paletteName] ?? sourcePalette[paletteName];
    if (!paletteEntry) {
      continue;
    }

    const { h, c } = paletteEntry;
    const outputKey = paletteOutputKey(paletteName);
    const paletteOutput: Record<number, string> = {};

    for (const tone of paletteTones) {
      paletteOutput[tone] = toHex(h, c, tone, paletteName);
    }

    tones[outputKey] = paletteOutput;
  }

  const toneCssLines = [':root {'];
  for (const [palette, paletteTones] of Object.entries(tones)) {
    for (const [tone, hex] of Object.entries(paletteTones)) {
      toneCssLines.push(`  --tone-${palette}-${tone}: ${hex};`);
    }
  }
  toneCssLines.push('}');
  toneCssLines.push('');

  const paletteNames = Object.keys(sourcePalette).map((name) => toKebab(name));
  const lightVars = {
    ...buildRoleVars(rolesLight as RoleGroups),
    ...buildPaletteVars(paletteNames, 'light'),
  };
  const darkVars = {
    ...buildRoleVars(rolesDark as RoleGroups),
    ...buildPaletteVars(paletteNames, 'dark'),
  };

  const roleCssLines = [
    ':root,',
    '.theme-light {',
    ...toVarLines(lightVars),
    '}',
    '',
    '.theme-dark {',
    ...toVarLines(darkVars),
    '}',
    '',
  ];

  return {
    tones,
    roles: {
      light: lightVars,
      dark: darkVars,
    },
    css: [...toneCssLines, ...roleCssLines].join('\n'),
    toneCss: toneCssLines.join('\n'),
    roleCss: roleCssLines.join('\n'),
  };
};

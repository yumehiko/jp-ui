# Overview

jp-ui is a set of React UI components built on top of Base UI (https://base-ui.com/).
It adds styling and ergonomics while keeping Base UI's composition model intact.

The layout and typography defaults are tuned for Japanese typesetting (font size, line
height, punctuation spacing, and line breaking).

## Scripts

The scripts in `package.json` (build, lint, typecheck, gen:*) are for developing this
repository. They are not exposed when you install `@yumehiko/jp-ui` as a dependency, so
run lint/typecheck in your consuming project instead.

## Icons

Built-in icons are exported as `Icons`. The `Icon` component uses Base UI's `useRender`,
so you can swap icons by passing a render prop or an SVG component.

```tsx
import { Icon, Icons } from '@yumehiko/jp-ui';

<Icon icon={Icons.Check} size={20} />;
<Icon render={<Icons.Check />} size={20} />;
```

To use your own icons, import an SVG as a React component in your app and pass it to
`Icon`. The `gen:icons` script is for this repository only.

## Tokens

Tokens are exposed as CSS variables. Override them in your app after importing
`@yumehiko/jp-ui/style.css`.

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

jp-ui uses Tabler Icons via `@tabler/icons-react`. The `Icon` component uses Base UI's
`useRender`, so you can pass any SVG component (including Tabler icons) as `render` or
`icon`.

```tsx
import { Icon } from '@yumehiko/jp-ui';
import { IconCheck } from '@tabler/icons-react';

<Icon icon={IconCheck} size={20} />;
<Icon render={<IconCheck />} size={20} />;
```

If you want to import Tabler icons directly in your app, add `@tabler/icons-react` to
your dependencies as well (pnpm does not hoist transitive deps by default).

## Tokens

Tokens are exposed as CSS variables. Override them in your app after importing
`@yumehiko/jp-ui/style.css`.

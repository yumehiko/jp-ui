# Icons

## Tabler icons

jp-ui uses Tabler Icons via `@tabler/icons-react`. Import what you need and pass it to
`Icon`. If you want to import Tabler icons directly in your app, add
`@tabler/icons-react` to your dependencies (pnpm does not hoist transitive deps by
default).

```tsx
import { Icon } from '@yumehiko/jp-ui';
import { IconCheck } from '@tabler/icons-react';

export function Example() {
  return <Icon icon={IconCheck} size={20} />;
}
```

## Custom icons

`Icon` supports Base UI's `render` prop. You can pass any SVG component (including your
own) via `render` or `icon`.

```tsx
import { Icon } from '@yumehiko/jp-ui';
import MyIcon from './my-icon.svg?react';

export function Example() {
  return <Icon render={<MyIcon />} size={20} />;
}
```

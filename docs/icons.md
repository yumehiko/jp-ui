# Icons

## Built-in icons

Built-in icons are exported as `Icons`.

```tsx
import { Icon, Icons } from '@yumehiko/jp-ui';

export function Example() {
  return <Icon icon={Icons.Check} size={20} />;
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

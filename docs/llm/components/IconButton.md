# Icon Button

Source: src/components/icon-button/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconEdit } from '@tabler/icons-react';
import { IconButton } from '..';

type ExampleProps = React.ComponentProps<typeof IconButton>;

export function Example(props: ExampleProps) {
  const {
    'aria-label': ariaLabel = '編集',
    children = <Icon icon={IconEdit} size={24} />,
    variant = 'filled',
    ...rest
  } = props;

  return (
    <IconButton {...rest} aria-label={ariaLabel} variant={variant}>
      {children}
    </IconButton>
  );
}

```

Source: dist/components/icon-button/IconButton.d.ts

## Types

```ts
type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';

type ButtonSize = 'large' | 'small';

type IconButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    'aria-label': string;
    variant?: ButtonVariant;
    size?: ButtonSize;
};
```

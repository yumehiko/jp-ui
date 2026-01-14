# Button

Source: src/components/button/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Button } from '..';

type ExampleProps = React.ComponentProps<typeof Button>;

export function Example(props: ExampleProps) {
  const { children = 'Submit', variant = 'filled', ...rest } = props;

  return (
    <Button {...rest} variant={variant}>
      {children}
    </Button>
  );
}

```

Source: dist/components/button/Button.d.ts

## Types

```ts
type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';

type ButtonSize = 'large' | 'small';

type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};
```

Source: dist/components/button/IconButton.d.ts

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

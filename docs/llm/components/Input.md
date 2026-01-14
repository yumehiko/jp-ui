# Input

Source: src/components/input/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Input } from '..';

type ExampleProps = React.ComponentProps<typeof Input>;

export function Example(props: ExampleProps) {
  const { 'aria-label': ariaLabel = '入力欄', placeholder = 'Place Holder', ...rest } = props;

  return <Input aria-label={ariaLabel} placeholder={placeholder} {...rest} />;
}

```

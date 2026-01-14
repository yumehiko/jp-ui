# Node Graph / PortLabel

Source: src/components/node-graph/PortLabel/Example.tsx

## Example

```tsx
import * as React from 'react';
import { PortLabel } from '..';

type ExampleProps = React.ComponentProps<typeof PortLabel>;

export function Example(props: ExampleProps) {
  const { portName = 'Port Name', direction = 'output', state = 'enabled', ...rest } = props;

  return (
    <PortLabel
      {...rest}
      portName={portName}
      direction={direction}
      state={state}
    />
  );
}

```

Source: dist/components/node-graph/PortLabel/PortLabel.d.ts

## Types

```ts
export type PortLabelState = 'enabled' | 'hovered' | 'pressed' | 'focused';

export type PortLabelDirection = 'input' | 'output';

export type PortLabelProps = {
    portName?: string;
    state?: PortLabelState;
    direction?: PortLabelDirection;
} & useRender.ComponentProps<'button'>;
```

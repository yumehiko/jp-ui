# Node Graph / Port

Source: src/components/node-graph/Port/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Port } from '..';

type ExampleProps = React.ComponentProps<typeof Port>;

export function Example(props: ExampleProps) {
  const { label = 'Port Name', pinKeyColor = 'green', ...rest } = props;

  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
      <Port {...rest} label={label} pinKeyColor={pinKeyColor} direction="input" />
      <Port {...rest} label={label} pinKeyColor={pinKeyColor} direction="output" />
    </div>
  );
}

```

Source: dist/components/node-graph/Port/Port.d.ts

## Types

```ts
export type PortDirection = PortLabelDirection;

type DataAttributes = {
    [key: `data-${string}`]: string | number | boolean | undefined;
};

export type PortProps = {
    direction?: PortDirection;
    label?: string;
    pinState?: PinState;
    pinShape?: PinShape;
    pinConnected?: boolean;
    pinKeyColor?: PinKeyColor;
    labelState?: PortLabelState;
    pinProps?: (Omit<PinProps, 'state' | 'shape' | 'isConnected' | 'keyColor'> & DataAttributes);
    pinRef?: Ref<HTMLButtonElement>;
    labelProps?: (Omit<PortLabelProps, 'portName' | 'direction' | 'state'> & DataAttributes);
} & useRender.ComponentProps<'div'>;
```

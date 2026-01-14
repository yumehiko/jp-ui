# Node Graph / Pin

Source: src/components/node-graph/Pin/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Pin } from '..';

type ExampleProps = React.ComponentProps<typeof Pin>;

export function Example(props: ExampleProps) {
  const {
    keyColor = 'blue',
    shape = 'circle',
    state = 'enabled',
    isConnected = false,
    ...rest
  } = props;

  return (
    <Pin
      {...rest}
      keyColor={keyColor}
      shape={shape}
      state={state}
      isConnected={isConnected}
    />
  );
}

```

Source: dist/components/node-graph/Pin/Pin.d.ts

## Types

```ts
export type PinShape = 'circle' | 'capsule';

export type PinState = 'enabled' | 'hovered' | 'focused' | 'dragged';

export type PinKeyColor = 'red' | 'orange' | 'yellow' | 'pea' | 'green' | 'cyan' | 'blue' | 'violet' | 'purple' | 'achromatic';

export type PinProps = {
    shape?: PinShape;
    state?: PinState;
    /**
     * 接続状態。`true` のとき中央の空洞が埋まり、`data-connected="true"` が付与されます。
     */
    isConnected?: boolean;
    keyColor?: PinKeyColor;
} & useRender.ComponentProps<'button'>;
```

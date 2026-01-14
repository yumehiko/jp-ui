# Node Graph / Wire

Source: src/components/node-graph/Wire/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Wire } from '..';

type ExampleProps = React.ComponentProps<typeof Wire>;

export function Example(props: ExampleProps) {
  const {
    start = { x: 32, y: 64 },
    end = { x: 288, y: 224 },
    curve = 'bezier',
    styleType = 'solid',
    keyColor = 'cyan',
    coordinateSystem = 'world',
    viewWidth = 320,
    viewHeight = 260,
    ...rest
  } = props;

  return (
    <div style={{ padding: 24, background: 'var(--surface)', maxWidth: 360 }}>
      <Wire
        {...rest}
        start={start}
        end={end}
        curve={curve}
        styleType={styleType}
        keyColor={keyColor}
        coordinateSystem={coordinateSystem}
        viewWidth={viewWidth}
        viewHeight={viewHeight}
      />
    </div>
  );
}

```

Source: dist/components/node-graph/Wire/Wire.d.ts

## Types

```ts
export type WireCurve = 'bezier' | 'straight';

export type WireStyle = 'solid' | 'dash';

export type WireState = 'enabled' | 'focused';

export type WireCoordinateSystem = 'boundingBox' | 'world';

export type WirePoint = {
    x: number;
    y: number;
};

export type WireProps = {
    start: WirePoint;
    end: WirePoint;
    curve?: WireCurve;
    styleType?: WireStyle;
    state?: WireState;
    keyColor?: PinKeyColor;
    viewWidth?: number;
    viewHeight?: number;
    viewBoxX?: number;
    viewBoxY?: number;
    coordinateSystem?: WireCoordinateSystem;
} & Omit<useRender.ComponentProps<'svg'>, 'start' | 'end'>;
```

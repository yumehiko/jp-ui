# Node Graph / CanvasBackground

Source: src/components/node-graph/CanvasBackground/Example.tsx

## Example

```tsx
import * as React from 'react';
import { CanvasBackground } from '..';

type ExampleProps = React.ComponentProps<typeof CanvasBackground>;

export function Example(props: ExampleProps) {
  return (
    <div
      style={{
        padding: '48px 24px',
        background: 'var(--surface)',
        minHeight: '100vh',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          height: 'min(70vh, 720px)',
          margin: '0 auto',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid var(--outline-variant)',
        }}
      >
        <CanvasBackground {...props}>
          <div style={{ padding: 24, color: 'var(--on-surface)' }}>Canvas content</div>
        </CanvasBackground>
      </div>
    </div>
  );
}

```

Source: dist/components/node-graph/CanvasBackground/CanvasBackground.d.ts

## Types

```ts
export type CanvasBackgroundProps = {
    /** 拡大縮小スケール。パターンの間隔とドット径に反映される */
    scale?: number;
    /** パン追従用の背景オフセット（CSS px）。 */
    offsetX?: number;
    /** パン追従用の背景オフセット（CSS px）。 */
    offsetY?: number;
} & useRender.ComponentProps<'div'>;
```

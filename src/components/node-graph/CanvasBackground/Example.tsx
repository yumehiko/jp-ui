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

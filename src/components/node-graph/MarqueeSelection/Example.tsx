import * as React from 'react';
import { MarqueeSelection } from '..';

type ExampleProps = React.ComponentProps<typeof MarqueeSelection>;

export function Example(props: ExampleProps) {
  const {
    rect = { x: 48, y: 56, width: 200, height: 140 },
    visible = true,
    ...rest
  } = props;

  return (
    <div
      style={{
        padding: '48px 24px',
        background: 'var(--surface)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 'min(960px, 100%)',
          height: 420,
          borderRadius: 16,
          border: '1px dashed var(--outline-variant)',
        }}
      >
        <MarqueeSelection {...rest} rect={rect} visible={visible} />
      </div>
    </div>
  );
}

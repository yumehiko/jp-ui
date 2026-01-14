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

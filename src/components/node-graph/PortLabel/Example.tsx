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

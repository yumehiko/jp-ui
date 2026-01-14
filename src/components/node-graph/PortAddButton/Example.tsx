import * as React from 'react';
import { PortAddButton } from '..';

type ExampleProps = React.ComponentProps<typeof PortAddButton>;

export function Example(props: ExampleProps) {
  const { label = 'Add Port', pinKeyColor = 'violet', ...rest } = props;

  return <PortAddButton {...rest} label={label} pinKeyColor={pinKeyColor} />;
}

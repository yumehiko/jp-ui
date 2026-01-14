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

import * as React from 'react';
import { Button } from '..';

type ExampleProps = React.ComponentProps<typeof Button>;

export function Example(props: ExampleProps) {
  const { children = 'Submit', variant = 'filled', ...rest } = props;

  return (
    <Button {...rest} variant={variant}>
      {children}
    </Button>
  );
}

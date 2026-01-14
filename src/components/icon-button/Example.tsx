import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconEdit } from '@tabler/icons-react';
import { IconButton } from '..';

type ExampleProps = React.ComponentProps<typeof IconButton>;

export function Example(props: ExampleProps) {
  const {
    'aria-label': ariaLabel = '編集',
    children = <Icon icon={IconEdit} size={24} />,
    variant = 'filled',
    ...rest
  } = props;

  return (
    <IconButton {...rest} aria-label={ariaLabel} variant={variant}>
      {children}
    </IconButton>
  );
}

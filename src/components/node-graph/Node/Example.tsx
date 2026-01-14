import * as React from 'react';
import { IconBox } from '@tabler/icons-react';
import { Node } from '..';

type ExampleProps = React.ComponentProps<typeof Node>;

export function Example(props: ExampleProps) {
  const {
    title = 'Node Title',
    showLeadingIcon = true,
    leadingIcon = IconBox,
    valid = true,
    selectable = true,
    defaultSelected = false,
    ...rest
  } = props;

  return (
    <div style={{ padding: 32, background: 'var(--surface)', minHeight: '100vh' }}>
      <Node
        {...rest}
        title={title}
        showLeadingIcon={showLeadingIcon}
        leadingIcon={leadingIcon}
        valid={valid}
        selectable={selectable}
        defaultSelected={defaultSelected}
      />
    </div>
  );
}

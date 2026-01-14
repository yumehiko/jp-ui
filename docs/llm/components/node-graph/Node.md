# Node Graph / Node

Source: src/components/node-graph/Node/Example.tsx

## Example

```tsx
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

```

Source: dist/components/node-graph/Node/Node.d.ts

## Types

```ts
export type NodeState = 'enabled' | 'selected';

export type NodeProps = {
    title?: string;
    showLeadingIcon?: boolean;
    leadingIcon?: IconProps['icon'];
    valid?: boolean;
    state?: NodeState;
    selectable?: boolean;
    showPortAddButton?: boolean;
    onAddPort?: (side: PortAddButtonSide) => void;
    disableInternalSelection?: boolean;
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    keyColor?: PinKeyColor;
    outputs?: ReactNode | ReactNode[];
    inputs?: ReactNode | ReactNode[];
    pinShape?: PinShape;
    pinState?: PinState;
    pinConnected?: boolean;
    pinKeyColor?: PinKeyColor;
    labelState?: PortLabelState;
    defaultPortProps?: Omit<PortProps, 'direction' | 'label' | 'children'>;
} & useRender.ComponentProps<'div'>;
```

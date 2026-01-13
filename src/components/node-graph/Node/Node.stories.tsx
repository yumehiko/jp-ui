import type { Meta, StoryObj } from '@storybook/react';
import { IconBox } from '@tabler/icons-react';
import { Node } from '..';

const meta: Meta<typeof Node> = {
  title: 'Components/Node Graph/Node',
  component: Node,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Node Title',
    showLeadingIcon: true,
    leadingIcon: IconBox,
    valid: true,
    selectable: true,
    defaultSelected: false,
  },
};

export default meta;

type Story = StoryObj<typeof Node>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 32, background: 'var(--surface)', minHeight: '100vh' }}>
      <Node {...args} />
    </div>
  ),
};

export const Selected: Story = {
  args: {
    defaultSelected: true,
  },
  render: (args) => (
    <div style={{ padding: 32, background: 'var(--surface)', minHeight: '100vh' }}>
      <Node {...args} />
    </div>
  ),
};

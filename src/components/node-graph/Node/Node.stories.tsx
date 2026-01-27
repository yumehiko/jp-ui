import type { Meta, StoryObj } from '@storybook/react-vite';
import { Node } from '..';
import { Example } from './Example';

const meta: Meta<typeof Node> = {
  title: 'Components/Node Graph/Node',
  component: Node,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Node Title',
    showLeadingIcon: true,
    valid: true,
    selectable: true,
    defaultSelected: false,
  },
};

export default meta;

type Story = StoryObj<typeof Node>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

export const Selected: Story = {
  args: {
    defaultSelected: true,
  },
  render: (args) => <Example {...args} />,
};

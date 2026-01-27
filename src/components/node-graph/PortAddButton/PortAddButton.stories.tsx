import type { Meta, StoryObj } from '@storybook/react-vite';
import { PortAddButton } from '..';
import { Example } from './Example';

const meta: Meta<typeof PortAddButton> = {
  title: 'Components/Node Graph/Port Add Button',
  component: PortAddButton,
  args: {
    label: 'Add Port',
    pinKeyColor: 'violet',
  },
};

export default meta;

type Story = StoryObj<typeof PortAddButton>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

export const StaticStates: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 280 }}>
      <PortAddButton {...args} state="enabled" />
      <PortAddButton {...args} state="hovered" />
      <PortAddButton {...args} state="focused" />
      <PortAddButton {...args} state="pressed" />
      <PortAddButton {...args} state="disabled" />
    </div>
  ),
};

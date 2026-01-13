import type { Meta, StoryObj } from '@storybook/react';
import { PortLabel } from '..';

const meta: Meta<typeof PortLabel> = {
  title: 'Components/Node Graph/Port Label',
  component: PortLabel,
  args: {
    portName: 'Port Name',
    direction: 'output',
    state: 'enabled',
  },
};

export default meta;

type Story = StoryObj<typeof PortLabel>;

export const Default: Story = {};

export const Directions: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 280 }}>
      <PortLabel {...args} direction="input" />
      <PortLabel {...args} direction="output" />
      <PortLabel {...args} direction="output" state="hovered" />
      <PortLabel {...args} direction="output" state="focused" />
      <PortLabel {...args} direction="output" state="pressed" />
    </div>
  ),
};

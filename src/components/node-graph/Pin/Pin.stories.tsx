import type { Meta, StoryObj } from '@storybook/react';
import { Pin } from '..';

const meta: Meta<typeof Pin> = {
  title: 'Components/Node Graph/Pin',
  component: Pin,
  args: {
    keyColor: 'blue',
    shape: 'circle',
    state: 'enabled',
    isConnected: false,
  },
};

export default meta;

type Story = StoryObj<typeof Pin>;

export const Default: Story = {};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Pin {...args} state="enabled" />
      <Pin {...args} state="hovered" />
      <Pin {...args} state="focused" />
      <Pin {...args} state="dragged" />
      <Pin {...args} state="enabled" isConnected />
    </div>
  ),
};

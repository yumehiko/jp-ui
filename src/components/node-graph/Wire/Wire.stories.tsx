import type { Meta, StoryObj } from '@storybook/react';
import { Wire } from '..';

const meta: Meta<typeof Wire> = {
  title: 'Components/Node Graph/Wire',
  component: Wire,
  args: {
    start: { x: 32, y: 64 },
    end: { x: 288, y: 224 },
    curve: 'bezier',
    styleType: 'solid',
    keyColor: 'cyan',
    coordinateSystem: 'world',
    viewWidth: 320,
    viewHeight: 260,
  },
};

export default meta;

type Story = StoryObj<typeof Wire>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 24, background: 'var(--surface)', maxWidth: 360 }}>
      <Wire {...args} />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16, padding: 24, background: 'var(--surface)', maxWidth: 360 }}>
      <Wire {...args} styleType="solid" />
      <Wire {...args} styleType="dash" />
      <Wire {...args} curve="straight" />
    </div>
  ),
};

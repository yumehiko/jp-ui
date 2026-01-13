import type { Meta, StoryObj } from '@storybook/react';
import { Port } from '..';

const meta: Meta<typeof Port> = {
  title: 'Components/Node Graph/Port',
  component: Port,
  args: {
    label: 'Port Name',
    pinKeyColor: 'green',
  },
};

export default meta;

type Story = StoryObj<typeof Port>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
      <Port {...args} direction="input" />
      <Port {...args} direction="output" />
    </div>
  ),
};

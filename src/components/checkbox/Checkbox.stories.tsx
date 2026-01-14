import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '..';
import { Example } from './Example';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    defaultChecked: false,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

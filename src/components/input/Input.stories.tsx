import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    'aria-label': '入力欄',
    placeholder: 'Place Holder',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Placeholder: Story = {};

export const Filled: Story = {
  args: {
    defaultValue: 'Input Text',
  },
};

export const WithFixedWidth: Story = {
  render: (args) => (
    <div style={{ width: 480 }}>
      <Input {...args} />
    </div>
  ),
};

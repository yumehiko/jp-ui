import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '..';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    'aria-label': '入力欄',
    placeholder: 'Place Holder',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Placeholder: Story = {
  render: (args) => <Input {...args} />,
};

export const Filled: Story = {
  args: {
    defaultValue: 'Input Text',
  },
  render: (args) => <Input {...args} />,
};

export const WithFixedWidth: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <Input {...args} />
    </div>
  ),
};

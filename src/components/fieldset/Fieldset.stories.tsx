import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

type StoryArgs = {
  legend: string;
  disabled: boolean;
  placeholder: string;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Fieldset',
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    disabled: { control: 'boolean' },
    legend: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: {
    legend: '連絡先',
    disabled: false,
    placeholder: '入力してください',
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

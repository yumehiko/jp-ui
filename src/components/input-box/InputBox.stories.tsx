import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

type StoryArgs = {
  placeholder: string;
  defaultValue: string;
  disabled: boolean;
  invalid: boolean;
  readOnly: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/InputBox',
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  args: {
    placeholder: 'Place Holder',
    defaultValue: 'Input Text',
    disabled: false,
    invalid: false,
    readOnly: false,
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

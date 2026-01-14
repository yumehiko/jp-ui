import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

type StoryArgs = {
  label: string;
  supportingText?: string;
  errorMessage?: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Form',
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    invalid: { control: 'boolean' },
    errorMessage: { control: 'text' },
    supportingText: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
  },
  args: {
    label: 'Label',
    supportingText: 'Supporting text.',
    placeholder: 'Place Holder',
    defaultValue: '',
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

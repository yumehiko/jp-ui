import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { Field } from './Field';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    inputType: {
      control: 'select',
      options: ['text', 'select', 'path'],
    },
    invalid: { control: 'boolean' },
    errorMessage: { control: 'text' },
    supportingText: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
  },
  args: {
    label: 'Label',
    supportingText: 'Supporting text.',
    placeholder: 'Place Holder',
    inputType: 'text',
  },
};

export default meta;

type Story = StoryObj<typeof Field>;

const baseArgs = {
  leadingIcon: <Icon name="edit" size={24} />,
  errorMessage: 'Validation Error Text.',
};

export const Text: Story = {
  args: {
    ...baseArgs,
    inputType: 'text',
  },
};

export const Select: Story = {
  args: {
    ...baseArgs,
    inputType: 'select',
  },
};

export const Path: Story = {
  args: {
    ...baseArgs,
    inputType: 'path',
  },
};

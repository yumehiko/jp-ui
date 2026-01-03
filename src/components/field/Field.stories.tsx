import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { InputBox } from '..';
import { Field } from '..';

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
  title: 'Components/Field',
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

const FieldStory = (args: StoryArgs) => {
  const [value, setValue] = React.useState(args.defaultValue ?? '');

  React.useEffect(() => {
    setValue(args.defaultValue ?? '');
  }, [args.defaultValue]);

  return (
    <Field
      label={args.label}
      supportingText={args.supportingText}
      errorMessage={args.errorMessage}
      invalid={args.invalid}
      disabled={args.disabled}
      readOnly={args.readOnly}
    >
      <InputBox
        leadingIcon={<Icon name="edit" size={24} />}
        value={value}
        onValueChange={setValue}
        invalid={args.invalid}
        disabled={args.disabled}
        readOnly={args.readOnly}
        placeholder={args.placeholder}
        trailingIcon={
          args.invalid ? <Icon name="exclamation-circle" size={24} /> : undefined
        }
      />
    </Field>
  );
};

export const Default: Story = {
  render: (args) => <FieldStory {...args} />,
};

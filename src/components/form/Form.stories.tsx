import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '..';
import { Field } from '..';
import { InputBox } from '..';
import { Form } from '..';
import styles from './Form.module.css';

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

const FormStory = (args: StoryArgs) => {
  const [value, setValue] = React.useState(args.defaultValue ?? '');

  React.useEffect(() => {
    setValue(args.defaultValue ?? '');
  }, [args.defaultValue]);

  return (
    <Form
      onFormSubmit={() => {
        setValue('');
      }}
    >
      <Field
        label={args.label}
        supportingText={args.supportingText}
        errorMessage={args.errorMessage}
        invalid={args.invalid}
        disabled={args.disabled}
        readOnly={args.readOnly}
      >
        <InputBox
          value={value}
          onValueChange={setValue}
          invalid={args.invalid}
          disabled={args.disabled}
          readOnly={args.readOnly}
          placeholder={args.placeholder}
        />
      </Field>
      <div className={styles.Actions}>
        <Button type="button" variant="ghost">
          キャンセル
        </Button>
        <Button type="submit" disabled={args.disabled}>
          送信
        </Button>
      </div>
    </Form>
  );
};

export const Default: Story = {
  render: (args) => <FormStory {...args} />,
};

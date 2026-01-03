import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { InputBox } from '..';

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

const InputBoxStory = (args: StoryArgs) => {
  const [value, setValue] = React.useState(args.defaultValue);

  React.useEffect(() => {
    setValue(args.defaultValue);
  }, [args.defaultValue]);

  return (
    <InputBox
      floatingLabel={<span>Label</span>}
      leadingIcon={<Icon name="dummy" size={24} />}
      value={value}
      onValueChange={setValue}
      invalid={args.invalid}
      readOnly={args.readOnly}
      placeholder={args.placeholder}
      trailingIcon={
        args.invalid ? <Icon name="exclamation-circle" size={24} /> : undefined
      }
      disabled={args.disabled}
    />
  );
};

export const Default: Story = {
  render: (args) => <InputBoxStory {...args} />,
};

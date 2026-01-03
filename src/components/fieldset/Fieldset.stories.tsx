import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '..';
import { InputBox } from '..';
import { FieldsetLegend, FieldsetRoot } from '..';

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

const FieldsetStory = (args: StoryArgs) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <FieldsetRoot disabled={args.disabled}>
      <FieldsetLegend>{args.legend}</FieldsetLegend>
      <Field label="氏名">
        <InputBox
          value={name}
          onValueChange={setName}
          disabled={args.disabled}
          placeholder={args.placeholder}
        />
      </Field>
      <Field label="メールアドレス">
        <InputBox
          value={email}
          onValueChange={setEmail}
          disabled={args.disabled}
          placeholder={args.placeholder}
        />
      </Field>
    </FieldsetRoot>
  );
};

export const Default: Story = {
  render: (args) => <FieldsetStory {...args} />,
};

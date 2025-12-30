import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '@base-ui/react/field';
import { Checkbox } from './Checkbox';
import styles from './Checkbox.module.css';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    defaultChecked: false,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export const Default: Story = {
  render: (args) => (
    <label className={labelClassName}>
      <Checkbox {...args} />
      通知を有効にする
    </label>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <label className={labelClassName}>
      <Checkbox {...args} />
      通知を有効にする
    </label>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <label className={labelClassName}>
      <Checkbox {...args} />
      通知を有効にする
    </label>
  ),
};

export const WithFieldLabel: Story = {
  render: (args) => (
    <Field.Root name="notifications">
      <Field.Label className={labelClassName}>
        <Checkbox {...args} />
        通知を有効にする
      </Field.Label>
    </Field.Root>
  ),
};

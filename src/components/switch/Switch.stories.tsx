import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '@base-ui/react/field';
import { Switch } from '..';
import styles from './Switch.module.css';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    defaultChecked: false,
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export const Default: Story = {
  render: (args) => <Switch {...args} />,
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <label className={labelClassName}>
      <Switch {...args} />
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
      <Switch {...args} />
      通知を有効にする
    </label>
  ),
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => (
    <label className={labelClassName}>
      <Switch {...args} />
      通知を有効にする
    </label>
  ),
};

export const WithFieldLabel: Story = {
  render: (args) => (
    <Field.Root name="notifications">
      <Field.Label className={labelClassName}>
        <Switch {...args} />
        通知を有効にする
      </Field.Label>
    </Field.Root>
  ),
};

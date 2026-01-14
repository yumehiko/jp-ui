import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '@base-ui/react/field';
import { Switch } from '..';
import styles from './Switch.module.css';
import { Example } from './Example';

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
  render: (args) => <Example {...args} />,
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => <Example {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Example {...args} />,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <Example {...args} />,
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

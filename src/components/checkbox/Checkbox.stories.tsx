import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '..';
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
    <div style={{ display: 'grid', gap: 12 }}>
      <label className={labelClassName}>
        <Checkbox {...args} />
        通知を有効にする
      </label>
      <label className={labelClassName}>
        <Checkbox {...args} defaultChecked />
        通知を有効にする（選択済み）
      </label>
      <label className={labelClassName}>
        <Checkbox {...args} disabled />
        通知を有効にする（無効）
      </label>
    </div>
  ),
};

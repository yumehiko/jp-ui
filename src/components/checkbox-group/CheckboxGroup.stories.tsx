import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../checkbox/Checkbox';
import checkboxStyles from '../checkbox/Checkbox.module.css';
import { CheckboxGroup } from './CheckboxGroup';
import styles from './CheckboxGroup.module.css';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Checkbox/Group',
  component: CheckboxGroup,
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

const labelClassName = `typesetting-label typesetting-tsumegumi ${checkboxStyles.Label}`;

const options = [
  { label: 'お知らせを受け取る', value: 'news' },
  { label: 'アップデートを受け取る', value: 'updates' },
  { label: 'ヒントを受け取る', value: 'tips' },
];

export const Default: Story = {
  render: () => {
    const id = React.useId();
    return (
      <CheckboxGroup aria-labelledby={id} defaultValue={['news']}>
        <div id={id} className={styles.Caption}>
          通知設定
        </div>
        {options.map((option) => (
          <label key={option.value} className={labelClassName}>
            <Checkbox name="notifications" value={option.value} />
            {option.label}
          </label>
        ))}
      </CheckboxGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const id = React.useId();
    return (
      <CheckboxGroup aria-labelledby={id} defaultValue={['news']} disabled>
        <div id={id} className={styles.Caption}>
          通知設定（無効）
        </div>
        {options.map((option) => (
          <label key={option.value} className={labelClassName}>
            <Checkbox name="notifications" value={option.value} />
            {option.label}
          </label>
        ))}
      </CheckboxGroup>
    );
  },
};

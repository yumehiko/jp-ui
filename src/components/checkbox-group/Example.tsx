import * as React from 'react';
import { Checkbox } from '..';
import checkboxStyles from '../checkbox/Checkbox.module.css';
import { CheckboxGroup } from '..';
import styles from './CheckboxGroup.module.css';

const labelClassName = `typesetting-label typesetting-tsumegumi ${checkboxStyles.Label}`;

const options = [
  { label: 'お知らせを受け取る', value: 'news' },
  { label: 'アップデートを受け取る', value: 'updates' },
  { label: 'ヒントを受け取る', value: 'tips' },
];

export function Example() {
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
}

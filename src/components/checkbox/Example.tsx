import * as React from 'react';
import { Checkbox } from '..';
import styles from './Checkbox.module.css';

type ExampleProps = React.ComponentProps<typeof Checkbox>;

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export function Example(props: ExampleProps) {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <label className={labelClassName}>
        <Checkbox {...props} />
        通知を有効にする
      </label>
      <label className={labelClassName}>
        <Checkbox {...props} defaultChecked />
        通知を有効にする（選択済み）
      </label>
      <label className={labelClassName}>
        <Checkbox {...props} disabled />
        通知を有効にする（無効）
      </label>
    </div>
  );
}

import * as React from 'react';
import { Switch } from '..';
import styles from './Switch.module.css';

type ExampleProps = React.ComponentProps<typeof Switch>;

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export function Example(props: ExampleProps) {
  return (
    <label className={labelClassName}>
      <Switch {...props} />
      通知を有効にする
    </label>
  );
}

import { Radio } from '..';
import { RadioGroup } from '..';
import styles from './Radio.module.css';

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export function Example() {
  return (
    <RadioGroup defaultValue="tokyo">
      <label className={labelClassName}>
        <Radio value="tokyo" />
        Tokyo
      </label>
      <label className={labelClassName}>
        <Radio value="osaka" />
        Osaka
      </label>
      <label className={labelClassName}>
        <Radio value="sapporo" disabled />
        Sapporo
      </label>
    </RadioGroup>
  );
}

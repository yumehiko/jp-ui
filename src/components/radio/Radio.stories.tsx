import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '@base-ui/react/radio-group';
import { Radio } from './Radio';
import styles from './Radio.module.css';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="tokyo" style={{ display: 'grid', gap: 12 }}>
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
  ),
};

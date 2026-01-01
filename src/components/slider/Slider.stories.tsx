import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '@base-ui/react/field';
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from './Slider';
import styles from './Slider.module.css';

const meta: Meta = {
  title: 'Components/Slider',
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 640, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export const Default: Story = {
  render: () => (
    <SliderRoot defaultValue={25}>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label="音量" />
        </SliderTrack>
      </SliderControl>
      <SliderValue>{([value]) => `${value}%`}</SliderValue>
    </SliderRoot>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Field.Root name="volume">
      <Field.Label className={labelClassName}>音量</Field.Label>
      <SliderRoot defaultValue={40}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb aria-label="音量" />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>
    </Field.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <SliderRoot defaultValue={30} disabled>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label="音量" />
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  ),
};

export const Range: Story = {
  render: () => (
    <SliderRoot defaultValue={[25, 75]}>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb index={0} aria-label="開始" />
          <SliderThumb index={1} aria-label="終了" />
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '..';
import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '..';
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
    <Field
      name="volume"
      label="音量"
      labelPlacement="start"
      labelClassName={labelClassName}
    >
      <SliderRoot defaultValue={40}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb aria-label="音量" />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>
    </Field>
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

import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '..';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Meter',
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <Example />,
};

export const CustomRange: Story = {
  render: () => (
    <MeterRoot value={12} min={0} max={48} aria-label="バッテリー残量">
      <MeterLabel>バッテリー</MeterLabel>
      <MeterValue>{(_, value) => `${value} / 48`}</MeterValue>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterRoot>
  ),
};

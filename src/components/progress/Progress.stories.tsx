import type { Meta, StoryObj } from '@storybook/react';
import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from '..';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Progress',
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

export const Indeterminate: Story = {
  render: () => (
    <ProgressRoot value={null} aria-label="処理の進捗">
      <ProgressLabel>同期中</ProgressLabel>
      <ProgressValue>{() => '--'}</ProgressValue>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  ),
};

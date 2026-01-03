import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from '..';

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

const DefaultStory = () => {
  const [value, setValue] = React.useState(32);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, current + 12));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressRoot value={value} aria-label="処理の進捗">
      <ProgressLabel>データ書き出し</ProgressLabel>
      <ProgressValue>{(formatted, raw) => (raw === null ? '-' : formatted)}</ProgressValue>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  );
};

export const Default: Story = {
  render: () => <DefaultStory />,
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

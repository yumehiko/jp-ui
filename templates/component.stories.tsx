import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { ComponentName } from '..';

const meta: Meta = {
  title: 'Components/ComponentName',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const DefaultStory = () => (
  <div style={{ padding: 32 }}>
    <ComponentName />
  </div>
);

export const Default: Story = {
  render: () => <DefaultStory />,
};

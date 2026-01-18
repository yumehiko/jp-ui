import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Dialog',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <Example />,
};

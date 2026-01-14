import type { Meta, StoryObj } from '@storybook/react';
import { CanvasBackground } from '..';
import { Example } from './Example';

const meta: Meta<typeof CanvasBackground> = {
  title: 'Components/Node Graph/Canvas Background',
  component: CanvasBackground,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    scale: 1,
  },
};

export default meta;

type Story = StoryObj<typeof CanvasBackground>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

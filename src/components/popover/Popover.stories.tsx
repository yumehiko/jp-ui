import type { Meta, StoryObj } from '@storybook/react-vite';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Popover',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <Example />,
};

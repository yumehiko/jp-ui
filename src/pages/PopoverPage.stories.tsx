import type { Meta, StoryObj } from '@storybook/react';
import { PopoverPage } from './PopoverPage';

const meta: Meta<typeof PopoverPage> = {
  title: 'Pages/Popover',
  component: PopoverPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PopoverPage>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { ColorsPage } from './ColorsPage';

const meta: Meta<typeof ColorsPage> = {
  title: 'Foundations/Colors',
  component: ColorsPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ColorsPage>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { TypesettingPage } from './TypesettingPage';

const meta: Meta<typeof TypesettingPage> = {
  title: 'Foundations/Typesetting',
  component: TypesettingPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TypesettingPage>;

export const Default: Story = {};

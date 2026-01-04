import type { Meta, StoryObj } from '@storybook/react';
import { ColorsPage } from './ColorsPage';

const meta: Meta<typeof ColorsPage> = {
  title: 'Foundations/Colors',
  component: ColorsPage,
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    centeredStage: false,
  },
};

export default meta;

type Story = StoryObj<typeof ColorsPage>;

export const Default: Story = {};

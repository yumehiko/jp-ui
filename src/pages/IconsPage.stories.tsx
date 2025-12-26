import type { Meta, StoryObj } from '@storybook/react';
import { IconsPage } from './IconsPage';

const meta: Meta<typeof IconsPage> = {
  title: 'Foundations/Icons',
  component: IconsPage,
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof IconsPage>;

export const Default: Story = {};

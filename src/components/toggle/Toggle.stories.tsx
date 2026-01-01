import type { Meta, StoryObj } from '@storybook/react';
import { TogglePage } from '../../pages/TogglePage';

const meta: Meta<typeof TogglePage> = {
  title: 'Components/Toggle',
  component: TogglePage,
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

type Story = StoryObj<typeof TogglePage>;

export const Default: Story = {
  render: () => <TogglePage />,
};

import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Context Menu',
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <Example />,
};

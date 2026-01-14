import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Autocomplete',
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
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

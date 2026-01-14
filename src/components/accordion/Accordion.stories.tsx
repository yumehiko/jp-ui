import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Accordion',
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto' }}>
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

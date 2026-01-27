import type { Meta, StoryObj } from '@storybook/react-vite';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Avatar',
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
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

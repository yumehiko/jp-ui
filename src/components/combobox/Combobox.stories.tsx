import type { Meta, StoryObj } from '@storybook/react-vite';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Combobox',
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

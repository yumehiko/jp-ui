import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToolbarRoot } from '..';
import { Example } from './Example';

const meta: Meta<typeof ToolbarRoot> = {
  title: 'Components/Toolbar',
  component: ToolbarRoot,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToolbarRoot>;

export const Default: Story = {
  render: () => <Example />,
};

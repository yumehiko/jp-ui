import type { Meta, StoryObj } from '@storybook/react-vite';
import { Port } from '..';
import { Example } from './Example';

const meta: Meta<typeof Port> = {
  title: 'Components/Node Graph/Port',
  component: Port,
  args: {
    label: 'Port Name',
    pinKeyColor: 'green',
  },
};

export default meta;

type Story = StoryObj<typeof Port>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

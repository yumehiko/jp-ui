import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '..';
import { Example } from './Example';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => <Example />,
};

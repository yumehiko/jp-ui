import type { Meta, StoryObj } from '@storybook/react-vite';
import { MarqueeSelection } from '..';
import { Example } from './Example';

const meta: Meta<typeof MarqueeSelection> = {
  title: 'Components/Node Graph/Marquee Selection',
  component: MarqueeSelection,
  parameters: {
    layout: 'fullscreen',
    centeredStage: false,
  },
  args: {
    rect: { x: 48, y: 56, width: 200, height: 140 },
    visible: true,
  },
};

export default meta;

type Story = StoryObj<typeof MarqueeSelection>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

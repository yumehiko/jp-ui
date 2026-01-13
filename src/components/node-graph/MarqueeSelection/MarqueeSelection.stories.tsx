import type { Meta, StoryObj } from '@storybook/react';
import { MarqueeSelection } from '..';

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
  render: (args) => (
    <div
      style={{
        padding: '48px 24px',
        background: 'var(--surface)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 'min(960px, 100%)',
          height: 420,
          borderRadius: 16,
          border: '1px dashed var(--outline-variant)',
        }}
      >
        <MarqueeSelection {...args} />
      </div>
    </div>
  ),
};

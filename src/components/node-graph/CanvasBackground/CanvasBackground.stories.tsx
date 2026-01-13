import type { Meta, StoryObj } from '@storybook/react';
import { CanvasBackground } from '..';

const meta: Meta<typeof CanvasBackground> = {
  title: 'Components/Node Graph/Canvas Background',
  component: CanvasBackground,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    scale: 1,
  },
};

export default meta;

type Story = StoryObj<typeof CanvasBackground>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        padding: '48px 24px',
        background: 'var(--surface)',
        minHeight: '100vh',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          height: 'min(70vh, 720px)',
          margin: '0 auto',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid var(--outline-variant)',
        }}
      >
        <CanvasBackground {...args}>
          <div style={{ padding: 24, color: 'var(--on-surface)' }}>Canvas content</div>
        </CanvasBackground>
      </div>
    </div>
  ),
};

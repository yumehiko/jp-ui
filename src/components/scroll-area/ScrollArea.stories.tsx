import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from './ScrollArea';

const meta: Meta = {
  title: 'Components/ScrollArea',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const DefaultStory = () => (
  <ScrollAreaRoot style={{ width: 320, height: 196 }}>
    <ScrollAreaViewport>
      <ScrollAreaContent>
        <p className="typesetting-body">
          文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
        </p>
        <p className="typesetting-body">
          文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
        </p>
        <p className="typesetting-body">
          文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
        </p>
        <p className="typesetting-body">
          文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
        </p>
        <p className="typesetting-body">
          文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
        </p>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar>
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
);

export const Default: Story = {
  render: () => <DefaultStory />,
};

const HorizontalStory = () => (
  <ScrollAreaRoot style={{ width: 320, height: 160 }}>
    <ScrollAreaViewport>
      <ScrollAreaContent
        style={{ '--scrollarea-edge-offset': '0px' } as React.CSSProperties}
      >
        <div
          style={{
            display: 'flex',
            gap: 16,
            width: 880,
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              style={{
                minWidth: 120,
                height: 80,
                borderRadius: 12,
                background: 'var(--inverse-surface)',
                color: 'var(--inverse-on-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
              }}
            >
              Item {index + 1}
            </div>
          ))}
        </div>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
);

export const Horizontal: Story = {
  render: () => <HorizontalStory />,
};

const BothStory = () => (
  <ScrollAreaRoot style={{ width: 320, height: 196 }}>
    <ScrollAreaViewport>
      <ScrollAreaContent
        style={{ '--scrollarea-edge-offset': '0px' } as React.CSSProperties}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 96px)',
            gridTemplateRows: 'repeat(6, 72px)',
            gap: 16,
          }}
        >
          {Array.from({ length: 60 }).map((_, index) => (
            <div
              key={index}
              style={{
                borderRadius: 12,
                background: 'var(--inverse-surface)',
                color: 'var(--inverse-on-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar>
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
);

export const Both: Story = {
  render: () => <BothStory />,
};

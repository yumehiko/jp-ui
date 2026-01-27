import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CollapsibleContent,
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '..';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Collapsible',
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

export const DefaultOpen: Story = {
  render: () => (
    <CollapsibleRoot defaultOpen>
      <CollapsibleTrigger>仕様の詳細</CollapsibleTrigger>
      <CollapsiblePanel>
        <CollapsibleContent className="typesetting-body">
          パネルはSurface Containerの背景とLサイズの角丸を持ちます。
        </CollapsibleContent>
      </CollapsiblePanel>
    </CollapsibleRoot>
  ),
};

export const Disabled: Story = {
  render: () => (
    <CollapsibleRoot disabled>
      <CollapsibleTrigger>操作できません</CollapsibleTrigger>
      <CollapsiblePanel>
        <CollapsibleContent className="typesetting-body">
          無効時はトリガーの操作を受け付けません。
        </CollapsibleContent>
      </CollapsiblePanel>
    </CollapsibleRoot>
  ),
};

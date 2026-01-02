import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { IconButton } from '../button/IconButton';
import { ToolbarButton, ToolbarGroup, ToolbarRoot, ToolbarSeparator } from './Toolbar';

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
  render: () => (
    <ToolbarRoot>
      <ToolbarButton
        render={<IconButton variant="ghost" size="small" />}
        unstyled
        aria-label="メニュー"
      >
        <Icon name="menu" size={16} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton>Align Left</ToolbarButton>
        <ToolbarButton>Align Right</ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarButton
        render={<IconButton variant="ghost" size="small" />}
        unstyled
        aria-label="編集"
      >
        <Icon name="edit" size={16} />
      </ToolbarButton>
      <ToolbarButton
        render={<IconButton variant="ghost" size="small" />}
        unstyled
        aria-label="フォルダ"
      >
        <Icon name="folder" size={16} />
      </ToolbarButton>
    </ToolbarRoot>
  ),
};

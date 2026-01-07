import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { IconEdit, IconFolder, IconMenu } from '@tabler/icons-react';
import { IconButton } from '..';
import { ToolbarButton, ToolbarGroup, ToolbarRoot, ToolbarSeparator } from '..';

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
        render={
          <IconButton
            nativeButton
            variant="ghost"
            size="small"
            aria-label="メニュー"
          />
        }
        unstyled
        aria-label="メニュー"
      >
        <Icon icon={IconMenu} size={16} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton>Align Left</ToolbarButton>
        <ToolbarButton>Align Right</ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarButton
        render={
          <IconButton
            nativeButton
            variant="ghost"
            size="small"
            aria-label="編集"
          />
        }
        unstyled
        aria-label="編集"
      >
        <Icon icon={IconEdit} size={16} />
      </ToolbarButton>
      <ToolbarButton
        render={
          <IconButton
            nativeButton
            variant="ghost"
            size="small"
            aria-label="フォルダ"
          />
        }
        unstyled
        aria-label="フォルダ"
      >
        <Icon icon={IconFolder} size={16} />
      </ToolbarButton>
    </ToolbarRoot>
  ),
};

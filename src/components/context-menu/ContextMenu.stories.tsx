import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import {
  ContextMenuItem,
  ContextMenuContent,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSubmenuRoot,
  ContextMenuSubmenuTrigger,
  ContextMenuTrigger,
} from '..';
import menuStyles from '../menu/Menu.module.css';

const meta: Meta = {
  title: 'Components/Context Menu',
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ContextMenuRoot>
      <ContextMenuTrigger>右クリックで開く</ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuContent>
              <ContextMenuItem>
                <span className={menuStyles.ItemLabel}>複製</span>
                <span className={menuStyles.ItemRight}>
                  <span className={menuStyles.ItemShortcut}>⌘D</span>
                </span>
              </ContextMenuItem>
              <ContextMenuItem>
                <span className={menuStyles.ItemLabel}>共有</span>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSubmenuRoot>
                <ContextMenuSubmenuTrigger>
                  <span className={menuStyles.ItemLabel}>移動</span>
                  <span className={menuStyles.ItemTrailingIcon}>
                    <Icon name="caret-right" size={16} />
                  </span>
                </ContextMenuSubmenuTrigger>
                <ContextMenuPortal>
                  <ContextMenuPositioner alignOffset={-4} sideOffset={-4}>
                    <ContextMenuPopup>
                      <ContextMenuContent>
                        <ContextMenuItem>
                          <span className={menuStyles.ItemLabel}>作業用</span>
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <span className={menuStyles.ItemLabel}>アーカイブ</span>
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenuPopup>
                  </ContextMenuPositioner>
                </ContextMenuPortal>
              </ContextMenuSubmenuRoot>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <span className={menuStyles.ItemLabel}>削除</span>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  ),
};

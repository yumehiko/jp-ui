import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { IconChevronRight } from '@tabler/icons-react';
import {
  MenuContent,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
} from '..';
import menuStyles from '../menu/Menu.module.css';
import { Menubar, MenubarTrigger } from '..';

const meta: Meta = {
  title: 'Components/Menubar',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const DefaultStory = () => (
  <div style={{ padding: 32 }}>
    <Menubar>
      <MenuRoot>
        <MenubarTrigger>ファイル</MenubarTrigger>
        <MenuPortal>
          <MenuPositioner sideOffset={8}>
            <MenuPopup>
              <MenuContent>
                <MenuItem>
                  <span className={menuStyles.ItemLabel}>新規作成</span>
                  <span className={menuStyles.ItemRight}>
                    <span className={menuStyles.ItemShortcut}>⌘N</span>
                  </span>
                </MenuItem>
                <MenuItem>
                  <span className={menuStyles.ItemLabel}>開く</span>
                </MenuItem>
                <MenuSubmenuRoot>
                  <MenuSubmenuTrigger>
                    <span className={menuStyles.ItemLabel}>書き出し</span>
                    <span className={menuStyles.ItemTrailingIcon}>
                      <Icon icon={IconChevronRight} size={24} />
                    </span>
                  </MenuSubmenuTrigger>
                  <MenuPortal>
                    <MenuPositioner side="right" align="start" sideOffset={8}>
                      <MenuPopup>
                        <MenuContent>
                          <MenuItem>
                            <span className={menuStyles.ItemLabel}>PDF</span>
                          </MenuItem>
                          <MenuItem>
                            <span className={menuStyles.ItemLabel}>PNG</span>
                          </MenuItem>
                          <MenuItem>
                            <span className={menuStyles.ItemLabel}>SVG</span>
                          </MenuItem>
                        </MenuContent>
                      </MenuPopup>
                    </MenuPositioner>
                  </MenuPortal>
                </MenuSubmenuRoot>
                <MenuSeparator />
                <MenuItem>
                  <span className={menuStyles.ItemLabel}>終了</span>
                </MenuItem>
              </MenuContent>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>

      <MenuRoot>
        <MenubarTrigger>編集</MenubarTrigger>
        <MenuPortal>
          <MenuPositioner sideOffset={8}>
            <MenuPopup>
              <MenuContent>
                <MenuItem>
                  <span className={menuStyles.ItemLabel}>切り取り</span>
                  <span className={menuStyles.ItemRight}>
                    <span className={menuStyles.ItemShortcut}>⌘X</span>
                  </span>
                </MenuItem>
                <MenuItem>
                  <span className={menuStyles.ItemLabel}>コピー</span>
                  <span className={menuStyles.ItemRight}>
                    <span className={menuStyles.ItemShortcut}>⌘C</span>
                  </span>
                </MenuItem>
                <MenuItem>
                  <span className={menuStyles.ItemLabel}>貼り付け</span>
                  <span className={menuStyles.ItemRight}>
                    <span className={menuStyles.ItemShortcut}>⌘V</span>
                  </span>
                </MenuItem>
              </MenuContent>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>

      <MenuRoot>
        <MenubarTrigger>表示</MenubarTrigger>
        <MenuPortal>
          <MenuPositioner sideOffset={8}>
            <MenuPopup>
              <MenuContent>
                <MenuItem>
                  <span className={menuStyles.ItemLabel}>拡大</span>
                  <span className={menuStyles.ItemRight}>
                    <span className={menuStyles.ItemShortcut}>⌘+</span>
                  </span>
                </MenuItem>
                <MenuItem>
                  <span className={menuStyles.ItemLabel}>縮小</span>
                  <span className={menuStyles.ItemRight}>
                    <span className={menuStyles.ItemShortcut}>⌘-</span>
                  </span>
                </MenuItem>
                <MenuSeparator />
                <MenuItem disabled>
                  <span className={menuStyles.ItemLabel}>全画面</span>
                </MenuItem>
              </MenuContent>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    </Menubar>
  </div>
);

export const Default: Story = {
  render: () => <DefaultStory />,
};

import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { Button } from '..';
import { MenuInputBox } from '..';
import {
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuRoot,
  MenuScrollAreaContent,
  MenuScrollAreaCorner,
  MenuScrollAreaRoot,
  MenuScrollAreaScrollbar,
  MenuScrollAreaThumb,
  MenuScrollAreaViewport,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
  MenuTrigger,
} from '..';
import styles from './Menu.module.css';

const meta: Meta = {
  title: 'Components/Menu',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const DefaultStory = () => (
  <div style={{ padding: 32 }}>
    <MenuRoot size="large">
      <MenuTrigger render={(props) => <Button {...props}>メニュー</Button>} />
      <MenuPortal>
        <MenuPositioner sideOffset={8}>
          <MenuPopup>
            <MenuScrollAreaRoot>
              <MenuScrollAreaViewport>
                <MenuScrollAreaContent>
                  <MenuContent>
                    <MenuItem>
                      <span className={styles.ItemLeadingIcon}>
                        <Icon name="plus" size={24} />
                      </span>
                      <span className={styles.ItemLabel}>新規作成</span>
                      <span className={styles.ItemRight}>
                        <span className={styles.ItemShortcut}>⌘N</span>
                      </span>
                    </MenuItem>
                    <MenuItem>
                      <span className={styles.ItemLeadingIcon}>
                        <Icon name="device-floppy" size={24} />
                      </span>
                      <span className={styles.ItemLabel}>保存</span>
                      <span className={styles.ItemRight}>
                        <span className={styles.ItemShortcut}>⌘S</span>
                      </span>
                    </MenuItem>
                  <MenuItem disabled>
                    <span className={styles.ItemLeadingIcon}>
                      <Icon name="trash" size={24} />
                    </span>
                    <span className={styles.ItemLabel}>削除</span>
                    <span className={styles.ItemRight}>
                      <span className={styles.ItemShortcut}>⌘⌫</span>
                    </span>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuInputBox
                    placeholder="検索"
                    leadingIcon={<Icon name="search" size={24} />}
                  />
                  <MenuSeparator />
                  <MenuGroup>
                    <MenuGroupLabel>表示</MenuGroupLabel>
                    <MenuCheckboxItem defaultChecked>
                        <MenuCheckboxItemIndicator>
                          <Icon name="check" size={24} />
                        </MenuCheckboxItemIndicator>
                        <span className={styles.OptionLabel}>サイドバー</span>
                      </MenuCheckboxItem>
                      <MenuCheckboxItem>
                        <MenuCheckboxItemIndicator>
                          <Icon name="check" size={24} />
                        </MenuCheckboxItemIndicator>
                        <span className={styles.OptionLabel}>目次</span>
                      </MenuCheckboxItem>
                    </MenuGroup>
                    <MenuSeparator />
                    <MenuGroup>
                      <MenuGroupLabel>並び替え</MenuGroupLabel>
                      <MenuRadioGroup defaultValue="date">
                        <MenuRadioItem value="date">
                          <MenuRadioItemIndicator>
                            <Icon name="check" size={24} />
                          </MenuRadioItemIndicator>
                          <span className={styles.OptionLabel}>更新日</span>
                        </MenuRadioItem>
                        <MenuRadioItem value="name">
                          <MenuRadioItemIndicator>
                            <Icon name="check" size={24} />
                          </MenuRadioItemIndicator>
                          <span className={styles.OptionLabel}>名前</span>
                        </MenuRadioItem>
                      </MenuRadioGroup>
                    </MenuGroup>
                    <MenuSeparator />
                    <MenuSubmenuRoot>
                      <MenuSubmenuTrigger>
                        <span className={styles.ItemLabel}>詳細</span>
                        <span className={styles.ItemTrailingIcon}>
                          <Icon name="chevron-right" size={24} />
                        </span>
                      </MenuSubmenuTrigger>
                      <MenuPortal>
                        <MenuPositioner side="right" align="start" sideOffset={8}>
                          <MenuPopup>
                            <MenuContent>
                              <MenuItem>
                                <span className={styles.ItemLabel}>共有</span>
                              </MenuItem>
                              <MenuItem>
                                <span className={styles.ItemLabel}>
                                  リンクをコピー
                                </span>
                                <span className={styles.ItemRight}>
                                  <span className={styles.ItemShortcut}>⌘C</span>
                                </span>
                              </MenuItem>
                            </MenuContent>
                          </MenuPopup>
                        </MenuPositioner>
                      </MenuPortal>
                    </MenuSubmenuRoot>
                  </MenuContent>
                </MenuScrollAreaContent>
              </MenuScrollAreaViewport>
              <MenuScrollAreaScrollbar orientation="vertical">
                <MenuScrollAreaThumb />
              </MenuScrollAreaScrollbar>
              <MenuScrollAreaCorner />
            </MenuScrollAreaRoot>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  </div>
);

export const Default: Story = {
  render: () => <DefaultStory />,
};

const SmallStory = () => (
  <div style={{ padding: 32 }}>
    <MenuRoot size="small">
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant="outlined">
            メニュー
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner sideOffset={8}>
          <MenuPopup>
            <MenuContent>
              <MenuItem>
                <span className={styles.ItemLeadingIcon}>
                  <Icon name="plus" size={16} />
                </span>
                <span className={styles.ItemLabel}>新規作成</span>
              <span className={styles.ItemRight}>
                <span className={styles.ItemShortcut}>⌘N</span>
              </span>
            </MenuItem>
                  <MenuItem>
                    <span className={styles.ItemLeadingIcon}>
                      <Icon name="device-floppy" size={16} />
                    </span>
                    <span className={styles.ItemLabel}>保存</span>
                    <span className={styles.ItemRight}>
                      <span className={styles.ItemShortcut}>⌘S</span>
                    </span>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuInputBox
                    size="small"
                    placeholder="検索"
                    leadingIcon={<Icon name="search" size={16} />}
                  />
                  <MenuSeparator />
                  <MenuGroup>
                    <MenuGroupLabel>表示</MenuGroupLabel>
                    <MenuCheckboxItem defaultChecked>
                <MenuCheckboxItemIndicator>
                  <Icon name="check" size={16} />
                </MenuCheckboxItemIndicator>
                <span className={styles.OptionLabel}>サイドバー</span>
              </MenuCheckboxItem>
              <MenuCheckboxItem>
                <MenuCheckboxItemIndicator>
                  <Icon name="check" size={16} />
                </MenuCheckboxItemIndicator>
                <span className={styles.OptionLabel}>目次</span>
              </MenuCheckboxItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuSubmenuRoot>
              <MenuSubmenuTrigger>
                <span className={styles.ItemLabel}>詳細</span>
                <span className={styles.ItemTrailingIcon}>
                  <Icon name="chevron-right" size={16} />
                </span>
              </MenuSubmenuTrigger>
              <MenuPortal>
                <MenuPositioner side="right" align="start" sideOffset={8}>
                  <MenuPopup>
                    <MenuItem>
                      <span className={styles.ItemLabel}>共有</span>
                    </MenuItem>
                    <MenuItem>
                      <span className={styles.ItemLabel}>リンクをコピー</span>
                      <span className={styles.ItemRight}>
                        <span className={styles.ItemShortcut}>⌘C</span>
                      </span>
                    </MenuItem>
                  </MenuPopup>
                </MenuPositioner>
                </MenuPortal>
            </MenuSubmenuRoot>
            </MenuContent>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  </div>
);

export const Small: Story = {
  render: () => <SmallStory />,
};

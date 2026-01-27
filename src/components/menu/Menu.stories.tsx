import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../assets/icons/Icon';
import {
  IconCheck,
  IconChevronRight,
  IconDeviceFloppy,
  IconPlus,
  IconSearch,
} from '@tabler/icons-react';
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
  MenuRoot,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
  MenuTrigger,
} from '..';
import styles from './Menu.module.css';
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Menu',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <Example />,
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
                  <Icon icon={IconPlus} size={16} />
                </span>
                <span className={styles.ItemLabel}>新規作成</span>
              <span className={styles.ItemRight}>
                <span className={styles.ItemShortcut}>⌘N</span>
              </span>
            </MenuItem>
                  <MenuItem>
                    <span className={styles.ItemLeadingIcon}>
                      <Icon icon={IconDeviceFloppy} size={16} />
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
                    leadingIcon={<Icon icon={IconSearch} size={16} />}
                  />
                  <MenuSeparator />
                  <MenuGroup>
                    <MenuGroupLabel>表示</MenuGroupLabel>
                    <MenuCheckboxItem defaultChecked>
                <MenuCheckboxItemIndicator>
                  <Icon icon={IconCheck} size={16} />
                </MenuCheckboxItemIndicator>
                <span className={styles.OptionLabel}>サイドバー</span>
              </MenuCheckboxItem>
              <MenuCheckboxItem>
                <MenuCheckboxItemIndicator>
                  <Icon icon={IconCheck} size={16} />
                </MenuCheckboxItemIndicator>
                <span className={styles.OptionLabel}>目次</span>
              </MenuCheckboxItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuSubmenuRoot>
              <MenuSubmenuTrigger>
                <span className={styles.ItemLabel}>詳細</span>
                <span className={styles.ItemTrailingIcon}>
                  <Icon icon={IconChevronRight} size={16} />
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

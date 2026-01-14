# Menu

Source: src/components/menu/Example.tsx

## Example

```tsx
import { Icon } from '../../assets/icons/Icon';
import {
  IconCheck,
  IconChevronRight,
  IconDeviceFloppy,
  IconPlus,
  IconSearch,
  IconTrash,
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

export function Example() {
  return (
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
                          <Icon icon={IconPlus} size={24} />
                        </span>
                        <span className={styles.ItemLabel}>新規作成</span>
                        <span className={styles.ItemRight}>
                          <span className={styles.ItemShortcut}>⌘N</span>
                        </span>
                      </MenuItem>
                      <MenuItem>
                        <span className={styles.ItemLeadingIcon}>
                          <Icon icon={IconDeviceFloppy} size={24} />
                        </span>
                        <span className={styles.ItemLabel}>保存</span>
                        <span className={styles.ItemRight}>
                          <span className={styles.ItemShortcut}>⌘S</span>
                        </span>
                      </MenuItem>
                      <MenuItem disabled>
                        <span className={styles.ItemLeadingIcon}>
                          <Icon icon={IconTrash} size={24} />
                        </span>
                        <span className={styles.ItemLabel}>削除</span>
                        <span className={styles.ItemRight}>
                          <span className={styles.ItemShortcut}>⌘⌫</span>
                        </span>
                      </MenuItem>
                      <MenuSeparator />
                      <MenuInputBox
                        placeholder="検索"
                        leadingIcon={<Icon icon={IconSearch} size={24} />}
                      />
                      <MenuSeparator />
                      <MenuGroup>
                        <MenuGroupLabel>表示</MenuGroupLabel>
                        <MenuCheckboxItem defaultChecked>
                          <MenuCheckboxItemIndicator>
                            <Icon icon={IconCheck} size={24} />
                          </MenuCheckboxItemIndicator>
                          <span className={styles.OptionLabel}>サイドバー</span>
                        </MenuCheckboxItem>
                        <MenuCheckboxItem>
                          <MenuCheckboxItemIndicator>
                            <Icon icon={IconCheck} size={24} />
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
                              <Icon icon={IconCheck} size={24} />
                            </MenuRadioItemIndicator>
                            <span className={styles.OptionLabel}>更新日</span>
                          </MenuRadioItem>
                          <MenuRadioItem value="name">
                            <MenuRadioItemIndicator>
                              <Icon icon={IconCheck} size={24} />
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
                            <Icon icon={IconChevronRight} size={24} />
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
                                  <span className={styles.ItemLabel}>リンクをコピー</span>
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
}

```

Source: src/components/menu/Menu.module.css

## Styles

```css
.Backdrop {
}

.Positioner {
  width: var(--positioner-width);
  height: var(--positioner-height);
  max-width: var(--available-width);
  max-height: var(--available-height);
  outline: 0;
  z-index: var(--z-overlay);
}

.Popup {
  box-sizing: border-box;
  border-radius: var(--radius-m);
  background-color: var(--surface-container);
  color: var(--on-surface);
  box-shadow: var(--elevation-2);
  transform-origin: var(--transform-origin);
  z-index: var(--z-overlay);
  min-width: 240px;
  max-width: min(320px, var(--available-width));
  max-height: var(--available-height);
  overflow: hidden;
  outline: 0;
}

.Popup[data-starting-style],
.Popup[data-ending-style] {
  opacity: 0;
  transform: scale(0.97);
}

.Arrow {
  display: none;
}

.Content {
  display: grid;
  gap: var(--space-1);
  padding: var(--space-2);
}

.ScrollAreaRoot {
  position: relative;
  width: 100%;
  max-height: min(320px, var(--available-height));
}

.ScrollAreaViewport {
  width: 100%;
  max-height: inherit;
}

.ScrollAreaContent {
  display: flow-root;
}

.ScrollAreaScrollbar {
  display: flex;
  position: relative;
  align-items: center;
  margin: 0;
  opacity: 0;
  transition: opacity 150ms ease-out;
  pointer-events: none;
}

.ScrollAreaScrollbar[data-orientation='vertical'] {
  flex-direction: column;
  justify-content: flex-start;
  margin-block: var(--space-2);
  width: 20px;
}

.ScrollAreaScrollbar[data-orientation='horizontal'] {
  flex-direction: row;
  justify-content: flex-start;
  margin-inline: var(--space-2);
  height: 20px;
}

.ScrollAreaScrollbar[data-scrolling] {
  opacity: 1;
  pointer-events: auto;
}

.ScrollAreaScrollbar::before {
  content: '';
  position: absolute;
}

.ScrollAreaScrollbar[data-orientation='vertical']::before {
  width: 20px;
  height: 100%;
}

.ScrollAreaScrollbar[data-orientation='horizontal']::before {
  width: 100%;
  height: 20px;
}

.ScrollAreaThumb {
  border-radius: var(--radius-full);
  background-color: var(--outline);
  opacity: 0.5;
}

.ScrollAreaScrollbar[data-orientation='vertical'] .ScrollAreaThumb {
  width: 4px;
}

.ScrollAreaScrollbar[data-orientation='horizontal'] .ScrollAreaThumb {
  height: 4px;
}

.ScrollAreaCorner {
  width: 24px;
  height: 24px;
}

.Item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-s);
  position: relative;
  overflow: hidden;
  font-family: var(--font-brand);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-label);
  line-height: var(--line-height-label);
  letter-spacing: var(--letter-spacing-label);
  color: var(--on-surface);
  user-select: none;
  cursor: default;
  outline: none;
}

.Item::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--on-surface);
  opacity: 0;
  border-radius: inherit;
}

.Item > * {
  position: relative;
  z-index: 1;
}

.Item[data-highlighted] {
  background-color: var(--surface-container-high);
}

.Item[data-highlighted]::before {
  opacity: 0.08;
}

.Item[data-disabled] {
  opacity: 0.2;
}

.ItemLeadingIcon,
.ItemTrailingIcon {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ItemLabel {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ItemRight {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-left: auto;
  flex-shrink: 0;
}

.ItemShortcut {
  font-family: var(--font-brand);
  font-size: var(--font-size-label-small);
  font-weight: var(--font-weight-label-small);
  line-height: var(--line-height-label-small);
  letter-spacing: var(--letter-spacing-label-small);
  color: var(--on-surface-variant);
  text-align: right;
}

.Item[data-size='small'] {
  font-size: var(--font-size-label-small);
  font-weight: var(--font-weight-label-small);
  line-height: var(--line-height-label-small);
  letter-spacing: var(--letter-spacing-label-small);
}

.Item[data-size='small'] .ItemLeadingIcon,
.Item[data-size='small'] .ItemTrailingIcon {
  width: 16px;
  height: 16px;
}

.Item[data-size='small'] .ItemShortcut {
  font-size: var(--font-size-label-mini);
  font-weight: var(--font-weight-label-mini);
  line-height: var(--line-height-label-mini);
  letter-spacing: var(--letter-spacing-label-mini);
}

.Separator {
  height: 1px;
  margin: var(--space-1) var(--space-2);
  background-color: var(--outline-variant);
}

.Group {
  display: grid;
  gap: var(--space-1);
}

.GroupLabel {
  padding: var(--space-2) var(--space-3) var(--space-1);
  font-family: var(--font-brand);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-caption);
  line-height: var(--line-height-caption);
  letter-spacing: var(--letter-spacing-caption);
  color: var(--on-surface-variant);
}

.RadioGroup {
  display: grid;
  gap: var(--space-1);
}

.OptionItem {
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-s);
  position: relative;
  overflow: hidden;
  font-family: var(--font-brand);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-label);
  line-height: var(--line-height-label);
  letter-spacing: var(--letter-spacing-label);
  color: var(--on-surface);
  user-select: none;
  cursor: default;
  outline: none;
}

.OptionItem::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--on-surface);
  opacity: 0;
  border-radius: inherit;
}

.OptionItem > * {
  position: relative;
  z-index: 1;
}

.OptionItem[data-highlighted] {
  background-color: var(--surface-container-high);
}

.OptionItem[data-highlighted]::before {
  opacity: 0.08;
}

.OptionItem[data-disabled] {
  opacity: 0.2;
}

.OptionIndicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--on-surface);
  opacity: 0;
}

.OptionIndicator[data-checked] {
  opacity: 1;
}

.OptionIndicator[data-unchecked] {
  opacity: 0;
}

.OptionLabel {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.OptionItem[data-size='small'] {
  grid-template-columns: 16px 1fr;
  font-size: var(--font-size-label-small);
  font-weight: var(--font-weight-label-small);
  line-height: var(--line-height-label-small);
  letter-spacing: var(--letter-spacing-label-small);
}

.OptionItem[data-size='small'] .OptionIndicator {
  width: 16px;
  height: 16px;
}

.SubmenuTrigger[data-size='small'] {
  font-size: var(--font-size-label-small);
  font-weight: var(--font-weight-label-small);
  line-height: var(--line-height-label-small);
  letter-spacing: var(--letter-spacing-label-small);
}

.SubmenuTrigger[data-size='small'] .ItemTrailingIcon {
  width: 16px;
  height: 16px;
}

.GroupLabel[data-size='small'] {
  font-size: var(--font-size-label-mini);
  font-weight: var(--font-weight-label-mini);
  line-height: var(--line-height-label-mini);
  letter-spacing: var(--letter-spacing-label-mini);
}

.SubmenuTrigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-s);
  position: relative;
  overflow: hidden;
  font-family: var(--font-brand);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-label);
  line-height: var(--line-height-label);
  letter-spacing: var(--letter-spacing-label);
  color: var(--on-surface);
  user-select: none;
  cursor: default;
  outline: none;
}

.SubmenuTrigger::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--on-surface);
  opacity: 0;
  border-radius: inherit;
}

.SubmenuTrigger > * {
  position: relative;
  z-index: 1;
}

.SubmenuTrigger[data-highlighted],
.SubmenuTrigger[data-popup-open] {
  background-color: var(--surface-container-high);
}

.SubmenuTrigger[data-highlighted]::before,
.SubmenuTrigger[data-popup-open]::before {
  opacity: 0.08;
}

```

Source: dist/components/menu/Menu.d.ts

## Types

```ts
type MenuRootProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Root> & {
    size?: MenuSize;
};

type MenuContentProps = useRender.ComponentProps<'div'>;
```

Source: dist/components/menu/MenuSizeContext.d.ts

## Types

```ts
export type MenuSize = 'large' | 'small';
```

# Recipes

Source: src/pages/RecipesPage.tsx

## Example

```tsx
import * as React from 'react';
import { Icon } from '../assets/icons/Icon';
import { IconAdjustmentsHorizontal, IconDots } from '@tabler/icons-react';
import {
  Button,
  CanvasBackground,
  useCanvasViewport,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuRoot,
  ContextMenuTrigger,
  DialogActions,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogViewport,
  InputBox,
  MenuContent,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  Separator,
} from '../components';
import menuStyles from '../components/menu/Menu.module.css';
import styles from './RecipesPage.module.css';

type Point = { x: number; y: number };

const menuSnippet = `const MenuRecipe = () => (
  <MenuRoot>
    <MenuTrigger render={(props) => <Button {...props}>メニュー</Button>} />
    <MenuPortal>
      <MenuPositioner sideOffset={8}>
        <MenuPopup>
          <MenuContent>
            <MenuItem>新規作成</MenuItem>
            <MenuItem>保存</MenuItem>
          </MenuContent>
        </MenuPopup>
      </MenuPositioner>
    </MenuPortal>
  </MenuRoot>
);`;

const contextMenuSnippet = `const ContextMenuRecipe = () => (
  <ContextMenuRoot>
    <ContextMenuTrigger>右クリックで開く</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuPositioner>
        <ContextMenuPopup>
          <ContextMenuContent>
            <ContextMenuItem>複製</ContextMenuItem>
            <ContextMenuItem>削除</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenuPopup>
      </ContextMenuPositioner>
    </ContextMenuPortal>
  </ContextMenuRoot>
);`;

const dialogSnippet = `const DialogRecipe = () => (
  <DialogRoot>
    <DialogTrigger render={(props) => <Button {...props}>Dialog</Button>} />
    <DialogPortal>
      <DialogBackdrop />
      <DialogViewport>
        <DialogPopup>
          <DialogContent>
            <DialogTitle>タイトル</DialogTitle>
            <DialogDescription>説明文をここに記載します。</DialogDescription>
          </DialogContent>
          <DialogActions>
            <DialogClose render={(props) => <Button {...props}>閉じる</Button>} />
          </DialogActions>
        </DialogPopup>
      </DialogViewport>
    </DialogPortal>
  </DialogRoot>
);`;

const wheelSnippet = `const { ref, scale, offset, contentStyle } = useCanvasViewport({
  minScale: 0.5,
});

return (
  <div ref={ref}>
    <CanvasBackground scale={scale} offsetX={offset.x} offsetY={offset.y}>
      <div style={contentStyle}>...</div>
    </CanvasBackground>
  </div>
);`;

export function RecipesPage() {
  const [lastPoint, setLastPoint] = React.useState<Point | null>(null);
  const { ref: viewportRef, scale, offset, contentStyle } = useCanvasViewport({
    minScale: 0.5,
  });

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setLastPoint({ x: Math.round(event.clientX), y: Math.round(event.clientY) });
  };

  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <header className={styles.Header}>
          <div>
            <div className={`typesetting-headline typesetting-tsumegumi ${styles.Title}`}>
              UI Recipes
            </div>
            <p className={`typesetting-body typesetting-betagumi ${styles.Lead}`}>
              LiveBlueprint で迷いやすかった最低構成と、Canvas向けの実装パターンをまとめたページです。
            </p>
          </div>
          <div className={styles.HeaderActions}>
            <Button variant="ghost">Storybook Docs</Button>
            <Button>
              <Icon icon={IconAdjustmentsHorizontal} size={20} />
              レシピを複製
            </Button>
          </div>
        </header>

        <section className={styles.Section}>
          <div className={styles.SectionHeader}>
            <div>
              <h2 className={`typesetting-title ${styles.SectionTitle}`}>Menu / ContextMenu / Dialog の最低構成</h2>
              <p className={`typesetting-body ${styles.SectionDescription}`}>
                Root配下にTrigger + Portal + Positioner + Popup + Content + Item を置くのが基本です。
              </p>
            </div>
          </div>

          <div className={styles.ExampleGrid}>
            <div className={styles.ExampleCard}>
              <div className={styles.CardHeader}>
                <div className={`typesetting-label ${styles.CardTitle}`}>Menu</div>
                <div className={`typesetting-caption ${styles.CardMeta}`}>最小の構成</div>
              </div>
              <MenuRoot>
                <MenuTrigger render={(props) => <Button {...props}>メニュー</Button>} />
                <MenuPortal>
                  <MenuPositioner sideOffset={8}>
                    <MenuPopup>
                      <MenuContent>
                        <MenuItem>
                          <span className={menuStyles.ItemLabel}>新規作成</span>
                        </MenuItem>
                        <MenuItem>
                          <span className={menuStyles.ItemLabel}>保存</span>
                        </MenuItem>
                      </MenuContent>
                    </MenuPopup>
                  </MenuPositioner>
                </MenuPortal>
              </MenuRoot>
              <pre className={styles.CodeBlock}>
                <code>{menuSnippet}</code>
              </pre>
            </div>

            <div className={styles.ExampleCard}>
              <div className={styles.CardHeader}>
                <div className={`typesetting-label ${styles.CardTitle}`}>ContextMenu</div>
                <div className={`typesetting-caption ${styles.CardMeta}`}>右クリックで開く</div>
              </div>
              <ContextMenuRoot>
                <ContextMenuTrigger
                  render={(props) => (
                    <div
                      {...props}
                      className={styles.ContextTrigger}
                      onContextMenu={(event) => {
                        props.onContextMenu?.(event);
                        handleContextMenu(event);
                      }}
                    >
                      <Icon icon={IconDots} size={20} />
                      Canvas上で右クリック
                    </div>
                  )}
                />
                <ContextMenuPortal>
                  <ContextMenuPositioner>
                    <ContextMenuPopup>
                      <ContextMenuContent>
                        <ContextMenuItem>
                          <span className={menuStyles.ItemLabel}>複製</span>
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <span className={menuStyles.ItemLabel}>削除</span>
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenuPopup>
                  </ContextMenuPositioner>
                </ContextMenuPortal>
              </ContextMenuRoot>
              <div className={`typesetting-caption ${styles.ContextMeta}`}>
                {lastPoint ? `Last right click: ${lastPoint.x}, ${lastPoint.y}` : 'Last right click: -'}
              </div>
              <pre className={styles.CodeBlock}>
                <code>{contextMenuSnippet}</code>
              </pre>
            </div>

            <div className={styles.ExampleCard}>
              <div className={styles.CardHeader}>
                <div className={`typesetting-label ${styles.CardTitle}`}>Dialog</div>
                <div className={`typesetting-caption ${styles.CardMeta}`}>最小構成</div>
              </div>
              <DialogRoot>
                <DialogTrigger render={(props) => <Button {...props}>Dialogを開く</Button>} />
                <DialogPortal>
                  <DialogBackdrop />
                  <DialogViewport>
                    <DialogPopup>
                      <DialogContent>
                        <DialogTitle>Canvasプリセット</DialogTitle>
                        <DialogDescription>既存のテンプレートから作成します。</DialogDescription>
                      </DialogContent>
                      <DialogActions>
                        <DialogClose render={(props) => <Button {...props}>閉じる</Button>} />
                      </DialogActions>
                    </DialogPopup>
                  </DialogViewport>
                </DialogPortal>
              </DialogRoot>
              <pre className={styles.CodeBlock}>
                <code>{dialogSnippet}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeader}>
            <div>
              <h2 className={`typesetting-title ${styles.SectionTitle}`}>Canvas wheel / pan レシピ</h2>
              <p className={`typesetting-body ${styles.SectionDescription}`}>
                ReactのonWheelでpreventDefaultしたい場合は、passive: false のネイティブリスナーを使うのが安全です。
              </p>
            </div>
          </div>

          <div className={styles.CanvasCard}>
            <div className={styles.CanvasHeader}>
              <div className={`typesetting-label ${styles.CanvasTitle}`}>インタラクティブサンプル</div>
              <div className={`typesetting-caption ${styles.CanvasMeta}`}>
                Scroll = Pan / Ctrl+Scroll = Zoom
              </div>
            </div>
            <div ref={viewportRef} className={styles.CanvasFrame}>
              <CanvasBackground scale={scale} offsetX={offset.x} offsetY={offset.y}>
                <div className={styles.CanvasContent} style={contentStyle}>
                  <div className={styles.CanvasBadge}>scale {scale.toFixed(2)}</div>
                  <div className={styles.CanvasBadge}>offset {Math.round(offset.x)}, {Math.round(offset.y)}</div>
                  <div className={styles.CanvasCardBody}>
                    <div className={`typesetting-label ${styles.CanvasCardTitle}`}>Input</div>
                    <InputBox placeholder="検索" />
                    <Separator className={styles.CanvasDivider} />
                    <div className={`typesetting-caption ${styles.CanvasNote}`}>
                      パン/ズームのイベントはこの枠内でのみ捕捉します。
                    </div>
                  </div>
                </div>
              </CanvasBackground>
            </div>
            <pre className={styles.CodeBlock}>
              <code>{wheelSnippet}</code>
            </pre>
          </div>
        </section>
      </div>
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

Source: src/pages/RecipesPage.module.css

## Styles

```css
.Page {
  padding: 32px 16px 80px;
  background-color: var(--surface);
  color: var(--on-surface);
}

.Container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  /* Container keeps readable width for multi-column recipe cards. */
}

.Header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.Title {
  margin: 0;
}

.Lead {
  margin: 12px 0 0;
  color: var(--on-surface-variant);
}

.HeaderActions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.Section {
  display: grid;
  gap: 20px;
  padding: 24px;
  border-radius: var(--radius-l);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.Section + .Section {
  margin-top: 24px;
}

.SectionHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.SectionTitle {
  margin: 0;
}

.SectionDescription {
  margin: 8px 0 0;
  color: var(--on-surface-variant);
}

.ExampleGrid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ExampleCard {
  display: grid;
  gap: 16px;
  padding: 16px;
  border-radius: var(--radius-m);
  background: var(--surface-container-high);
  border: 1px solid var(--outline-variant);
}

.CardHeader {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.CardTitle {
  color: var(--on-surface);
}

.CardMeta {
  color: var(--on-surface-variant);
}

.ContextTrigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: var(--radius-s);
  background: var(--surface);
  border: 1px dashed var(--outline-variant);
  cursor: context-menu;
  color: var(--on-surface);
}

.ContextMeta {
  color: var(--on-surface-variant);
}

.CodeBlock {
  margin: 0;
  padding: 12px;
  background: var(--surface-container-low);
  border-radius: var(--radius-s);
  border: 1px solid var(--outline-variant);
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.CanvasCard {
  display: grid;
  gap: 16px;
  padding: 16px;
  border-radius: var(--radius-m);
  background: var(--surface-container-high);
  border: 1px solid var(--outline-variant);
}

.CanvasHeader {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.CanvasTitle {
  color: var(--on-surface);
}

.CanvasMeta {
  color: var(--on-surface-variant);
}

.CanvasFrame {
  width: 100%;
  height: 320px;
  border-radius: var(--radius-m);
  overflow: hidden;
  border: 1px solid var(--outline-variant);
}

.CanvasContent {
  display: grid;
  gap: 12px;
  padding: 16px;
  color: var(--on-surface);
}

.CanvasBadge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--surface-container-low);
  border: 1px solid var(--outline-variant);
  width: fit-content;
}

.CanvasCardBody {
  display: grid;
  gap: 12px;
  padding: 12px;
  border-radius: var(--radius-s);
  background: var(--surface-container-low);
  border: 1px solid var(--outline-variant);
  width: min(260px, 100%);
}

.CanvasCardTitle {
  color: var(--on-surface);
}

.CanvasDivider {
  margin: 0;
}

.CanvasNote {
  margin: 0;
  color: var(--on-surface-variant);
}

@media (max-width: 960px) {
  .Header {
    flex-direction: column;
    align-items: flex-start;
  }

  .ExampleGrid {
    grid-template-columns: minmax(0, 1fr);
  }
}

```

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

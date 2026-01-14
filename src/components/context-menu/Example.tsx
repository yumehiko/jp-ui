import { Icon } from '../../assets/icons/Icon';
import { IconCaretRight } from '@tabler/icons-react';
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

export function Example() {
  return (
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
                    <Icon icon={IconCaretRight} size={16} />
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
  );
}

# Tooltip

Source: src/components/tooltip/Example.tsx

## Example

```tsx
import { Icon } from '../../assets/icons/Icon';
import { IconEdit, IconSettings, IconTrash } from '@tabler/icons-react';
import { IconButton } from '..';
import {
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '..';

export function Example() {
  return (
    <div style={{ padding: 32 }}>
      <TooltipProvider>
        <div
          style={{
            display: 'flex',
            gap: 8,
            padding: 8,
            borderRadius: 8,
            border: '1px solid var(--outline-variant)',
            background: 'var(--surface-container-low)',
            width: 'fit-content',
          }}
        >
          <TooltipRoot>
            <TooltipTrigger
              render={(props) => (
                <IconButton {...props} aria-label="編集" variant="ghost">
                  <Icon icon={IconEdit} size={20} />
                </IconButton>
              )}
            />
            <TooltipPortal>
              <TooltipPositioner sideOffset={10}>
                <TooltipPopup>編集</TooltipPopup>
              </TooltipPositioner>
            </TooltipPortal>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger
              render={(props) => (
                <IconButton {...props} aria-label="削除" variant="ghost">
                  <Icon icon={IconTrash} size={20} />
                </IconButton>
              )}
            />
            <TooltipPortal>
              <TooltipPositioner sideOffset={10}>
                <TooltipPopup>削除</TooltipPopup>
              </TooltipPositioner>
            </TooltipPortal>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger
              render={(props) => (
                <IconButton {...props} aria-label="設定" variant="ghost">
                  <Icon icon={IconSettings} size={20} />
                </IconButton>
              )}
            />
            <TooltipPortal>
              <TooltipPositioner sideOffset={10}>
                <TooltipPopup>設定</TooltipPopup>
              </TooltipPositioner>
            </TooltipPortal>
          </TooltipRoot>
        </div>
      </TooltipProvider>
    </div>
  );
}

```

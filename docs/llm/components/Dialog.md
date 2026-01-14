# Dialog

Source: src/components/dialog/Example.tsx

## Example

```tsx
import { Icon } from '../../assets/icons/Icon';
import { IconCircleFilled } from '@tabler/icons-react';
import { Button } from '..';
import {
  DialogActions,
  DialogBackdrop,
  DialogCaption,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  DialogTitle,
  DialogViewport,
} from '..';

export function Example() {
  return (
    <DialogRoot>
      <DialogTrigger render={(props) => <Button {...props}>Dialogを開く</Button>} />
      <DialogPortal>
        <DialogBackdrop />
        <DialogViewport>
          <DialogPopup>
            <DialogContent>
              <DialogTitle>Dummy Title</DialogTitle>
              <DialogDescription>
                This is dummy body text. This is dummy body text. This is dummy body
                text. This is dummy body text. This is dummy body text. This is dummy
                body text.
              </DialogDescription>
              <DialogCaption>Dummy caption. Dummy caption.</DialogCaption>
            </DialogContent>
            <DialogActions>
              <DialogClose
                render={(props) => (
                  <Button {...props} variant="ghost">
                    キャンセル
                  </Button>
                )}
              />
              <DialogClose
                render={(props) => (
                  <Button {...props}>
                    <Icon icon={IconCircleFilled} size={24} />
                    保存
                  </Button>
                )}
              />
            </DialogActions>
          </DialogPopup>
        </DialogViewport>
      </DialogPortal>
    </DialogRoot>
  );
}

```

Source: dist/components/dialog/Dialog.d.ts

## Types

```ts
type DialogContentProps = useRender.ComponentProps<'div'>;

type DialogActionsProps = useRender.ComponentProps<'div'>;

type DialogCaptionProps = useRender.ComponentProps<'p'>;
```

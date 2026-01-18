# Dialog

Source: src/components/dialog/Example.tsx

## Example

```tsx
import * as React from 'react';
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
  const [parentOpen, setParentOpen] = React.useState(false);
  const [childOpen, setChildOpen] = React.useState(false);
  const [grandChildOpen, setGrandChildOpen] = React.useState(false);

  const closeAll = () => {
    setGrandChildOpen(false);
    setChildOpen(false);
    setParentOpen(false);
  };

  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
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

      <DialogRoot
        open={parentOpen}
        onOpenChange={(open) => {
          setParentOpen(open);
          if (!open) {
            setChildOpen(false);
            setGrandChildOpen(false);
          }
        }}
      >
        <DialogTrigger render={(props) => <Button {...props}>Nested例を開く</Button>} />
        <DialogPortal>
          <DialogBackdrop />
          <DialogViewport>
            <DialogPopup>
              <DialogContent>
                <DialogTitle>親Dialog</DialogTitle>
                <DialogDescription>
                  親Dialogの本文です。ここからNested Dialogを開けます。
                </DialogDescription>
              </DialogContent>
              <DialogActions>
                <DialogRoot
                  open={childOpen}
                  onOpenChange={(open) => {
                    setChildOpen(open);
                    if (!open) {
                      setGrandChildOpen(false);
                    }
                  }}
                >
                  <DialogTrigger
                    render={(props) => (
                      <Button {...props} variant="outlined">
                        子Dialogを開く
                      </Button>
                    )}
                  />
                  <DialogPortal>
                    <DialogBackdrop />
                    <DialogViewport>
                      <DialogPopup>
                        <DialogContent>
                          <DialogTitle>子Dialog</DialogTitle>
                          <DialogDescription>
                            これはNested Dialogの本文です。もう1行分のテキストを追加して、
                            2行表示の見た目を確認します。
                          </DialogDescription>
                        </DialogContent>
                        <DialogActions>
                          <DialogRoot
                            open={grandChildOpen}
                            onOpenChange={setGrandChildOpen}
                          >
                            <DialogTrigger
                              render={(props) => (
                                <Button {...props} variant="outlined">
                                  孫Dialogを開く
                                </Button>
                              )}
                            />
                            <DialogPortal>
                              <DialogBackdrop />
                              <DialogViewport>
                                <DialogPopup>
                                  <DialogContent>
                                    <DialogTitle>孫Dialog</DialogTitle>
                                    <DialogDescription>
                                      これは第三階層のDialogです。
                                    </DialogDescription>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button variant="ghost" onClick={closeAll}>
                                      すべてのDialogを閉じる
                                    </Button>
                                    <DialogClose
                                      render={(props) => (
                                        <Button {...props}>閉じる</Button>
                                      )}
                                    />
                                  </DialogActions>
                                </DialogPopup>
                              </DialogViewport>
                            </DialogPortal>
                          </DialogRoot>
                          <DialogClose
                            render={(props) => (
                              <Button {...props} variant="ghost">
                                閉じる
                              </Button>
                            )}
                          />
                        </DialogActions>
                      </DialogPopup>
                    </DialogViewport>
                  </DialogPortal>
                </DialogRoot>
                <DialogClose
                  render={(props) => (
                    <Button {...props} variant="ghost">
                      親を閉じる
                    </Button>
                  )}
                />
              </DialogActions>
            </DialogPopup>
          </DialogViewport>
        </DialogPortal>
      </DialogRoot>
    </div>
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

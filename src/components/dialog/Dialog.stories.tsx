import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '..';
import {
  DialogActions,
  DialogBackdrop,
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
import { Example } from './Example';

const meta: Meta = {
  title: 'Components/Dialog',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <Example />,
};

const NestedStory = () => (
  <DialogRoot>
    <DialogTrigger render={(props) => <Button {...props}>親Dialogを開く</Button>} />
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
            <DialogRoot>
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
                      <DialogRoot>
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
                  親を閉じる
                </Button>
              )}
            />
          </DialogActions>
        </DialogPopup>
      </DialogViewport>
    </DialogPortal>
  </DialogRoot>
);

export const Nested: Story = {
  render: () => <NestedStory />,
};

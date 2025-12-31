import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { Button } from '../button/Button';
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
} from './Dialog';

const meta: Meta = {
  title: 'Components/Dialog',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const DefaultStory = () => (
  <DialogRoot>
    <DialogTrigger
      render={(props) => <Button {...props}>Dialogを開く</Button>}
    />
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
                  <Icon name="dummy" size={24} />
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

export const Default: Story = {
  render: () => <DefaultStory />,
};

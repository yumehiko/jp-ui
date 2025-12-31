import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../button/Button';
import {
  AlertDialogActions,
  AlertDialogBackdrop,
  AlertDialogCaption,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogViewport,
} from './AlertDialog';

const meta: Meta = {
  title: 'Components/AlertDialog',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const DefaultStory = () => (
  <AlertDialogRoot>
    <AlertDialogTrigger
      render={(props) => <Button {...props}>AlertDialogを開く</Button>}
    />
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogViewport>
        <AlertDialogPopup>
          <AlertDialogContent>
            <AlertDialogTitle>Discard draft?</AlertDialogTitle>
            <AlertDialogDescription>You can't undo this action.</AlertDialogDescription>
            <AlertDialogCaption>Changes will be lost permanently.</AlertDialogCaption>
          </AlertDialogContent>
          <AlertDialogActions>
            <AlertDialogClose
              render={(props) => (
                <Button {...props} variant="ghost">
                  キャンセル
                </Button>
              )}
            />
            <AlertDialogClose
              render={(props) => <Button {...props}>破棄する</Button>}
            />
          </AlertDialogActions>
        </AlertDialogPopup>
      </AlertDialogViewport>
    </AlertDialogPortal>
  </AlertDialogRoot>
);

export const Default: Story = {
  render: () => <DefaultStory />,
};

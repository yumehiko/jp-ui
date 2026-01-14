import { Button } from '..';
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
} from '..';

export function Example() {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger render={(props) => <Button {...props}>AlertDialogを開く</Button>} />
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
              <AlertDialogClose render={(props) => <Button {...props}>破棄する</Button>} />
            </AlertDialogActions>
          </AlertDialogPopup>
        </AlertDialogViewport>
      </AlertDialogPortal>
    </AlertDialogRoot>
  );
}

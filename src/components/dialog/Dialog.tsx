import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { useDialogPopupMeasurements } from './dialogPopupMeasurements';
import { composeRefs } from '../utils/composeRefs';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Dialog.module.css';

export const DialogRoot = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;
export const DialogPortal = BaseDialog.Portal;

type DialogBackdropProps = React.ComponentPropsWithoutRef<
  typeof BaseDialog.Backdrop
>;

export const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Backdrop>,
  DialogBackdropProps
>(({ className, ...props }, ref) => (
  <BaseDialog.Backdrop
    ref={ref}
    className={mergeClassName<typeof BaseDialog.Backdrop>(
      className,
      styles.Backdrop,
    )}
    {...props}
  />
));

DialogBackdrop.displayName = 'DialogBackdrop';

type DialogViewportProps = React.ComponentPropsWithoutRef<
  typeof BaseDialog.Viewport
>;

export const DialogViewport = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Viewport>,
  DialogViewportProps
>(({ className, ...props }, ref) => (
  <BaseDialog.Viewport
    ref={ref}
    className={mergeClassName<typeof BaseDialog.Viewport>(
      className,
      styles.Viewport,
    )}
    {...props}
  />
));

DialogViewport.displayName = 'DialogViewport';

type DialogPopupProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>;

export const DialogPopup = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Popup>,
  DialogPopupProps
>(({ className, ...props }, ref) => (
  <DialogPopupWithMeasure className={className} ref={ref} {...props} />
));

DialogPopup.displayName = 'DialogPopup';

const DialogPopupWithMeasure = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Popup>,
  DialogPopupProps
>(({ className, ...props }, ref) => {
  const localRef = React.useRef<React.ElementRef<typeof BaseDialog.Popup>>(null);
  useDialogPopupMeasurements(localRef as React.RefObject<HTMLElement>);

  return (
    <BaseDialog.Popup
      ref={composeRefs(ref, localRef)}
      className={mergeClassName<typeof BaseDialog.Popup>(className, styles.Popup)}
      {...props}
    />
  );
});

DialogPopupWithMeasure.displayName = 'DialogPopupWithMeasure';

type DialogTitleProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Title>;

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <BaseDialog.Title
    ref={ref}
    className={mergeClassName<typeof BaseDialog.Title>(className, styles.Title)}
    {...props}
  />
));

DialogTitle.displayName = 'DialogTitle';

type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof BaseDialog.Description
>;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <BaseDialog.Description
    ref={ref}
    className={mergeClassName<typeof BaseDialog.Description>(
      className,
      styles.Description,
    )}
    {...props}
  />
));

DialogDescription.displayName = 'DialogDescription';

type DialogCloseProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Close>;

export const DialogClose = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Close>,
  DialogCloseProps
>(({ className, ...props }, ref) => (
  <BaseDialog.Close
    ref={ref}
    className={mergeClassName<typeof BaseDialog.Close>(className, styles.Close)}
    {...props}
  />
));

DialogClose.displayName = 'DialogClose';

type DialogContentProps = useRender.ComponentProps<'div'>;

export function DialogContent({ render, ...props }: DialogContentProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Content }, props),
  });

  return element;
}

type DialogActionsProps = useRender.ComponentProps<'div'>;

export function DialogActions({ render, ...props }: DialogActionsProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Actions }, props),
  });

  return element;
}

type DialogCaptionProps = useRender.ComponentProps<'p'>;

export function DialogCaption({ render, ...props }: DialogCaptionProps) {
  const element = useRender({
    defaultTagName: 'p',
    render,
    props: mergeProps<'p'>({ className: styles.Caption }, props),
  });

  return element;
}

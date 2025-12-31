import * as React from 'react';
import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { mergeClassName } from '../utils/mergeClassName';
import styles from '../dialog/Dialog.module.css';

export const AlertDialogRoot = BaseAlertDialog.Root;
export const AlertDialogTrigger = BaseAlertDialog.Trigger;
export const AlertDialogPortal = BaseAlertDialog.Portal;

type AlertDialogBackdropProps = React.ComponentPropsWithoutRef<
  typeof BaseAlertDialog.Backdrop
>;

export const AlertDialogBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Backdrop>,
  AlertDialogBackdropProps
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Backdrop
    ref={ref}
    className={mergeClassName<typeof BaseAlertDialog.Backdrop>(
      className,
      styles.Backdrop,
    )}
    {...props}
  />
));

AlertDialogBackdrop.displayName = 'AlertDialogBackdrop';

type AlertDialogViewportProps = React.ComponentPropsWithoutRef<
  typeof BaseAlertDialog.Viewport
>;

export const AlertDialogViewport = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Viewport>,
  AlertDialogViewportProps
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Viewport
    ref={ref}
    className={mergeClassName<typeof BaseAlertDialog.Viewport>(
      className,
      styles.Viewport,
    )}
    {...props}
  />
));

AlertDialogViewport.displayName = 'AlertDialogViewport';

type AlertDialogPopupProps = React.ComponentPropsWithoutRef<
  typeof BaseAlertDialog.Popup
>;

export const AlertDialogPopup = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Popup>,
  AlertDialogPopupProps
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Popup
    ref={ref}
    className={mergeClassName<typeof BaseAlertDialog.Popup>(
      className,
      styles.Popup,
    )}
    {...props}
  />
));

AlertDialogPopup.displayName = 'AlertDialogPopup';

type AlertDialogTitleProps = React.ComponentPropsWithoutRef<
  typeof BaseAlertDialog.Title
>;

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Title>,
  AlertDialogTitleProps
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Title
    ref={ref}
    className={mergeClassName<typeof BaseAlertDialog.Title>(
      className,
      styles.Title,
    )}
    {...props}
  />
));

AlertDialogTitle.displayName = 'AlertDialogTitle';

type AlertDialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof BaseAlertDialog.Description
>;

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Description>,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Description
    ref={ref}
    className={mergeClassName<typeof BaseAlertDialog.Description>(
      className,
      styles.Description,
    )}
    {...props}
  />
));

AlertDialogDescription.displayName = 'AlertDialogDescription';

type AlertDialogCloseProps = React.ComponentPropsWithoutRef<
  typeof BaseAlertDialog.Close
>;

export const AlertDialogClose = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Close>,
  AlertDialogCloseProps
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Close
    ref={ref}
    className={mergeClassName<typeof BaseAlertDialog.Close>(
      className,
      styles.Close,
    )}
    {...props}
  />
));

AlertDialogClose.displayName = 'AlertDialogClose';

type AlertDialogContentProps = useRender.ComponentProps<'div'>;

export function AlertDialogContent({ render, ...props }: AlertDialogContentProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Content }, props),
  });

  return element;
}

type AlertDialogActionsProps = useRender.ComponentProps<'div'>;

export function AlertDialogActions({ render, ...props }: AlertDialogActionsProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Actions }, props),
  });

  return element;
}

type AlertDialogCaptionProps = useRender.ComponentProps<'p'>;

export function AlertDialogCaption({ render, ...props }: AlertDialogCaptionProps) {
  const element = useRender({
    defaultTagName: 'p',
    render,
    props: mergeProps<'p'>({ className: styles.Caption }, props),
  });

  return element;
}

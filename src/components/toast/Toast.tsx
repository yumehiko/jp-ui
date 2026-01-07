import * as React from 'react';
import { Toast as BaseToast } from '@base-ui/react/toast';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { Icon } from '../../assets/icons/Icon';
import { IconCircleFilled, IconX } from '@tabler/icons-react';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Toast.module.css';

export const ToastProvider = BaseToast.Provider;
export const ToastPortal: typeof BaseToast.Portal = BaseToast.Portal;

type ToastViewportProps = React.ComponentPropsWithoutRef<
  typeof BaseToast.Viewport
>;

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof BaseToast.Viewport>,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <BaseToast.Viewport
    ref={ref}
    className={mergeClassName<typeof BaseToast.Viewport>(
      className,
      styles.Viewport,
    )}
    {...props}
  />
));

ToastViewport.displayName = 'ToastViewport';

type ToastRootProps = React.ComponentPropsWithoutRef<typeof BaseToast.Root> & {
  type?: 'info' | 'error' | 'primary';
};

export const ToastRoot = React.forwardRef<
  React.ElementRef<typeof BaseToast.Root>,
  ToastRootProps
>(({ className, toast, type, ...props }, ref) => {
  const derivedType =
    type ?? ((toast as { type?: 'info' | 'error' | 'primary' } | undefined)?.type ?? 'info');

  return (
    <BaseToast.Root
      ref={ref}
      toast={toast}
      data-type={derivedType}
      className={mergeClassName<typeof BaseToast.Root>(className, styles.Toast)}
      {...props}
    />
  );
});

ToastRoot.displayName = 'ToastRoot';

type ToastContentProps = React.ComponentPropsWithoutRef<typeof BaseToast.Content>;

export const ToastContent = React.forwardRef<
  React.ElementRef<typeof BaseToast.Content>,
  ToastContentProps
>(({ className, ...props }, ref) => (
  <BaseToast.Content
    ref={ref}
    className={mergeClassName<typeof BaseToast.Content>(
      className,
      styles.Content,
    )}
    {...props}
  />
));

ToastContent.displayName = 'ToastContent';

type ToastBodyProps = useRender.ComponentProps<'div'>;

export function ToastBody({ render, ...props }: ToastBodyProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Body }, props),
  });

  return element;
}

type ToastTitleProps = React.ComponentPropsWithoutRef<typeof BaseToast.Title>;

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof BaseToast.Title>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <BaseToast.Title
    ref={ref}
    className={mergeClassName<typeof BaseToast.Title>(className, styles.Title)}
    {...props}
  />
));

ToastTitle.displayName = 'ToastTitle';

type ToastDescriptionProps = React.ComponentPropsWithoutRef<
  typeof BaseToast.Description
>;

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof BaseToast.Description>,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <BaseToast.Description
    ref={ref}
    className={mergeClassName<typeof BaseToast.Description>(
      className,
      styles.Description,
    )}
    {...props}
  />
));

ToastDescription.displayName = 'ToastDescription';

type ToastActionProps = React.ComponentPropsWithoutRef<typeof BaseToast.Action>;

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof BaseToast.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => (
  <BaseToast.Action
    ref={ref}
    className={mergeClassName<typeof BaseToast.Action>(
      className,
      styles.Action,
    )}
    {...props}
  />
));

ToastAction.displayName = 'ToastAction';

type ToastCloseProps = React.ComponentPropsWithoutRef<typeof BaseToast.Close> & {
  icon?: React.ReactNode;
};

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof BaseToast.Close>,
  ToastCloseProps
>(({ className, icon, children, ...props }, ref) => (
  <BaseToast.Close
    ref={ref}
    className={mergeClassName<typeof BaseToast.Close>(className, styles.Close)}
    {...props}
  >
    {children ?? icon ?? <Icon icon={IconX} size={24} className={styles.CloseIcon} />}
  </BaseToast.Close>
));

ToastClose.displayName = 'ToastClose';

type ToastPositionerProps = React.ComponentPropsWithoutRef<
  typeof BaseToast.Positioner
>;

export const ToastPositioner = React.forwardRef<
  React.ElementRef<typeof BaseToast.Positioner>,
  ToastPositionerProps
>(({ className, ...props }, ref) => (
  <BaseToast.Positioner
    ref={ref}
    className={mergeClassName<typeof BaseToast.Positioner>(
      className,
      styles.Positioner,
    )}
    {...props}
  />
));

ToastPositioner.displayName = 'ToastPositioner';

type ToastArrowProps = React.ComponentPropsWithoutRef<typeof BaseToast.Arrow>;

export const ToastArrow = React.forwardRef<
  React.ElementRef<typeof BaseToast.Arrow>,
  ToastArrowProps
>(({ className, ...props }, ref) => (
  <BaseToast.Arrow
    ref={ref}
    className={mergeClassName<typeof BaseToast.Arrow>(className, styles.Arrow)}
    {...props}
  />
));

ToastArrow.displayName = 'ToastArrow';

type ToastLeadingIconProps = React.ComponentPropsWithoutRef<'span'> & {
  icon?: React.ReactNode;
};

export function ToastLeadingIcon({
  icon,
  className,
  ...props
}: ToastLeadingIconProps) {
  return (
    <span className={[styles.LeadingIcon, className].filter(Boolean).join(' ')} {...props}>
      {icon ?? <Icon icon={IconCircleFilled} size={24} />}
    </span>
  );
}

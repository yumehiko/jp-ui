import * as React from 'react';
import { Popover as BasePopover } from '@base-ui/react/popover';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Popover.module.css';

export const PopoverRoot = BasePopover.Root;
export const PopoverTrigger = BasePopover.Trigger;
export const PopoverPortal = BasePopover.Portal;

type PopoverBackdropProps = React.ComponentPropsWithoutRef<
  typeof BasePopover.Backdrop
>;

export const PopoverBackdrop = React.forwardRef<
  React.ElementRef<typeof BasePopover.Backdrop>,
  PopoverBackdropProps
>(({ className, ...props }, ref) => (
  <BasePopover.Backdrop
    ref={ref}
    className={mergeClassName<typeof BasePopover.Backdrop>(
      className,
      styles.Backdrop,
    )}
    {...props}
  />
));

PopoverBackdrop.displayName = 'PopoverBackdrop';

type PopoverPositionerProps = React.ComponentPropsWithoutRef<
  typeof BasePopover.Positioner
>;

export const PopoverPositioner = React.forwardRef<
  React.ElementRef<typeof BasePopover.Positioner>,
  PopoverPositionerProps
>(({ className, ...props }, ref) => (
  <BasePopover.Positioner
    ref={ref}
    className={mergeClassName<typeof BasePopover.Positioner>(
      className,
      styles.Positioner,
    )}
    {...props}
  />
));

PopoverPositioner.displayName = 'PopoverPositioner';

type PopoverPopupProps = React.ComponentPropsWithoutRef<typeof BasePopover.Popup>;

export const PopoverPopup = React.forwardRef<
  React.ElementRef<typeof BasePopover.Popup>,
  PopoverPopupProps
>(({ className, ...props }, ref) => (
  <BasePopover.Popup
    ref={ref}
    className={mergeClassName<typeof BasePopover.Popup>(className, styles.Popup)}
    {...props}
  />
));

PopoverPopup.displayName = 'PopoverPopup';

type PopoverArrowProps = React.ComponentPropsWithoutRef<typeof BasePopover.Arrow>;

export const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof BasePopover.Arrow>,
  PopoverArrowProps
>(({ className, ...props }, ref) => (
  <BasePopover.Arrow
    ref={ref}
    className={mergeClassName<typeof BasePopover.Arrow>(className, styles.Arrow)}
    {...props}
  />
));

PopoverArrow.displayName = 'PopoverArrow';

type PopoverTitleProps = React.ComponentPropsWithoutRef<typeof BasePopover.Title>;

export const PopoverTitle = React.forwardRef<
  React.ElementRef<typeof BasePopover.Title>,
  PopoverTitleProps
>(({ className, ...props }, ref) => (
  <BasePopover.Title
    ref={ref}
    className={mergeClassName<typeof BasePopover.Title>(className, styles.Title)}
    {...props}
  />
));

PopoverTitle.displayName = 'PopoverTitle';

type PopoverDescriptionProps = React.ComponentPropsWithoutRef<
  typeof BasePopover.Description
>;

export const PopoverDescription = React.forwardRef<
  React.ElementRef<typeof BasePopover.Description>,
  PopoverDescriptionProps
>(({ className, ...props }, ref) => (
  <BasePopover.Description
    ref={ref}
    className={mergeClassName<typeof BasePopover.Description>(
      className,
      styles.Description,
    )}
    {...props}
  />
));

PopoverDescription.displayName = 'PopoverDescription';

type PopoverCloseProps = React.ComponentPropsWithoutRef<typeof BasePopover.Close>;

export const PopoverClose = React.forwardRef<
  React.ElementRef<typeof BasePopover.Close>,
  PopoverCloseProps
>(({ className, ...props }, ref) => (
  <BasePopover.Close
    ref={ref}
    className={mergeClassName<typeof BasePopover.Close>(className, styles.Close)}
    {...props}
  />
));

PopoverClose.displayName = 'PopoverClose';

type PopoverViewportProps = React.ComponentPropsWithoutRef<
  typeof BasePopover.Viewport
>;

export const PopoverViewport = React.forwardRef<
  React.ElementRef<typeof BasePopover.Viewport>,
  PopoverViewportProps
>(({ className, ...props }, ref) => (
  <BasePopover.Viewport
    ref={ref}
    className={mergeClassName<typeof BasePopover.Viewport>(
      className,
      styles.Viewport,
    )}
    {...props}
  />
));

PopoverViewport.displayName = 'PopoverViewport';

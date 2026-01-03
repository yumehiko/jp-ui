import * as React from 'react';
import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './PreviewCard.module.css';

export const PreviewCardRoot = BasePreviewCard.Root;
export const PreviewCardPortal = BasePreviewCard.Portal;

type PreviewCardTriggerProps = React.ComponentPropsWithoutRef<
  typeof BasePreviewCard.Trigger
>;

export const PreviewCardTrigger = React.forwardRef<
  React.ElementRef<typeof BasePreviewCard.Trigger>,
  PreviewCardTriggerProps
>(({ className, ...props }, ref) => (
  <BasePreviewCard.Trigger
    ref={ref}
    className={mergeClassName<typeof BasePreviewCard.Trigger>(
      className,
      styles.Trigger,
    )}
    {...props}
  />
));

PreviewCardTrigger.displayName = 'PreviewCardTrigger';

type PreviewCardBackdropProps = React.ComponentPropsWithoutRef<
  typeof BasePreviewCard.Backdrop
>;

export const PreviewCardBackdrop = React.forwardRef<
  React.ElementRef<typeof BasePreviewCard.Backdrop>,
  PreviewCardBackdropProps
>(({ className, ...props }, ref) => (
  <BasePreviewCard.Backdrop
    ref={ref}
    className={mergeClassName<typeof BasePreviewCard.Backdrop>(
      className,
      styles.Backdrop,
    )}
    {...props}
  />
));

PreviewCardBackdrop.displayName = 'PreviewCardBackdrop';

type PreviewCardPositionerProps = React.ComponentPropsWithoutRef<
  typeof BasePreviewCard.Positioner
>;

export const PreviewCardPositioner = React.forwardRef<
  React.ElementRef<typeof BasePreviewCard.Positioner>,
  PreviewCardPositionerProps
>(({ className, ...props }, ref) => (
  <BasePreviewCard.Positioner
    ref={ref}
    className={mergeClassName<typeof BasePreviewCard.Positioner>(
      className,
      styles.Positioner,
    )}
    {...props}
  />
));

PreviewCardPositioner.displayName = 'PreviewCardPositioner';

type PreviewCardPopupProps = React.ComponentPropsWithoutRef<
  typeof BasePreviewCard.Popup
>;

export const PreviewCardPopup = React.forwardRef<
  React.ElementRef<typeof BasePreviewCard.Popup>,
  PreviewCardPopupProps
>(({ className, ...props }, ref) => (
  <BasePreviewCard.Popup
    ref={ref}
    className={mergeClassName<typeof BasePreviewCard.Popup>(
      className,
      styles.Popup,
    )}
    {...props}
  />
));

PreviewCardPopup.displayName = 'PreviewCardPopup';

type PreviewCardArrowProps = React.ComponentPropsWithoutRef<
  typeof BasePreviewCard.Arrow
>;

export const PreviewCardArrow = React.forwardRef<
  React.ElementRef<typeof BasePreviewCard.Arrow>,
  PreviewCardArrowProps
>(({ className, ...props }, ref) => (
  <BasePreviewCard.Arrow
    ref={ref}
    className={mergeClassName<typeof BasePreviewCard.Arrow>(
      className,
      styles.Arrow,
    )}
    {...props}
  />
));

PreviewCardArrow.displayName = 'PreviewCardArrow';

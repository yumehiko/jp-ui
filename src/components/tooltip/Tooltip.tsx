import * as React from 'react';
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Tooltip.module.css';

export const TooltipProvider = BaseTooltip.Provider;
export const TooltipRoot = BaseTooltip.Root;
export const TooltipTrigger = BaseTooltip.Trigger;
export const TooltipPortal = BaseTooltip.Portal;

type TooltipPositionerProps = React.ComponentPropsWithoutRef<
  typeof BaseTooltip.Positioner
>;

export const TooltipPositioner = React.forwardRef<
  React.ElementRef<typeof BaseTooltip.Positioner>,
  TooltipPositionerProps
>(({ className, ...props }, ref) => (
  <BaseTooltip.Positioner
    ref={ref}
    className={mergeClassName<typeof BaseTooltip.Positioner>(
      className,
      styles.Positioner,
    )}
    {...props}
  />
));

TooltipPositioner.displayName = 'TooltipPositioner';

type TooltipPopupProps = React.ComponentPropsWithoutRef<typeof BaseTooltip.Popup>;

export const TooltipPopup = React.forwardRef<
  React.ElementRef<typeof BaseTooltip.Popup>,
  TooltipPopupProps
>(({ className, ...props }, ref) => (
  <BaseTooltip.Popup
    ref={ref}
    className={mergeClassName<typeof BaseTooltip.Popup>(className, styles.Popup)}
    {...props}
  />
));

TooltipPopup.displayName = 'TooltipPopup';

type TooltipArrowProps = React.ComponentPropsWithoutRef<typeof BaseTooltip.Arrow>;

export const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof BaseTooltip.Arrow>,
  TooltipArrowProps
>(({ className, ...props }, ref) => (
  <BaseTooltip.Arrow
    ref={ref}
    className={mergeClassName<typeof BaseTooltip.Arrow>(className, styles.Arrow)}
    {...props}
  />
));

TooltipArrow.displayName = 'TooltipArrow';

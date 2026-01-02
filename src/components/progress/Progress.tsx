import * as React from 'react';
import { Progress as BaseProgress } from '@base-ui/react/progress';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Progress.module.css';

export const ProgressRoot = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Root>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Root>
>(({ className, ...props }, ref) => (
  <BaseProgress.Root
    ref={ref}
    className={mergeClassName<typeof BaseProgress.Root>(
      className,
      styles.Root,
    )}
    {...props}
  />
));

ProgressRoot.displayName = 'ProgressRoot';

export const ProgressLabel = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Label>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Label>
>(({ className, ...props }, ref) => (
  <BaseProgress.Label
    ref={ref}
    className={mergeClassName<typeof BaseProgress.Label>(
      className,
      styles.Label,
    )}
    {...props}
  />
));

ProgressLabel.displayName = 'ProgressLabel';

export const ProgressValue = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Value>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Value>
>(({ className, ...props }, ref) => (
  <BaseProgress.Value
    ref={ref}
    className={mergeClassName<typeof BaseProgress.Value>(
      className,
      styles.Value,
    )}
    {...props}
  />
));

ProgressValue.displayName = 'ProgressValue';

export const ProgressTrack = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Track>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Track>
>(({ className, ...props }, ref) => (
  <BaseProgress.Track
    ref={ref}
    className={mergeClassName<typeof BaseProgress.Track>(
      className,
      styles.Track,
    )}
    {...props}
  />
));

ProgressTrack.displayName = 'ProgressTrack';

export const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Indicator>
>(({ className, ...props }, ref) => (
  <BaseProgress.Indicator
    ref={ref}
    className={mergeClassName<typeof BaseProgress.Indicator>(
      className,
      styles.Indicator,
    )}
    {...props}
  />
));

ProgressIndicator.displayName = 'ProgressIndicator';

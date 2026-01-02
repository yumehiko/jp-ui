import * as React from 'react';
import { Meter as BaseMeter } from '@base-ui/react/meter';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Meter.module.css';

export const MeterRoot = React.forwardRef<
  React.ElementRef<typeof BaseMeter.Root>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Root>
>(({ className, ...props }, ref) => (
  <BaseMeter.Root
    ref={ref}
    className={mergeClassName<typeof BaseMeter.Root>(className, styles.Root)}
    {...props}
  />
));

MeterRoot.displayName = 'MeterRoot';

export const MeterLabel = React.forwardRef<
  React.ElementRef<typeof BaseMeter.Label>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Label>
>(({ className, ...props }, ref) => (
  <BaseMeter.Label
    ref={ref}
    className={mergeClassName<typeof BaseMeter.Label>(className, styles.Label)}
    {...props}
  />
));

MeterLabel.displayName = 'MeterLabel';

export const MeterValue = React.forwardRef<
  React.ElementRef<typeof BaseMeter.Value>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Value>
>(({ className, ...props }, ref) => (
  <BaseMeter.Value
    ref={ref}
    className={mergeClassName<typeof BaseMeter.Value>(className, styles.Value)}
    {...props}
  />
));

MeterValue.displayName = 'MeterValue';

export const MeterTrack = React.forwardRef<
  React.ElementRef<typeof BaseMeter.Track>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Track>
>(({ className, ...props }, ref) => (
  <BaseMeter.Track
    ref={ref}
    className={mergeClassName<typeof BaseMeter.Track>(className, styles.Track)}
    {...props}
  />
));

MeterTrack.displayName = 'MeterTrack';

export const MeterIndicator = React.forwardRef<
  React.ElementRef<typeof BaseMeter.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Indicator>
>(({ className, ...props }, ref) => (
  <BaseMeter.Indicator
    ref={ref}
    className={mergeClassName<typeof BaseMeter.Indicator>(
      className,
      styles.Indicator,
    )}
    {...props}
  />
));

MeterIndicator.displayName = 'MeterIndicator';

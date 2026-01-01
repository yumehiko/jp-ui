import * as React from 'react';
import { Slider as BaseSlider } from '@base-ui/react/slider';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Slider.module.css';

export const SliderRoot = React.forwardRef<
  React.ElementRef<typeof BaseSlider.Root>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Root>
>(({ className, ...props }, ref) => (
  <BaseSlider.Root
    ref={ref}
    className={mergeClassName<typeof BaseSlider.Root>(className, styles.Root)}
    {...props}
  />
));

SliderRoot.displayName = 'SliderRoot';

export const SliderControl = React.forwardRef<
  React.ElementRef<typeof BaseSlider.Control>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Control>
>(({ className, ...props }, ref) => (
  <BaseSlider.Control
    ref={ref}
    className={mergeClassName<typeof BaseSlider.Control>(
      className,
      styles.Control,
    )}
    {...props}
  />
));

SliderControl.displayName = 'SliderControl';

export const SliderTrack = React.forwardRef<
  React.ElementRef<typeof BaseSlider.Track>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Track>
>(({ className, ...props }, ref) => (
  <BaseSlider.Track
    ref={ref}
    className={mergeClassName<typeof BaseSlider.Track>(className, styles.Track)}
    {...props}
  />
));

SliderTrack.displayName = 'SliderTrack';

export const SliderIndicator = React.forwardRef<
  React.ElementRef<typeof BaseSlider.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Indicator>
>(({ className, ...props }, ref) => (
  <BaseSlider.Indicator
    ref={ref}
    className={mergeClassName<typeof BaseSlider.Indicator>(
      className,
      styles.Indicator,
    )}
    {...props}
  />
));

SliderIndicator.displayName = 'SliderIndicator';

export const SliderThumb = React.forwardRef<
  React.ElementRef<typeof BaseSlider.Thumb>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Thumb>
>(({ className, ...props }, ref) => (
  <BaseSlider.Thumb
    ref={ref}
    className={mergeClassName<typeof BaseSlider.Thumb>(className, styles.Thumb)}
    {...props}
  />
));

SliderThumb.displayName = 'SliderThumb';

export const SliderValue = React.forwardRef<
  React.ElementRef<typeof BaseSlider.Value>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Value>
>(({ className, ...props }, ref) => (
  <BaseSlider.Value
    ref={ref}
    className={mergeClassName<typeof BaseSlider.Value>(className, styles.Value)}
    {...props}
  />
));

SliderValue.displayName = 'SliderValue';

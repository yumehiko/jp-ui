import * as React from 'react';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './NumberField.module.css';

export const NumberFieldRoot = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Root>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Root>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Root
    ref={ref}
    className={mergeClassName<typeof BaseNumberField.Root>(className, styles.Root)}
    {...props}
  />
));

NumberFieldRoot.displayName = 'NumberFieldRoot';

export const NumberFieldScrubArea = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.ScrubArea>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.ScrubArea>
>(({ className, ...props }, ref) => (
  <BaseNumberField.ScrubArea
    ref={ref}
    className={mergeClassName<typeof BaseNumberField.ScrubArea>(
      className,
      styles.ScrubArea,
    )}
    {...props}
  />
));

NumberFieldScrubArea.displayName = 'NumberFieldScrubArea';

export const NumberFieldScrubAreaCursor = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.ScrubAreaCursor>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.ScrubAreaCursor>
>(({ className, ...props }, ref) => (
  <BaseNumberField.ScrubAreaCursor
    ref={ref}
    className={mergeClassName<typeof BaseNumberField.ScrubAreaCursor>(
      className,
      styles.ScrubAreaCursor,
    )}
    {...props}
  />
));

NumberFieldScrubAreaCursor.displayName = 'NumberFieldScrubAreaCursor';

export const NumberFieldGroup = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Group>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Group>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Group
    ref={ref}
    className={mergeClassName<typeof BaseNumberField.Group>(
      className,
      styles.Group,
    )}
    {...props}
  />
));

NumberFieldGroup.displayName = 'NumberFieldGroup';

export const NumberFieldInput = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Input>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Input>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Input
    ref={ref}
    className={mergeClassName<typeof BaseNumberField.Input>(
      className,
      styles.Input,
    )}
    {...props}
  />
));

NumberFieldInput.displayName = 'NumberFieldInput';

export const NumberFieldDecrement = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Decrement>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Decrement>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Decrement
    ref={ref}
    className={mergeClassName<typeof BaseNumberField.Decrement>(
      className,
      styles.Decrement,
    )}
    {...props}
  />
));

NumberFieldDecrement.displayName = 'NumberFieldDecrement';

export const NumberFieldIncrement = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Increment>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Increment>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Increment
    ref={ref}
    className={mergeClassName<typeof BaseNumberField.Increment>(
      className,
      styles.Increment,
    )}
    {...props}
  />
));

NumberFieldIncrement.displayName = 'NumberFieldIncrement';

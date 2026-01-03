import * as React from 'react';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './RadioGroup.module.css';

type RadioGroupProps = React.ComponentPropsWithoutRef<typeof BaseRadioGroup>;

type RadioGroupElement = React.ElementRef<typeof BaseRadioGroup>;

export const RadioGroup = React.forwardRef<RadioGroupElement, RadioGroupProps>(
  ({ className, ...props }, ref) => (
    <BaseRadioGroup
      ref={ref}
      className={mergeClassName<typeof BaseRadioGroup>(
        className,
        styles.Group,
      )}
      {...props}
    />
  ),
);

RadioGroup.displayName = 'RadioGroup';

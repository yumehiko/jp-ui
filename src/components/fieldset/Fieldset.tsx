import * as React from 'react';
import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Fieldset.module.css';

export const FieldsetRoot = React.forwardRef<
  React.ElementRef<typeof BaseFieldset.Root>,
  React.ComponentPropsWithoutRef<typeof BaseFieldset.Root>
>(({ className, ...props }, ref) => (
  <BaseFieldset.Root
    ref={ref}
    className={mergeClassName<typeof BaseFieldset.Root>(className, styles.Root)}
    {...props}
  />
));

FieldsetRoot.displayName = 'FieldsetRoot';

export const FieldsetLegend = React.forwardRef<
  React.ElementRef<typeof BaseFieldset.Legend>,
  React.ComponentPropsWithoutRef<typeof BaseFieldset.Legend>
>(({ className, ...props }, ref) => (
  <BaseFieldset.Legend
    ref={ref}
    className={mergeClassName<typeof BaseFieldset.Legend>(
      className,
      styles.Legend,
    )}
    {...props}
  />
));

FieldsetLegend.displayName = 'FieldsetLegend';

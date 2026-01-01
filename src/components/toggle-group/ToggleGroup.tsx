import * as React from 'react';
import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './ToggleGroup.module.css';

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof BaseToggleGroup>,
  React.ComponentPropsWithoutRef<typeof BaseToggleGroup>
>(({ className, ...props }, ref) => (
  <BaseToggleGroup
    ref={ref}
    className={mergeClassName<typeof BaseToggleGroup>(
      className,
      styles.ToggleGroup,
    )}
    {...props}
  />
));

ToggleGroup.displayName = 'ToggleGroup';

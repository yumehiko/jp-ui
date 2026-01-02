import * as React from 'react';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './CheckboxGroup.module.css';

type CheckboxGroupProps = React.ComponentPropsWithoutRef<
  typeof BaseCheckboxGroup
>;

type CheckboxGroupElement = React.ElementRef<typeof BaseCheckboxGroup>;

export const CheckboxGroup = React.forwardRef<
  CheckboxGroupElement,
  CheckboxGroupProps
>(({ className, ...props }, ref) => (
  <BaseCheckboxGroup
    ref={ref}
    className={mergeClassName<typeof BaseCheckboxGroup>(
      className,
      styles.Group,
    )}
    {...props}
  />
));

CheckboxGroup.displayName = 'CheckboxGroup';

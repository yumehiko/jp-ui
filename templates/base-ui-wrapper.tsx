import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Button.module.css';

type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton>;
type ButtonElement = React.ElementRef<typeof BaseButton>;
export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <BaseButton
      ref={ref}
      className={mergeClassName<typeof BaseButton>(className, styles.Button)}
      {...props}
    />
  ),
);

Button.displayName = 'Button';

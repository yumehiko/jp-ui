import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Button.module.css';

type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';

type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
  variant?: ButtonVariant;
};

type ButtonElement = React.ElementRef<typeof BaseButton>;

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  ({ className, variant = 'filled', ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={mergeClassName<typeof BaseButton>(className, styles.Button)}
        data-variant={variant}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Button.module.css';

type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';

type IconButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
  'aria-label': string;
  variant?: ButtonVariant;
};

type IconButtonElement = React.ElementRef<typeof BaseButton>;

export const IconButton = React.forwardRef<IconButtonElement, IconButtonProps>(
  ({ className, variant = 'filled', ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={mergeClassName<typeof BaseButton>(
          className,
          styles.Button,
          styles.IconButton,
        )}
        data-variant={variant}
        {...props}
      />
    );
  },
);

IconButton.displayName = 'IconButton';

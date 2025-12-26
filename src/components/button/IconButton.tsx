import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import styles from './Button.module.css';

type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';

type IconButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
  'aria-label': string;
  variant?: ButtonVariant;
};

type IconButtonElement = React.ElementRef<typeof BaseButton>;

export const IconButton = React.forwardRef<IconButtonElement, IconButtonProps>(
  ({ className, variant = 'filled', ...props }, ref) => {
    const mergedClassName =
      typeof className === 'function'
        ? (state: Parameters<typeof className>[0]) =>
            [styles.Button, styles.IconButton, className(state)]
              .filter(Boolean)
              .join(' ')
        : [styles.Button, styles.IconButton, className].filter(Boolean).join(' ');

    return (
      <BaseButton
        ref={ref}
        className={mergedClassName}
        data-variant={variant}
        {...props}
      />
    );
  },
);

IconButton.displayName = 'IconButton';

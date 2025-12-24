import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import styles from './Button.module.css';

type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton>;
type ButtonElement = React.ElementRef<typeof BaseButton>;

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const mergedClassName = [styles.Button, className].filter(Boolean).join(' ');

    return <BaseButton ref={ref} className={mergedClassName} {...props} />;
  },
);

Button.displayName = 'Button';

import * as React from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import styles from './Input.module.css';

type InputProps = React.ComponentPropsWithoutRef<typeof BaseInput>;
type InputElement = React.ElementRef<typeof BaseInput>;

export const Input = React.forwardRef<InputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const mergedClassName =
      typeof className === 'function'
        ? (state: Parameters<typeof className>[0]) =>
            [styles.Input, className(state)].filter(Boolean).join(' ')
        : [styles.Input, className].filter(Boolean).join(' ');

    return <BaseInput ref={ref} className={mergedClassName} {...props} />;
  },
);

Input.displayName = 'Input';

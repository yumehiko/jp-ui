import * as React from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Input.module.css';

type InputProps = React.ComponentPropsWithoutRef<typeof BaseInput>;
type InputElement = React.ElementRef<typeof BaseInput>;

export const Input = React.forwardRef<InputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseInput
        ref={ref}
        className={mergeClassName<typeof BaseInput>(className, styles.Input)}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import styles from './Button.module.css';

type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton>;
type ButtonElement = React.ElementRef<typeof BaseButton>;
type ButtonClassName = ButtonProps['className'];
type ButtonClassNameFn = Exclude<ButtonClassName, string | undefined>;
type ButtonClassNameState = Parameters<ButtonClassNameFn>[0];

const mergeClassName = (
  className: ButtonClassName,
  baseClassName: string,
): ButtonClassName => {
  if (!className) return baseClassName;
  if (typeof className === 'function') {
    return (state: ButtonClassNameState) =>
      [baseClassName, className(state)].filter(Boolean).join(' ');
  }
  return [baseClassName, className].filter(Boolean).join(' ');
};

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <BaseButton
      ref={ref}
      className={mergeClassName(className, styles.Button)}
      {...props}
    />
  ),
);

Button.displayName = 'Button';

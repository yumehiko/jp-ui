import * as React from 'react';
import { Separator as BaseSeparator } from '@base-ui/react/separator';
import styles from './Separator.module.css';

type SeparatorStyle = 'solid' | 'dashed';

type SeparatorProps = React.ComponentPropsWithoutRef<typeof BaseSeparator> & {
  style?: SeparatorStyle;
};

const mergeSeparatorClassName = (className: unknown, baseClassName: string) => {
  if (!className) return baseClassName;
  if (typeof className === 'function') {
    return (state: Parameters<typeof className>[0]) =>
      [baseClassName, className(state)].filter(Boolean).join(' ');
  }
  return [baseClassName, className].filter(Boolean).join(' ');
};

export const Separator = React.forwardRef<
  React.ElementRef<typeof BaseSeparator>,
  SeparatorProps
>(({ className, style = 'solid', ...props }, ref) => (
  <BaseSeparator
    ref={ref}
    className={mergeSeparatorClassName(className, styles.Separator)}
    data-style={style}
    {...props}
  />
));

Separator.displayName = 'Separator';

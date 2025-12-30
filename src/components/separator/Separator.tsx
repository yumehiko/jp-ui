import * as React from 'react';
import { Separator as BaseSeparator } from '@base-ui/react/separator';
import styles from './Separator.module.css';

type SeparatorStyle = 'solid' | 'dashed';

type SeparatorProps = React.ComponentPropsWithoutRef<typeof BaseSeparator> & {
  style?: SeparatorStyle;
};

type SeparatorClassName = React.ComponentPropsWithoutRef<
  typeof BaseSeparator
>['className'];
type SeparatorClassNameFn = Exclude<SeparatorClassName, string | undefined>;
type SeparatorClassNameState = Parameters<SeparatorClassNameFn>[0];

const mergeSeparatorClassName = (
  className: SeparatorClassName,
  baseClassName: string,
): SeparatorClassName => {
  if (!className) return baseClassName;
  if (typeof className === 'function') {
    return (state: SeparatorClassNameState) =>
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

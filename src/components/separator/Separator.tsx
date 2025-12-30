import * as React from 'react';
import { Separator as BaseSeparator } from '@base-ui/react/separator';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Separator.module.css';

type SeparatorStyle = 'solid' | 'dashed';

type SeparatorProps = React.ComponentPropsWithoutRef<typeof BaseSeparator> & {
  style?: SeparatorStyle;
};

export const Separator = React.forwardRef<
  React.ElementRef<typeof BaseSeparator>,
  SeparatorProps
>(({ className, style = 'solid', ...props }, ref) => (
  <BaseSeparator
    ref={ref}
    className={mergeClassName<typeof BaseSeparator>(className, styles.Separator)}
    data-style={style}
    {...props}
  />
));

Separator.displayName = 'Separator';

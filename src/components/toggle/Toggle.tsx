import * as React from 'react';
import { Toggle as BaseToggle } from '@base-ui/react/toggle';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Toggle.module.css';

type ToggleProps = React.ComponentPropsWithoutRef<typeof BaseToggle> & {
  icon?: React.ReactNode;
};

export const Toggle = React.forwardRef<
  React.ElementRef<typeof BaseToggle>,
  ToggleProps
>(({ className, icon, children, ...props }, ref) => {
  const content = children ?? icon;

  return (
    <BaseToggle
      ref={ref}
      className={mergeClassName<typeof BaseToggle>(className, styles.Toggle)}
      {...props}
    >
      {content}
      <span aria-hidden="true" className={styles.ToggleLayer} />
    </BaseToggle>
  );
});

Toggle.displayName = 'Toggle';

import * as React from 'react';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { Icon } from '../../assets/icons/Icon';
import styles from './Switch.module.css';

type SwitchProps = Omit<
  React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>,
  'children'
> & {
  icon?: React.ReactNode;
};

type SwitchElement = React.ElementRef<typeof BaseSwitch.Root>;

export const Switch = React.forwardRef<SwitchElement, SwitchProps>(
  ({ className, icon, ...props }, ref) => {
    const mergedClassName =
      typeof className === 'function'
        ? (state: Parameters<typeof className>[0]) =>
            [styles.Switch, className(state)].filter(Boolean).join(' ')
        : [styles.Switch, className].filter(Boolean).join(' ');

    return (
      <BaseSwitch.Root ref={ref} className={mergedClassName} {...props}>
        <span aria-hidden="true" className={styles.StateLayer} />
        <BaseSwitch.Thumb className={styles.Thumb}>
          {icon ?? <Icon name="check" size={16} className={styles.Icon} />}
        </BaseSwitch.Thumb>
      </BaseSwitch.Root>
    );
  },
);

Switch.displayName = 'Switch';

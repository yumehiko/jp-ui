import * as React from 'react';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { Icon } from '../../assets/icons/Icon';
import { IconCheck } from '@tabler/icons-react';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Switch.module.css';

type SwitchProps = Omit<
  React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>,
  'children'
> & {
  icon?: React.ReactNode;
  size?: 'large' | 'small';
};

type SwitchElement = React.ElementRef<typeof BaseSwitch.Root>;

export const Switch = React.forwardRef<SwitchElement, SwitchProps>(
  ({ className, icon, size = 'large', ...props }, ref) => {
    return (
      <BaseSwitch.Root
        ref={ref}
        className={mergeClassName<typeof BaseSwitch.Root>(
          className,
          styles.Switch,
        )}
        data-size={size}
        {...props}
      >
        <span aria-hidden="true" className={styles.StateLayer} />
        <BaseSwitch.Thumb className={styles.Thumb}>
          {icon ?? <Icon icon={IconCheck} size={16} className={styles.Icon} />}
        </BaseSwitch.Thumb>
      </BaseSwitch.Root>
    );
  },
);

Switch.displayName = 'Switch';

import * as React from 'react';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { Icon } from '../../assets/icons/Icon';
import { IconCheck } from '@tabler/icons-react';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Checkbox.module.css';

type CheckboxProps = Omit<
  React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>,
  'children'
> & {
  icon?: React.ReactNode;
};

type CheckboxElement = React.ElementRef<typeof BaseCheckbox.Root>;

export const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <BaseCheckbox.Root
        ref={ref}
        className={mergeClassName<typeof BaseCheckbox.Root>(
          className,
          styles.Checkbox,
        )}
        {...props}
      >
        <span aria-hidden="true" className={styles.Box} />
        <span aria-hidden="true" className={styles.StateLayer} />
        <BaseCheckbox.Indicator className={styles.Indicator}>
          {icon ?? <Icon icon={IconCheck} size={12} className={styles.Icon} />}
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
    );
  },
);

Checkbox.displayName = 'Checkbox';

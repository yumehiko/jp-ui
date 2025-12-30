import * as React from 'react';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { Icon } from '../../assets/icons/Icon';
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
    const mergedClassName =
      typeof className === 'function'
        ? (state: Parameters<typeof className>[0]) =>
            [styles.Checkbox, className(state)].filter(Boolean).join(' ')
        : [styles.Checkbox, className].filter(Boolean).join(' ');

    return (
      <BaseCheckbox.Root ref={ref} className={mergedClassName} {...props}>
        <span aria-hidden="true" className={styles.Box} />
        <span aria-hidden="true" className={styles.StateLayer} />
        <BaseCheckbox.Indicator className={styles.Indicator}>
          {icon ?? <Icon name="check" size={12} className={styles.Icon} />}
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
    );
  },
);

Checkbox.displayName = 'Checkbox';

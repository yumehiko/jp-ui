import * as React from 'react';
import { Select as BaseSelect } from '@base-ui/react/select';
import { Icon } from '../../assets/icons/Icon';
import { Separator } from '../separator/Separator';
import styles from './Select.module.css';

type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof BaseSelect.Trigger
> & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  floatingLabel?: React.ReactNode;
  filled?: boolean;
  readOnly?: boolean;
};

const mergeTriggerClassName = (className: unknown, baseClassName: string) => {
  if (!className) return baseClassName;
  if (typeof className === 'function') {
    return (state: Parameters<typeof className>[0]) =>
      [baseClassName, className(state)].filter(Boolean).join(' ');
  }
  return [baseClassName, className].filter(Boolean).join(' ');
};

export const SelectRoot = BaseSelect.Root;
export const SelectValue = BaseSelect.Value;
export const SelectIcon = BaseSelect.Icon;
export const SelectPortal = BaseSelect.Portal;
export const SelectGroup = BaseSelect.Group;

type SelectGroupLabelProps = React.ComponentPropsWithoutRef<
  typeof BaseSelect.GroupLabel
>;

export const SelectGroupLabel = React.forwardRef<
  React.ElementRef<typeof BaseSelect.GroupLabel>,
  SelectGroupLabelProps
>(({ className, ...props }, ref) => (
  <BaseSelect.GroupLabel
    ref={ref}
    className={[styles.GroupLabel, className].filter(Boolean).join(' ')}
    {...props}
  />
));

SelectGroupLabel.displayName = 'SelectGroupLabel';

type SelectPositionerProps = React.ComponentPropsWithoutRef<
  typeof BaseSelect.Positioner
>;

export const SelectPositioner = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Positioner>,
  SelectPositionerProps
>(({ className, ...props }, ref) => (
  <BaseSelect.Positioner
    ref={ref}
    className={[styles.Positioner, className].filter(Boolean).join(' ')}
    {...props}
  />
));

SelectPositioner.displayName = 'SelectPositioner';

type SelectPopupProps = React.ComponentPropsWithoutRef<typeof BaseSelect.Popup>;

export const SelectPopup = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Popup>,
  SelectPopupProps
>(({ className, ...props }, ref) => (
  <BaseSelect.Popup
    ref={ref}
    className={[styles.Popup, className].filter(Boolean).join(' ')}
    {...props}
  />
));

SelectPopup.displayName = 'SelectPopup';

type SelectListProps = React.ComponentPropsWithoutRef<typeof BaseSelect.List>;

export const SelectList = React.forwardRef<
  React.ElementRef<typeof BaseSelect.List>,
  SelectListProps
>(({ className, ...props }, ref) => (
  <BaseSelect.List
    ref={ref}
    className={[styles.List, className].filter(Boolean).join(' ')}
    {...props}
  />
));

SelectList.displayName = 'SelectList';

type SelectScrollArrowProps = React.ComponentPropsWithoutRef<
  typeof BaseSelect.ScrollUpArrow
>;

export const SelectScrollUpArrow = React.forwardRef<
  React.ElementRef<typeof BaseSelect.ScrollUpArrow>,
  SelectScrollArrowProps
>(({ className, children, ...props }, ref) => (
  <BaseSelect.ScrollUpArrow
    ref={ref}
    className={[styles.ScrollArrow, className].filter(Boolean).join(' ')}
    {...props}
  >
    {children ?? <Icon name="caret-up" size={24} />}
  </BaseSelect.ScrollUpArrow>
));

SelectScrollUpArrow.displayName = 'SelectScrollUpArrow';

export const SelectScrollDownArrow = React.forwardRef<
  React.ElementRef<typeof BaseSelect.ScrollDownArrow>,
  SelectScrollArrowProps
>(({ className, children, ...props }, ref) => (
  <BaseSelect.ScrollDownArrow
    ref={ref}
    className={[styles.ScrollArrow, className].filter(Boolean).join(' ')}
    {...props}
  >
    {children ?? <Icon name="caret-down" size={24} />}
  </BaseSelect.ScrollDownArrow>
));

SelectScrollDownArrow.displayName = 'SelectScrollDownArrow';

type SelectSeparatorProps = React.ComponentPropsWithoutRef<'div'> & {
  style?: React.ComponentPropsWithoutRef<typeof Separator>['style'];
  separatorClassName?: string;
};

export function SelectSeparator({
  className,
  style = 'solid',
  separatorClassName,
  ...props
}: SelectSeparatorProps) {
  return (
    <div className={[styles.SelectSeparator, className].filter(Boolean).join(' ')} {...props}>
      <Separator
        className={[styles.SelectSeparatorLine, separatorClassName]
          .filter(Boolean)
          .join(' ')}
        style={style}
      />
    </div>
  );
}

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Trigger>,
  SelectTriggerProps
>(
  (
    {
      leadingIcon,
      trailingIcon,
      floatingLabel,
      filled = false,
      readOnly,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const label = React.isValidElement(floatingLabel)
      ? React.cloneElement(floatingLabel, {
          className: [styles.Label, floatingLabel.props.className]
            .filter(Boolean)
            .join(' '),
          'data-select-label': true,
        })
      : floatingLabel;
    const content = children ?? <BaseSelect.Value />;

    return (
      <BaseSelect.Trigger
        ref={ref}
        className={mergeTriggerClassName(className, styles.SelectTrigger)}
        data-filled={filled || undefined}
        data-readonly={readOnly || undefined}
        data-leading-icon={leadingIcon ? true : undefined}
        data-disabled={disabled || undefined}
        aria-readonly={readOnly || undefined}
        disabled={disabled}
        {...props}
      >
        {label}
        {leadingIcon ? (
          <span className={styles.LeadingIcon}>{leadingIcon}</span>
        ) : null}
        <span className={styles.Value}>{content}</span>
        <BaseSelect.Icon className={styles.Icon}>
          {trailingIcon ?? <Icon name="caret-down" size={24} />}
        </BaseSelect.Icon>
        <span aria-hidden="true" className={styles.StateLayer} />
      </BaseSelect.Trigger>
    );
  },
);

SelectTrigger.displayName = 'SelectTrigger';

type SelectItemProps = React.ComponentPropsWithoutRef<typeof BaseSelect.Item> & {
  indicator?: React.ReactNode;
};

const mergeItemClassName = (className: unknown, baseClassName: string) => {
  if (!className) return baseClassName;
  if (typeof className === 'function') {
    return (state: Parameters<typeof className>[0]) =>
      [baseClassName, className(state)].filter(Boolean).join(' ');
  }
  return [baseClassName, className].filter(Boolean).join(' ');
};

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Item>,
  SelectItemProps
>(({ className, children, indicator, ...props }, ref) => (
  <BaseSelect.Item
    ref={ref}
    className={mergeItemClassName(className, styles.Item)}
    {...props}
  >
    <BaseSelect.ItemIndicator className={styles.ItemIndicator}>
      {indicator ?? <Icon name="check" size={24} />}
    </BaseSelect.ItemIndicator>
    <BaseSelect.ItemText className={styles.ItemText}>
      {children}
    </BaseSelect.ItemText>
    <span aria-hidden="true" className={styles.ItemStateLayer} />
  </BaseSelect.Item>
));

SelectItem.displayName = 'SelectItem';

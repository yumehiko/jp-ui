import * as React from 'react';
import { Select as BaseSelect } from '@base-ui/react/select';
import { Icon } from '../../assets/icons/Icon';
import { IconCaretDown, IconCaretUp, IconCheck } from '@tabler/icons-react';
import { Separator } from '../separator/Separator';
import { mergeClassName } from '../utils/mergeClassName';
import listboxStyles from '../listbox/Listbox.module.css';
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

type TriggerClassName = React.ComponentPropsWithoutRef<
  typeof BaseSelect.Trigger
>['className'];

const mergeTriggerClassName = (
  className: TriggerClassName,
  baseClassName: string,
): TriggerClassName =>
  mergeClassName<typeof BaseSelect.Trigger>(className, baseClassName);

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
    className={mergeClassName<typeof BaseSelect.GroupLabel>(
      className,
      listboxStyles.GroupLabel,
    )}
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
    className={mergeClassName<typeof BaseSelect.Positioner>(
      className,
      listboxStyles.Positioner,
    )}
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
    className={mergeClassName<typeof BaseSelect.Popup>(
      className,
      listboxStyles.Popup,
      styles.Popup,
    )}
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
    className={mergeClassName<typeof BaseSelect.List>(
      className,
      listboxStyles.List,
      styles.List,
    )}
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
    className={mergeClassName<typeof BaseSelect.ScrollUpArrow>(
      className,
      styles.ScrollArrow,
    )}
    {...props}
  >
    {children ?? <Icon icon={IconCaretUp} size={24} />}
  </BaseSelect.ScrollUpArrow>
));

SelectScrollUpArrow.displayName = 'SelectScrollUpArrow';

export const SelectScrollDownArrow = React.forwardRef<
  React.ElementRef<typeof BaseSelect.ScrollDownArrow>,
  SelectScrollArrowProps
>(({ className, children, ...props }, ref) => (
  <BaseSelect.ScrollDownArrow
    ref={ref}
    className={mergeClassName<typeof BaseSelect.ScrollDownArrow>(
      className,
      styles.ScrollArrow,
    )}
    {...props}
  >
    {children ?? <Icon icon={IconCaretDown} size={24} />}
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
    const label = React.isValidElement<{
      className?: string;
      'data-select-label'?: boolean;
    }>(floatingLabel)
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
          {trailingIcon ?? <Icon icon={IconCaretDown} size={24} />}
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

type ItemClassName = React.ComponentPropsWithoutRef<typeof BaseSelect.Item>['className'];

const mergeItemClassName = (
  className: ItemClassName,
  baseClassName: string,
): ItemClassName => mergeClassName<typeof BaseSelect.Item>(className, baseClassName);

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Item>,
  SelectItemProps
>(({ className, children, indicator, ...props }, ref) => (
  <BaseSelect.Item
    ref={ref}
    className={mergeItemClassName(
      className,
      [listboxStyles.Item, styles.Item].join(' '),
    )}
    {...props}
  >
    <BaseSelect.ItemIndicator className={styles.ItemIndicator}>
      {indicator ?? <Icon icon={IconCheck} size={24} />}
    </BaseSelect.ItemIndicator>
    <BaseSelect.ItemText className={styles.ItemText}>
      {children}
    </BaseSelect.ItemText>
    <span aria-hidden="true" className={styles.ItemStateLayer} />
  </BaseSelect.Item>
));

SelectItem.displayName = 'SelectItem';

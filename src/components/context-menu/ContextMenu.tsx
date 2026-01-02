import * as React from 'react';
import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { mergeClassName } from '../utils/mergeClassName';
import menuStyles from '../menu/Menu.module.css';
import styles from './ContextMenu.module.css';

export const ContextMenuRoot = BaseContextMenu.Root;

export const ContextMenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Trigger>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Trigger
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.Trigger>(
      className,
      styles.Trigger,
    )}
    {...props}
  />
));

ContextMenuTrigger.displayName = 'ContextMenuTrigger';

export const ContextMenuPortal = BaseContextMenu.Portal;

type ContextMenuBackdropProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.Backdrop
>;

export const ContextMenuBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Backdrop>,
  ContextMenuBackdropProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Backdrop
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.Backdrop>(
      className,
      menuStyles.Backdrop,
    )}
    {...props}
  />
));

ContextMenuBackdrop.displayName = 'ContextMenuBackdrop';

type ContextMenuPositionerProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.Positioner
>;

export const ContextMenuPositioner = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Positioner>,
  ContextMenuPositionerProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Positioner
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.Positioner>(
      className,
      menuStyles.Positioner,
    )}
    {...props}
  />
));

ContextMenuPositioner.displayName = 'ContextMenuPositioner';

type ContextMenuPopupProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.Popup
>;

export const ContextMenuPopup = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Popup>,
  ContextMenuPopupProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Popup
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.Popup>(
      className,
      menuStyles.Popup,
    )}
    {...props}
  />
));

ContextMenuPopup.displayName = 'ContextMenuPopup';

type ContextMenuArrowProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.Arrow
>;

export const ContextMenuArrow = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Arrow>,
  ContextMenuArrowProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Arrow
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.Arrow>(
      className,
      menuStyles.Arrow,
    )}
    {...props}
  />
));

ContextMenuArrow.displayName = 'ContextMenuArrow';

type ContextMenuItemProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.Item
>;

export const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Item>,
  ContextMenuItemProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Item
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.Item>(
      className,
      menuStyles.Item,
    )}
    {...props}
  />
));

ContextMenuItem.displayName = 'ContextMenuItem';

type ContextMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.Separator
>;

export const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Separator>,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Separator
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.Separator>(
      className,
      menuStyles.Separator,
    )}
    {...props}
  />
));

ContextMenuSeparator.displayName = 'ContextMenuSeparator';

type ContextMenuContentProps = useRender.ComponentProps<'div'>;

export function ContextMenuContent({ render, ...props }: ContextMenuContentProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: menuStyles.Content }, props),
  });

  return element;
}

type ContextMenuGroupProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.Group
>;

export const ContextMenuGroup = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Group>,
  ContextMenuGroupProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Group
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.Group>(
      className,
      menuStyles.Group,
    )}
    {...props}
  />
));

ContextMenuGroup.displayName = 'ContextMenuGroup';

type ContextMenuGroupLabelProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.GroupLabel
>;

export const ContextMenuGroupLabel = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.GroupLabel>,
  ContextMenuGroupLabelProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.GroupLabel
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.GroupLabel>(
      className,
      menuStyles.GroupLabel,
    )}
    {...props}
  />
));

ContextMenuGroupLabel.displayName = 'ContextMenuGroupLabel';

type ContextMenuRadioGroupProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.RadioGroup
>;

export const ContextMenuRadioGroup = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.RadioGroup>,
  ContextMenuRadioGroupProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.RadioGroup
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.RadioGroup>(
      className,
      menuStyles.RadioGroup,
    )}
    {...props}
  />
));

ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup';

type ContextMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.RadioItem
>;

export const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.RadioItem>,
  ContextMenuRadioItemProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.RadioItem
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.RadioItem>(
      className,
      menuStyles.OptionItem,
    )}
    {...props}
  />
));

ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

type ContextMenuRadioItemIndicatorProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.RadioItemIndicator
>;

export const ContextMenuRadioItemIndicator = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.RadioItemIndicator>,
  ContextMenuRadioItemIndicatorProps
>(({ className, keepMounted = true, ...props }, ref) => (
  <BaseContextMenu.RadioItemIndicator
    ref={ref}
    keepMounted={keepMounted}
    className={mergeClassName<typeof BaseContextMenu.RadioItemIndicator>(
      className,
      menuStyles.OptionIndicator,
    )}
    {...props}
  />
));

ContextMenuRadioItemIndicator.displayName = 'ContextMenuRadioItemIndicator';

type ContextMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.CheckboxItem
>;

export const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.CheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.CheckboxItem
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.CheckboxItem>(
      className,
      menuStyles.OptionItem,
    )}
    {...props}
  />
));

ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

type ContextMenuCheckboxItemIndicatorProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.CheckboxItemIndicator
>;

export const ContextMenuCheckboxItemIndicator = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.CheckboxItemIndicator>,
  ContextMenuCheckboxItemIndicatorProps
>(({ className, keepMounted = true, ...props }, ref) => (
  <BaseContextMenu.CheckboxItemIndicator
    ref={ref}
    keepMounted={keepMounted}
    className={mergeClassName<typeof BaseContextMenu.CheckboxItemIndicator>(
      className,
      menuStyles.OptionIndicator,
    )}
    {...props}
  />
));

ContextMenuCheckboxItemIndicator.displayName =
  'ContextMenuCheckboxItemIndicator';

export const ContextMenuSubmenuRoot = BaseContextMenu.SubmenuRoot;

type ContextMenuSubmenuTriggerProps = React.ComponentPropsWithoutRef<
  typeof BaseContextMenu.SubmenuTrigger
>;

export const ContextMenuSubmenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.SubmenuTrigger>,
  ContextMenuSubmenuTriggerProps
>(({ className, ...props }, ref) => (
  <BaseContextMenu.SubmenuTrigger
    ref={ref}
    className={mergeClassName<typeof BaseContextMenu.SubmenuTrigger>(
      className,
      menuStyles.SubmenuTrigger,
    )}
    {...props}
  />
));

ContextMenuSubmenuTrigger.displayName = 'ContextMenuSubmenuTrigger';

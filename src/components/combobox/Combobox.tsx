import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { mergeClassName } from '../utils/mergeClassName';
import listboxStyles from '../listbox/Listbox.module.css';
import styles from './Combobox.module.css';

export const ComboboxRoot = BaseCombobox.Root;
export const ComboboxValue = BaseCombobox.Value;
export const ComboboxPortal = BaseCombobox.Portal;
export const ComboboxBackdrop = BaseCombobox.Backdrop;
export const ComboboxCollection = BaseCombobox.Collection;
export const ComboboxIcon = BaseCombobox.Icon;

export const ComboboxInput = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Input>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Input>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Input
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Input>(
      className,
      styles.Input,
    )}
    {...props}
  />
));

ComboboxInput.displayName = 'ComboboxInput';

export const ComboboxTrigger = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Trigger>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Trigger
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Trigger>(
      className,
      styles.Trigger,
    )}
    {...props}
  />
));

ComboboxTrigger.displayName = 'ComboboxTrigger';

export const ComboboxClear = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Clear>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Clear>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Clear
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Clear>(
      className,
      styles.Clear,
    )}
    {...props}
  />
));

ComboboxClear.displayName = 'ComboboxClear';

export const ComboboxChips = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Chips>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Chips>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Chips
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Chips>(
      className,
      styles.Chips,
    )}
    {...props}
  />
));

ComboboxChips.displayName = 'ComboboxChips';

export const ComboboxChip = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Chip>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Chip>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Chip
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Chip>(className, styles.Chip)}
    {...props}
  />
));

ComboboxChip.displayName = 'ComboboxChip';

export const ComboboxChipRemove = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.ChipRemove>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.ChipRemove>
>(({ className, ...props }, ref) => (
  <BaseCombobox.ChipRemove
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.ChipRemove>(
      className,
      styles.ChipRemove,
    )}
    {...props}
  />
));

ComboboxChipRemove.displayName = 'ComboboxChipRemove';

export const ComboboxPositioner = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Positioner>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Positioner
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Positioner>(
      className,
      listboxStyles.Positioner,
      styles.Positioner,
    )}
    {...props}
  />
));

ComboboxPositioner.displayName = 'ComboboxPositioner';

export const ComboboxPopup = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Popup>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Popup
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Popup>(
      className,
      listboxStyles.Popup,
      styles.Popup,
    )}
    {...props}
  />
));

ComboboxPopup.displayName = 'ComboboxPopup';

export const ComboboxList = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.List>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.List>
>(({ className, ...props }, ref) => (
  <BaseCombobox.List
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.List>(
      className,
      listboxStyles.List,
    )}
    {...props}
  />
));

ComboboxList.displayName = 'ComboboxList';

export const ComboboxRow = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Row>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Row>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Row
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Row>(
      className,
      styles.Row,
    )}
    {...props}
  />
));

ComboboxRow.displayName = 'ComboboxRow';

export const ComboboxItem = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Item>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Item>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Item
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Item>(
      className,
      listboxStyles.Item,
      styles.Item,
    )}
    {...props}
  />
));

ComboboxItem.displayName = 'ComboboxItem';

export const ComboboxItemIndicator = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.ItemIndicator>
>(({ className, ...props }, ref) => (
  <BaseCombobox.ItemIndicator
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.ItemIndicator>(
      className,
      styles.ItemIndicator,
    )}
    {...props}
  />
));

ComboboxItemIndicator.displayName = 'ComboboxItemIndicator';

export const ComboboxStatus = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Status>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Status>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Status
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Status>(
      className,
      listboxStyles.Status,
    )}
    {...props}
  />
));

ComboboxStatus.displayName = 'ComboboxStatus';

export const ComboboxEmpty = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Empty>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Empty>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Empty
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Empty>(
      className,
      listboxStyles.Empty,
    )}
    {...props}
  />
));

ComboboxEmpty.displayName = 'ComboboxEmpty';

export const ComboboxGroup = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Group>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Group>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Group
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Group>(
      className,
      listboxStyles.Group,
    )}
    {...props}
  />
));

ComboboxGroup.displayName = 'ComboboxGroup';

export const ComboboxGroupLabel = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.GroupLabel>
>(({ className, ...props }, ref) => (
  <BaseCombobox.GroupLabel
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.GroupLabel>(
      className,
      listboxStyles.GroupLabel,
    )}
    {...props}
  />
));

ComboboxGroupLabel.displayName = 'ComboboxGroupLabel';

export const ComboboxSeparator = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Separator>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Separator
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Separator>(
      className,
      listboxStyles.Separator,
    )}
    {...props}
  />
));

ComboboxSeparator.displayName = 'ComboboxSeparator';

export const ComboboxArrow = React.forwardRef<
  React.ElementRef<typeof BaseCombobox.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Arrow>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Arrow
    ref={ref}
    className={mergeClassName<typeof BaseCombobox.Arrow>(
      className,
      styles.Arrow,
    )}
    {...props}
  />
));

ComboboxArrow.displayName = 'ComboboxArrow';

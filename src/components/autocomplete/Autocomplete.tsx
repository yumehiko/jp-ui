import * as React from 'react';
import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete';
import { mergeClassName } from '../utils/mergeClassName';
import listboxStyles from '../listbox/Listbox.module.css';
import styles from './Autocomplete.module.css';

export const AutocompleteRoot = BaseAutocomplete.Root;
export const AutocompleteTrigger = BaseAutocomplete.Trigger;
export const AutocompleteIcon = BaseAutocomplete.Icon;
export const AutocompleteClear = BaseAutocomplete.Clear;
export const AutocompleteValue = BaseAutocomplete.Value;
export const AutocompletePortal = BaseAutocomplete.Portal;
export const AutocompleteBackdrop = BaseAutocomplete.Backdrop;
export const AutocompleteCollection = BaseAutocomplete.Collection;

type AutocompleteInputProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Input
>;

export const AutocompleteInput = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Input>,
  AutocompleteInputProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Input
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Input>(
      className,
      styles.Input,
    )}
    {...props}
  />
));

AutocompleteInput.displayName = 'AutocompleteInput';

type AutocompletePositionerProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Positioner
>;

export const AutocompletePositioner = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Positioner>,
  AutocompletePositionerProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Positioner
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Positioner>(
      className,
      listboxStyles.Positioner,
      styles.Positioner,
    )}
    {...props}
  />
));

AutocompletePositioner.displayName = 'AutocompletePositioner';

type AutocompletePopupProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Popup
>;

export const AutocompletePopup = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Popup>,
  AutocompletePopupProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Popup
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Popup>(
      className,
      listboxStyles.Popup,
      styles.Popup,
    )}
    {...props}
  />
));

AutocompletePopup.displayName = 'AutocompletePopup';

type AutocompleteListProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.List
>;

export const AutocompleteList = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.List>,
  AutocompleteListProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.List
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.List>(
      className,
      listboxStyles.List,
    )}
    {...props}
  />
));

AutocompleteList.displayName = 'AutocompleteList';

type AutocompleteRowProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Row
>;

export const AutocompleteRow = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Row>,
  AutocompleteRowProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Row
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Row>(
      className,
      styles.Row,
    )}
    {...props}
  />
));

AutocompleteRow.displayName = 'AutocompleteRow';

type AutocompleteItemProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Item
>;

export const AutocompleteItem = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Item>,
  AutocompleteItemProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Item
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Item>(
      className,
      listboxStyles.Item,
      styles.Item,
    )}
    {...props}
  />
));

AutocompleteItem.displayName = 'AutocompleteItem';

type AutocompleteStatusProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Status
>;

export const AutocompleteStatus = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Status>,
  AutocompleteStatusProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Status
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Status>(
      className,
      listboxStyles.Status,
    )}
    {...props}
  />
));

AutocompleteStatus.displayName = 'AutocompleteStatus';

type AutocompleteEmptyProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Empty
>;

export const AutocompleteEmpty = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Empty>,
  AutocompleteEmptyProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Empty
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Empty>(
      className,
      listboxStyles.Empty,
    )}
    {...props}
  />
));

AutocompleteEmpty.displayName = 'AutocompleteEmpty';

type AutocompleteGroupProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Group
>;

export const AutocompleteGroup = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Group>,
  AutocompleteGroupProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Group
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Group>(
      className,
      listboxStyles.Group,
    )}
    {...props}
  />
));

AutocompleteGroup.displayName = 'AutocompleteGroup';

type AutocompleteGroupLabelProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.GroupLabel
>;

export const AutocompleteGroupLabel = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.GroupLabel>,
  AutocompleteGroupLabelProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.GroupLabel
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.GroupLabel>(
      className,
      listboxStyles.GroupLabel,
    )}
    {...props}
  />
));

AutocompleteGroupLabel.displayName = 'AutocompleteGroupLabel';

type AutocompleteSeparatorProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Separator
>;

export const AutocompleteSeparator = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Separator>,
  AutocompleteSeparatorProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Separator
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Separator>(
      className,
      listboxStyles.Separator,
    )}
    {...props}
  />
));

AutocompleteSeparator.displayName = 'AutocompleteSeparator';

type AutocompleteArrowProps = React.ComponentPropsWithoutRef<
  typeof BaseAutocomplete.Arrow
>;

export const AutocompleteArrow = React.forwardRef<
  React.ElementRef<typeof BaseAutocomplete.Arrow>,
  AutocompleteArrowProps
>(({ className, ...props }, ref) => (
  <BaseAutocomplete.Arrow
    ref={ref}
    className={mergeClassName<typeof BaseAutocomplete.Arrow>(
      className,
      styles.Arrow,
    )}
    {...props}
  />
));

AutocompleteArrow.displayName = 'AutocompleteArrow';

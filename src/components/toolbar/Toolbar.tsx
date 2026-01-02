import * as React from 'react';
import { Toolbar as BaseToolbar } from '@base-ui/react/toolbar';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Toolbar.module.css';

export const ToolbarRoot = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Root>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Root>
>(({ className, ...props }, ref) => (
  <BaseToolbar.Root
    ref={ref}
    className={mergeClassName<typeof BaseToolbar.Root>(
      className,
      styles.Root,
    )}
    {...props}
  />
));

ToolbarRoot.displayName = 'ToolbarRoot';

export const ToolbarGroup = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Group>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Group>
>(({ className, ...props }, ref) => (
  <BaseToolbar.Group
    ref={ref}
    className={mergeClassName<typeof BaseToolbar.Group>(
      className,
      styles.Group,
    )}
    {...props}
  />
));

ToolbarGroup.displayName = 'ToolbarGroup';

type ToolbarButtonProps = React.ComponentPropsWithoutRef<typeof BaseToolbar.Button> & {
  variant?: 'icon' | 'text';
  unstyled?: boolean;
};

export const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Button>,
  ToolbarButtonProps
>(({ className, variant = 'text', unstyled = false, ...props }, ref) => {
  const baseClassName = unstyled
    ? className
    : mergeClassName<typeof BaseToolbar.Button>(
        className,
        variant === 'icon' ? styles.IconButton : styles.Button,
      );

  return <BaseToolbar.Button ref={ref} className={baseClassName} {...props} />;
});

ToolbarButton.displayName = 'ToolbarButton';

export const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Separator>
>(({ className, ...props }, ref) => (
  <BaseToolbar.Separator
    ref={ref}
    className={mergeClassName<typeof BaseToolbar.Separator>(
      className,
      styles.Separator,
    )}
    {...props}
  />
));

ToolbarSeparator.displayName = 'ToolbarSeparator';

export const ToolbarLink = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Link>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Link>
>(({ className, ...props }, ref) => (
  <BaseToolbar.Link
    ref={ref}
    className={mergeClassName<typeof BaseToolbar.Link>(className, styles.Link)}
    {...props}
  />
));

ToolbarLink.displayName = 'ToolbarLink';

export const ToolbarInput = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Input>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Input>
>(({ className, ...props }, ref) => (
  <BaseToolbar.Input
    ref={ref}
    className={mergeClassName<typeof BaseToolbar.Input>(className, styles.Button)}
    {...props}
  />
));

ToolbarInput.displayName = 'ToolbarInput';

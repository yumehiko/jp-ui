import * as React from 'react';
import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './NavigationMenu.module.css';

export const NavigationMenuRoot = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Root>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Root>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Root
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Root>(
      className,
      styles.Root,
    )}
    {...props}
  />
));

NavigationMenuRoot.displayName = 'NavigationMenuRoot';

export const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.List>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.List>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.List
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.List>(
      className,
      styles.List,
    )}
    {...props}
  />
));

NavigationMenuList.displayName = 'NavigationMenuList';

export const NavigationMenuItem = BaseNavigationMenu.Item;

export const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Trigger>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Trigger
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Trigger>(
      className,
      styles.Trigger,
    )}
    {...props}
  />
));

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Link>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Link>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Link
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Link>(
      className,
      styles.Link,
    )}
    {...props}
  />
));

NavigationMenuLink.displayName = 'NavigationMenuLink';

export const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Content>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Content>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Content
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Content>(
      className,
      styles.Content,
    )}
    {...props}
  />
));

NavigationMenuContent.displayName = 'NavigationMenuContent';

export const NavigationMenuIcon = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Icon>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Icon>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Icon
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Icon>(
      className,
      styles.Icon,
    )}
    {...props}
  />
));

NavigationMenuIcon.displayName = 'NavigationMenuIcon';

export const NavigationMenuPortal = BaseNavigationMenu.Portal;

export const NavigationMenuBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Backdrop
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Backdrop>(
      className,
      styles.Backdrop,
    )}
    {...props}
  />
));

NavigationMenuBackdrop.displayName = 'NavigationMenuBackdrop';

export const NavigationMenuPositioner = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Positioner>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Positioner
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Positioner>(
      className,
      styles.Positioner,
    )}
    {...props}
  />
));

NavigationMenuPositioner.displayName = 'NavigationMenuPositioner';

export const NavigationMenuPopup = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Popup>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Popup
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Popup>(
      className,
      styles.Popup,
    )}
    {...props}
  />
));

NavigationMenuPopup.displayName = 'NavigationMenuPopup';

export const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Viewport>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Viewport>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Viewport
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Viewport>(
      className,
      styles.Viewport,
    )}
    {...props}
  />
));

NavigationMenuViewport.displayName = 'NavigationMenuViewport';

export const NavigationMenuArrow = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Arrow>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Arrow
    ref={ref}
    className={mergeClassName<typeof BaseNavigationMenu.Arrow>(
      className,
      styles.Arrow,
    )}
    {...props}
  />
));

NavigationMenuArrow.displayName = 'NavigationMenuArrow';

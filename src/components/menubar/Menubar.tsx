import * as React from 'react';
import { Menubar as BaseMenubar } from '@base-ui/react/menubar';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Menubar.module.css';

export const Menubar = React.forwardRef<
  React.ElementRef<typeof BaseMenubar>,
  React.ComponentPropsWithoutRef<typeof BaseMenubar>
>(({ className, ...props }, ref) => (
  <BaseMenubar
    ref={ref}
    className={mergeClassName<typeof BaseMenubar>(className, styles.Menubar)}
    {...props}
  />
));

Menubar.displayName = 'Menubar';

export const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Trigger>
>(({ className, ...props }, ref) => (
  <BaseMenu.Trigger
    ref={ref}
    className={mergeClassName<typeof BaseMenu.Trigger>(className, styles.Trigger)}
    {...props}
  />
));

MenubarTrigger.displayName = 'MenubarTrigger';

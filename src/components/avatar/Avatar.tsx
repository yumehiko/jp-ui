import * as React from 'react';
import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Avatar.module.css';

export const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof BaseAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Root>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Root
    ref={ref}
    className={mergeClassName<typeof BaseAvatar.Root>(className, styles.Root)}
    {...props}
  />
));

AvatarRoot.displayName = 'AvatarRoot';

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof BaseAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Image>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Image
    ref={ref}
    className={mergeClassName<typeof BaseAvatar.Image>(className, styles.Image)}
    {...props}
  />
));

AvatarImage.displayName = 'AvatarImage';

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof BaseAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Fallback
    ref={ref}
    className={mergeClassName<typeof BaseAvatar.Fallback>(
      className,
      styles.Fallback,
    )}
    {...props}
  />
));

AvatarFallback.displayName = 'AvatarFallback';

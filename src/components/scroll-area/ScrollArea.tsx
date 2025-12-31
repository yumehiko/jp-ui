import * as React from 'react';
import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './ScrollArea.module.css';

type ScrollAreaRootProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Root
>;

export const ScrollAreaRoot = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Root>,
  ScrollAreaRootProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Root
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Root>(
      className,
      styles.Root,
    )}
    {...props}
  />
));

ScrollAreaRoot.displayName = 'ScrollAreaRoot';

type ScrollAreaViewportProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Viewport
>;

export const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Viewport>,
  ScrollAreaViewportProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Viewport
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Viewport>(
      className,
      styles.Viewport,
    )}
    {...props}
  />
));

ScrollAreaViewport.displayName = 'ScrollAreaViewport';

type ScrollAreaContentProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Content
>;

export const ScrollAreaContent = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Content>,
  ScrollAreaContentProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Content
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Content>(
      className,
      styles.Content,
    )}
    {...props}
  />
));

ScrollAreaContent.displayName = 'ScrollAreaContent';

type ScrollAreaScrollbarProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Scrollbar
>;

export const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Scrollbar>,
  ScrollAreaScrollbarProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Scrollbar
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Scrollbar>(
      className,
      styles.Scrollbar,
    )}
    {...props}
  />
));

ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';

type ScrollAreaThumbProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Thumb
>;

export const ScrollAreaThumb = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Thumb>,
  ScrollAreaThumbProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Thumb
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Thumb>(
      className,
      styles.Thumb,
    )}
    {...props}
  />
));

ScrollAreaThumb.displayName = 'ScrollAreaThumb';

type ScrollAreaCornerProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Corner
>;

export const ScrollAreaCorner = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Corner>,
  ScrollAreaCornerProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Corner
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Corner>(
      className,
      styles.Corner,
    )}
    {...props}
  />
));

ScrollAreaCorner.displayName = 'ScrollAreaCorner';

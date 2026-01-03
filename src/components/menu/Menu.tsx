import * as React from 'react';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { mergeProps } from '@base-ui/react/merge-props';
import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import { useRender } from '@base-ui/react/use-render';
import { MenuSizeContext, useMenuSize, type MenuSize } from './MenuSizeContext';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Menu.module.css';

type MenuRootProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Root> & {
  size?: MenuSize;
};

export function MenuRoot({ size = 'large', ...props }: MenuRootProps) {
  return (
    <MenuSizeContext.Provider value={size}>
      <BaseMenu.Root {...props} />
    </MenuSizeContext.Provider>
  );
}

export const MenuTrigger = BaseMenu.Trigger;
export const MenuPortal = BaseMenu.Portal;

type MenuBackdropProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Backdrop>;

export const MenuBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Backdrop>,
  MenuBackdropProps
>(({ className, ...props }, ref) => (
  <BaseMenu.Backdrop
    ref={ref}
    className={mergeClassName<typeof BaseMenu.Backdrop>(
      className,
      styles.Backdrop,
    )}
    {...props}
  />
));

MenuBackdrop.displayName = 'MenuBackdrop';

type MenuPositionerProps = React.ComponentPropsWithoutRef<
  typeof BaseMenu.Positioner
>;

export const MenuPositioner = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Positioner>,
  MenuPositionerProps
>(({ className, ...props }, ref) => (
  <BaseMenu.Positioner
    ref={ref}
    className={mergeClassName<typeof BaseMenu.Positioner>(
      className,
      styles.Positioner,
    )}
    {...props}
  />
));

MenuPositioner.displayName = 'MenuPositioner';

type MenuPopupProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Popup>;

export const MenuPopup = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Popup>,
  MenuPopupProps
>(({ className, ...props }, ref) => {
  const size = useMenuSize();
  const dataSize = (props as { 'data-size'?: MenuSize })['data-size'] ?? size;
  return (
    <BaseMenu.Popup
      ref={ref}
      data-size={dataSize}
      className={mergeClassName<typeof BaseMenu.Popup>(className, styles.Popup)}
      {...props}
    />
  );
});

MenuPopup.displayName = 'MenuPopup';

type MenuContentProps = useRender.ComponentProps<'div'>;

export function MenuContent({ render, ...props }: MenuContentProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Content }, props),
  });

  return element;
}

type MenuArrowProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Arrow>;

export const MenuArrow = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Arrow>,
  MenuArrowProps
>(({ className, ...props }, ref) => (
  <BaseMenu.Arrow
    ref={ref}
    className={mergeClassName<typeof BaseMenu.Arrow>(className, styles.Arrow)}
    {...props}
  />
));

MenuArrow.displayName = 'MenuArrow';

type MenuItemProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Item>;

export const MenuItem = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Item>,
  MenuItemProps
>(({ className, ...props }, ref) => {
  const size = useMenuSize();
  const dataSize = (props as { 'data-size'?: MenuSize })['data-size'] ?? size;
  return (
    <BaseMenu.Item
      ref={ref}
      data-size={dataSize}
      className={mergeClassName<typeof BaseMenu.Item>(className, styles.Item)}
      {...props}
    />
  );
});

MenuItem.displayName = 'MenuItem';

type MenuSeparatorProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Separator>;

export const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Separator>,
  MenuSeparatorProps
>(({ className, ...props }, ref) => (
  <BaseMenu.Separator
    ref={ref}
    className={mergeClassName<typeof BaseMenu.Separator>(
      className,
      styles.Separator,
    )}
    {...props}
  />
));

MenuSeparator.displayName = 'MenuSeparator';

type MenuGroupProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Group>;

export const MenuGroup = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Group>,
  MenuGroupProps
>(({ className, ...props }, ref) => (
  <BaseMenu.Group
    ref={ref}
    className={mergeClassName<typeof BaseMenu.Group>(className, styles.Group)}
    {...props}
  />
));

MenuGroup.displayName = 'MenuGroup';

type MenuGroupLabelProps = React.ComponentPropsWithoutRef<
  typeof BaseMenu.GroupLabel
>;

export const MenuGroupLabel = React.forwardRef<
  React.ElementRef<typeof BaseMenu.GroupLabel>,
  MenuGroupLabelProps
>(({ className, ...props }, ref) => {
  const size = useMenuSize();
  const dataSize = (props as { 'data-size'?: MenuSize })['data-size'] ?? size;
  return (
    <BaseMenu.GroupLabel
      ref={ref}
      data-size={dataSize}
      className={mergeClassName<typeof BaseMenu.GroupLabel>(
        className,
        styles.GroupLabel,
      )}
      {...props}
    />
  );
});

MenuGroupLabel.displayName = 'MenuGroupLabel';

type MenuRadioGroupProps = React.ComponentPropsWithoutRef<typeof BaseMenu.RadioGroup>;

export const MenuRadioGroup = React.forwardRef<
  React.ElementRef<typeof BaseMenu.RadioGroup>,
  MenuRadioGroupProps
>(({ className, ...props }, ref) => (
  <BaseMenu.RadioGroup
    ref={ref}
    className={mergeClassName<typeof BaseMenu.RadioGroup>(
      className,
      styles.RadioGroup,
    )}
    {...props}
  />
));

MenuRadioGroup.displayName = 'MenuRadioGroup';

type MenuRadioItemProps = React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItem>;

export const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof BaseMenu.RadioItem>,
  MenuRadioItemProps
>(({ className, ...props }, ref) => {
  const size = useMenuSize();
  const dataSize = (props as { 'data-size'?: MenuSize })['data-size'] ?? size;
  return (
    <BaseMenu.RadioItem
      ref={ref}
      data-size={dataSize}
      className={mergeClassName<typeof BaseMenu.RadioItem>(
        className,
        styles.OptionItem,
      )}
      {...props}
    />
  );
});

MenuRadioItem.displayName = 'MenuRadioItem';

type MenuRadioItemIndicatorProps = React.ComponentPropsWithoutRef<
  typeof BaseMenu.RadioItemIndicator
>;

export const MenuRadioItemIndicator = React.forwardRef<
  React.ElementRef<typeof BaseMenu.RadioItemIndicator>,
  MenuRadioItemIndicatorProps
>(({ className, keepMounted = true, ...props }, ref) => {
  const size = useMenuSize();
  const dataSize = (props as { 'data-size'?: MenuSize })['data-size'] ?? size;
  return (
    <BaseMenu.RadioItemIndicator
      ref={ref}
      keepMounted={keepMounted}
      data-size={dataSize}
      className={mergeClassName<typeof BaseMenu.RadioItemIndicator>(
        className,
        styles.OptionIndicator,
      )}
      {...props}
    />
  );
});

MenuRadioItemIndicator.displayName = 'MenuRadioItemIndicator';

type MenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof BaseMenu.CheckboxItem
>;

export const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof BaseMenu.CheckboxItem>,
  MenuCheckboxItemProps
>(({ className, ...props }, ref) => {
  const size = useMenuSize();
  const dataSize = (props as { 'data-size'?: MenuSize })['data-size'] ?? size;
  return (
    <BaseMenu.CheckboxItem
      ref={ref}
      data-size={dataSize}
      className={mergeClassName<typeof BaseMenu.CheckboxItem>(
        className,
        styles.OptionItem,
      )}
      {...props}
    />
  );
});

MenuCheckboxItem.displayName = 'MenuCheckboxItem';

type MenuCheckboxItemIndicatorProps = React.ComponentPropsWithoutRef<
  typeof BaseMenu.CheckboxItemIndicator
>;

export const MenuCheckboxItemIndicator = React.forwardRef<
  React.ElementRef<typeof BaseMenu.CheckboxItemIndicator>,
  MenuCheckboxItemIndicatorProps
>(({ className, keepMounted = true, ...props }, ref) => {
  const size = useMenuSize();
  const dataSize = (props as { 'data-size'?: MenuSize })['data-size'] ?? size;
  return (
    <BaseMenu.CheckboxItemIndicator
      ref={ref}
      keepMounted={keepMounted}
      data-size={dataSize}
      className={mergeClassName<typeof BaseMenu.CheckboxItemIndicator>(
        className,
        styles.OptionIndicator,
      )}
      {...props}
    />
  );
});

MenuCheckboxItemIndicator.displayName = 'MenuCheckboxItemIndicator';

export const MenuSubmenuRoot = BaseMenu.SubmenuRoot;

type MenuSubmenuTriggerProps = React.ComponentPropsWithoutRef<
  typeof BaseMenu.SubmenuTrigger
>;

export const MenuSubmenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseMenu.SubmenuTrigger>,
  MenuSubmenuTriggerProps
>(({ className, ...props }, ref) => {
  const size = useMenuSize();
  const dataSize = (props as { 'data-size'?: MenuSize })['data-size'] ?? size;
  return (
    <BaseMenu.SubmenuTrigger
      ref={ref}
      data-size={dataSize}
      className={mergeClassName<typeof BaseMenu.SubmenuTrigger>(
        className,
        styles.SubmenuTrigger,
      )}
      {...props}
    />
  );
});

MenuSubmenuTrigger.displayName = 'MenuSubmenuTrigger';

type MenuScrollAreaRootProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Root
>;

export const MenuScrollAreaRoot = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Root>,
  MenuScrollAreaRootProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Root
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Root>(
      className,
      styles.ScrollAreaRoot,
    )}
    {...props}
  />
));

MenuScrollAreaRoot.displayName = 'MenuScrollAreaRoot';

type MenuScrollAreaViewportProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Viewport
>;

export const MenuScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Viewport>,
  MenuScrollAreaViewportProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Viewport
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Viewport>(
      className,
      styles.ScrollAreaViewport,
    )}
    {...props}
  />
));

MenuScrollAreaViewport.displayName = 'MenuScrollAreaViewport';

type MenuScrollAreaContentProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Content
>;

export const MenuScrollAreaContent = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Content>,
  MenuScrollAreaContentProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Content
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Content>(
      className,
      styles.ScrollAreaContent,
    )}
    {...props}
  />
));

MenuScrollAreaContent.displayName = 'MenuScrollAreaContent';

type MenuScrollAreaScrollbarProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Scrollbar
>;

export const MenuScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Scrollbar>,
  MenuScrollAreaScrollbarProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Scrollbar
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Scrollbar>(
      className,
      styles.ScrollAreaScrollbar,
    )}
    {...props}
  />
));

MenuScrollAreaScrollbar.displayName = 'MenuScrollAreaScrollbar';

type MenuScrollAreaThumbProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Thumb
>;

export const MenuScrollAreaThumb = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Thumb>,
  MenuScrollAreaThumbProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Thumb
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Thumb>(
      className,
      styles.ScrollAreaThumb,
    )}
    {...props}
  />
));

MenuScrollAreaThumb.displayName = 'MenuScrollAreaThumb';

type MenuScrollAreaCornerProps = React.ComponentPropsWithoutRef<
  typeof BaseScrollArea.Corner
>;

export const MenuScrollAreaCorner = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Corner>,
  MenuScrollAreaCornerProps
>(({ className, ...props }, ref) => (
  <BaseScrollArea.Corner
    ref={ref}
    className={mergeClassName<typeof BaseScrollArea.Corner>(
      className,
      styles.ScrollAreaCorner,
    )}
    {...props}
  />
));

MenuScrollAreaCorner.displayName = 'MenuScrollAreaCorner';

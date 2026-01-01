import * as React from 'react';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Tabs.module.css';

export const TabsRoot = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Root>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Root>
>(({ className, ...props }, ref) => (
  <BaseTabs.Root
    ref={ref}
    className={mergeClassName<typeof BaseTabs.Root>(
      className,
      styles.TabsRoot,
    )}
    {...props}
  />
));

TabsRoot.displayName = 'TabsRoot';

export const TabsList = React.forwardRef<
  React.ElementRef<typeof BaseTabs.List>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.List>
>(({ className, ...props }, ref) => (
  <BaseTabs.List
    ref={ref}
    className={mergeClassName<typeof BaseTabs.List>(className, styles.List)}
    {...props}
  />
));

TabsList.displayName = 'TabsList';

type TabsTabProps = React.ComponentPropsWithoutRef<typeof BaseTabs.Tab> & {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  showIcon?: boolean;
  size?: 'large' | 'small';
};

export const TabsTab = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Tab>,
  TabsTabProps
>(
  (
    {
      className,
      icon,
      label,
      showIcon = true,
      size = 'large',
      children,
      ...props
    },
    ref,
  ) => {
    const content =
      children ?? (
        <>
          {showIcon && icon ? (
            <span aria-hidden="true" className={styles.TabIcon}>
              {icon}
            </span>
          ) : null}
          {label ? <span className={styles.TabLabel}>{label}</span> : null}
        </>
      );
    const wrappedContent = children ? content : <span className={styles.TabContent}>{content}</span>;

    return (
      <BaseTabs.Tab
        ref={ref}
        className={mergeClassName<typeof BaseTabs.Tab>(className, styles.Tab)}
        data-size={size}
        {...props}
      >
        {wrappedContent}
      </BaseTabs.Tab>
    );
  },
);

TabsTab.displayName = 'TabsTab';

export const TabsIndicator = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Indicator>
>(({ className, ...props }, ref) => (
  <BaseTabs.Indicator
    ref={ref}
    className={mergeClassName<typeof BaseTabs.Indicator>(
      className,
      styles.Indicator,
    )}
    {...props}
  />
));

TabsIndicator.displayName = 'TabsIndicator';

export const TabsPanel = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => (
  <BaseTabs.Panel
    ref={ref}
    className={mergeClassName<typeof BaseTabs.Panel>(className, styles.Panel)}
    {...props}
  />
));

TabsPanel.displayName = 'TabsPanel';

import * as React from 'react';
import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { Icon } from '../../assets/icons/Icon';
import { Button } from '../button/Button';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Collapsible.module.css';

type CollapsibleRootProps = React.ComponentPropsWithoutRef<
  typeof BaseCollapsible.Root
>;

export const CollapsibleRoot = React.forwardRef<
  React.ElementRef<typeof BaseCollapsible.Root>,
  CollapsibleRootProps
>(({ className, ...props }, ref) => (
  <BaseCollapsible.Root
    ref={ref}
    className={mergeClassName<typeof BaseCollapsible.Root>(
      className,
      styles.Root,
    )}
    {...props}
  />
));

CollapsibleRoot.displayName = 'CollapsibleRoot';

type ButtonVariant = React.ComponentProps<typeof Button>['variant'];
type ButtonSize = React.ComponentProps<typeof Button>['size'];

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<
  typeof BaseCollapsible.Trigger
> & {
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof BaseCollapsible.Trigger>,
  CollapsibleTriggerProps
>(
  (
    {
      className,
      icon,
      variant = 'tonal',
      size = 'large',
      render,
      children,
      ...props
    },
    ref,
  ) => {
    const triggerIcon = icon ?? <Icon name="chevron-right" size={24} />;
    const content = (
      <>
        <span aria-hidden="true" className={styles.TriggerIcon}>
          {triggerIcon}
        </span>
        <span>{children}</span>
      </>
    );

    const defaultRender = (triggerProps: React.ComponentProps<'button'>) => (
      <Button
        {...triggerProps}
        variant={variant}
        size={size}
        className={mergeClassName<typeof Button>(
          triggerProps.className,
          styles.Trigger,
        )}
      >
        {content}
      </Button>
    );

    return (
      <BaseCollapsible.Trigger
        ref={ref}
        className={className}
        render={render ?? defaultRender}
        {...props}
      >
        {children}
      </BaseCollapsible.Trigger>
    );
  },
);

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

type CollapsiblePanelProps = React.ComponentPropsWithoutRef<
  typeof BaseCollapsible.Panel
>;

export const CollapsiblePanel = React.forwardRef<
  React.ElementRef<typeof BaseCollapsible.Panel>,
  CollapsiblePanelProps
>(({ className, ...props }, ref) => (
  <BaseCollapsible.Panel
    ref={ref}
    className={mergeClassName<typeof BaseCollapsible.Panel>(
      className,
      styles.Panel,
    )}
    {...props}
  />
));

CollapsiblePanel.displayName = 'CollapsiblePanel';

type CollapsibleContentProps = useRender.ComponentProps<'div'>;

export function CollapsibleContent({ render, ...props }: CollapsibleContentProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Content }, props),
  });

  return element;
}

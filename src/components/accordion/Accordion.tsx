import * as React from 'react';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { Icon } from '../../assets/icons/Icon';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Accordion.module.css';

export const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof BaseAccordion.Root>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Root>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Root
    ref={ref}
    className={mergeClassName<typeof BaseAccordion.Root>(
      className,
      styles.Root,
    )}
    {...props}
  />
));

AccordionRoot.displayName = 'AccordionRoot';

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof BaseAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Item
    ref={ref}
    className={mergeClassName<typeof BaseAccordion.Item>(
      className,
      styles.Item,
    )}
    {...props}
  />
));

AccordionItem.displayName = 'AccordionItem';

export const AccordionHeader = React.forwardRef<
  React.ElementRef<typeof BaseAccordion.Header>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Header>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Header
    ref={ref}
    className={mergeClassName<typeof BaseAccordion.Header>(
      className,
      styles.Header,
    )}
    {...props}
  />
));

AccordionHeader.displayName = 'AccordionHeader';

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof BaseAccordion.Trigger
> & {
  iconClosed?: React.ReactNode;
  iconOpen?: React.ReactNode;
};

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof BaseAccordion.Trigger>,
  AccordionTriggerProps
>(
  (
    {
      className,
      children,
      iconClosed = <Icon name="plus" size={24} />,
      iconOpen = <Icon name="x" size={24} />,
      ...props
    },
    ref,
  ) => (
    <BaseAccordion.Trigger
      ref={ref}
      className={mergeClassName<typeof BaseAccordion.Trigger>(
        className,
        styles.Trigger,
      )}
      {...props}
    >
      <span className={styles.TriggerLabel}>{children}</span>
      <span className={[styles.TriggerIcon, styles.TriggerIconClosed].join(' ')}>
        {iconClosed}
      </span>
      <span className={[styles.TriggerIcon, styles.TriggerIconOpen].join(' ')}>
        {iconOpen}
      </span>
    </BaseAccordion.Trigger>
  ),
);

AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionPanel = React.forwardRef<
  React.ElementRef<typeof BaseAccordion.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Panel
    ref={ref}
    className={mergeClassName<typeof BaseAccordion.Panel>(
      className,
      styles.Panel,
    )}
    {...props}
  />
));

AccordionPanel.displayName = 'AccordionPanel';

type AccordionContentProps = useRender.ComponentProps<'div'>;

export function AccordionContent({ render, ...props }: AccordionContentProps) {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Content }, props),
  });

  return element;
}

import * as React from 'react';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import styles from './Radio.module.css';

type RadioProps = Omit<React.ComponentPropsWithoutRef<typeof BaseRadio.Root>, 'children'>;

type RadioElement = React.ElementRef<typeof BaseRadio.Root>;

export const Radio = React.forwardRef<RadioElement, RadioProps>(
  ({ className, ...props }, ref) => {
    const mergedClassName =
      typeof className === 'function'
        ? (state: Parameters<typeof className>[0]) =>
            [styles.Radio, className(state)].filter(Boolean).join(' ')
        : [styles.Radio, className].filter(Boolean).join(' ');

    return (
      <BaseRadio.Root ref={ref} className={mergedClassName} {...props}>
        <span aria-hidden="true" className={styles.Base} />
        <span aria-hidden="true" className={styles.StateLayer} />
        <BaseRadio.Indicator className={styles.Indicator} keepMounted>
          <span aria-hidden="true" className={styles.Dot} />
        </BaseRadio.Indicator>
      </BaseRadio.Root>
    );
  },
);

Radio.displayName = 'Radio';

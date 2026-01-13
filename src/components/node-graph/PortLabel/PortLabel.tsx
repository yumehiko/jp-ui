import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import { Icon } from '../../../assets/icons/Icon';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './PortLabel.module.css';

export type PortLabelState = 'enabled' | 'hovered' | 'pressed' | 'focused';
export type PortLabelDirection = 'input' | 'output';

export type PortLabelProps = {
  portName?: string;
  state?: PortLabelState;
  direction?: PortLabelDirection;
  /**
   * 注意: caret アイコンは hover/focus 時にのみ表示されます。
   * クリック可能領域はボタン全体です。
   */
} & useRender.ComponentProps<'button'>;

export function PortLabel({
  portName = 'Port Name',
  state = 'enabled',
  direction = 'output',
  type = 'button',
  render,
  ...rest
}: PortLabelProps) {
  const isStaticState = state !== 'enabled';
  const isOutput = direction === 'output';

  const children = isOutput ? (
    <>
      <span className={styles.icon} aria-hidden>
        <Icon icon={IconChevronDown} size={24} />
      </span>
      <span className={styles.label}>{portName}</span>
    </>
  ) : (
    <>
      <span className={styles.label}>{portName}</span>
      <span className={styles.icon} aria-hidden>
        <Icon icon={IconChevronDown} size={24} />
      </span>
    </>
  );

  const dataAttributes = {
    'data-state': state,
    'data-static-state': isStaticState ? 'true' : undefined,
    'data-direction': direction,
  } as Record<string, string | undefined>;

  const element = useRender({
    defaultTagName: 'button',
    render,
    props: mergeProps<'button'>(
      {
        className: styles.root,
        type,
        children,
        ...dataAttributes,
      },
      rest,
    ),
  });

  return element;
}

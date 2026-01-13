import type { CSSProperties } from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import styles from './MarqueeSelection.module.css';

export type MarqueeRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type MarqueeSelectionProps = {
  rect: MarqueeRect;
  visible?: boolean;
} & useRender.ComponentProps<'div'>;

export function MarqueeSelection({
  rect,
  visible = true,
  render,
  ...rest
}: MarqueeSelectionProps) {
  const { style } = rest;
  const mergedStyle: CSSProperties = {
    left: rect.x,
    top: rect.y,
    width: rect.width,
    height: rect.height,
    ...style,
  };

  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.root, style: mergedStyle }, rest),
  });

  if (!visible) return null;

  return element;
}

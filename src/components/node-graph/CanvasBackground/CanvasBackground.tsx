import type { CSSProperties } from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import styles from './CanvasBackground.module.css';

export type CanvasBackgroundProps = {
  /** 拡大縮小スケール。パターンの間隔とドット径に反映される */
  scale?: number;
  /** パン追従用の背景オフセット（CSS px）。 */
  offsetX?: number;
  /** パン追従用の背景オフセット（CSS px）。 */
  offsetY?: number;
} & useRender.ComponentProps<'div'>;

export const CANVAS_DOT_SPACING = 64;
export const CANVAS_TILE_SIZE = CANVAS_DOT_SPACING;
export const CANVAS_DOT_OFFSET = CANVAS_DOT_SPACING / 2;
export const CANVAS_DOT_RADIUS = 2;
const DOT_RADIUS_MIN = 1;

const canvasPatternStyle = (scale: number, offsetX?: number, offsetY?: number): CSSProperties => {
  const radius = Math.max(DOT_RADIUS_MIN, CANVAS_DOT_RADIUS * scale);
  const offset = CANVAS_DOT_OFFSET * scale;
  const size = CANVAS_TILE_SIZE * scale;
  return {
    backgroundColor: 'var(--surface)',
    backgroundImage: `radial-gradient(circle ${radius}px at ${offset}px ${offset}px, var(--outline-variant) 0, var(--outline-variant) 100%, transparent 100%)`,
    backgroundRepeat: 'repeat',
    backgroundSize: `${size}px ${size}px`,
    backgroundPosition:
      offsetX !== undefined || offsetY !== undefined ? `${offsetX ?? 0}px ${offsetY ?? 0}px` : undefined,
  };
};

export function CanvasBackground({
  render,
  scale = 1,
  offsetX,
  offsetY,
  ...rest
}: CanvasBackgroundProps) {
  const { children, style } = rest;
  const mergedStyle: CSSProperties = {
    ...canvasPatternStyle(scale, offsetX, offsetY),
    ...style,
  };
  const content = children ? <div className={styles.content}>{children}</div> : null;
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.root, style: mergedStyle }, { ...rest, children: content }),
  });

  return element;
}

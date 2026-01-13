import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import { mergeClassName } from '../../utils/mergeClassName';
import { CanvasBackground, type CanvasBackgroundProps } from '../CanvasBackground';
import {
  useCanvasViewport,
  type CanvasViewportOptions,
  type CanvasViewportOffset,
} from './useCanvasViewport';
import styles from './CanvasViewport.module.css';

type CanvasViewportProps = CanvasViewportOptions &
  useRender.ComponentProps<'div'> & {
    rootRef?: React.Ref<HTMLDivElement>;
    contentClassName?: string;
    contentProps?: React.ComponentPropsWithoutRef<'div'>;
    backgroundProps?: Omit<CanvasBackgroundProps, 'scale' | 'offsetX' | 'offsetY'>;
  };

const setRef = <T,>(ref: React.Ref<T> | undefined, value: T | null) => {
  if (!ref) return;
  if (typeof ref === 'function') {
    ref(value);
    return;
  }
  (ref as React.MutableRefObject<T | null>).current = value;
};

export function CanvasViewport({
  scale,
  offset,
  defaultScale,
  defaultOffset,
  minScale,
  maxScale,
  zoomSpeed,
  panSpeed,
  enableZoom,
  enablePan,
  onScaleChange,
  onOffsetChange,
  render,
  rootRef,
  className,
  children,
  contentClassName,
  contentProps,
  backgroundProps,
  ...rootProps
}: CanvasViewportProps) {
  const { ref, scale: resolvedScale, offset: resolvedOffset, contentStyle } =
    useCanvasViewport({
      scale,
      offset,
      defaultScale,
      defaultOffset,
      minScale,
      maxScale,
      zoomSpeed,
      panSpeed,
      enableZoom,
      enablePan,
      onScaleChange,
      onOffsetChange,
    });
  const mergedContentStyle = {
    ...(contentProps?.style ?? {}),
    ...contentStyle,
  } as React.CSSProperties;
  const handleRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      setRef(ref, node);
      setRef(rootRef, node);
    },
    [ref, rootRef],
  );

  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>(
      {
        ref: handleRef,
        className: mergeClassName(className, styles.root),
        children: (
          <CanvasBackground
            scale={resolvedScale}
            offsetX={resolvedOffset.x}
            offsetY={resolvedOffset.y}
            {...backgroundProps}
          >
            <div
              {...contentProps}
              className={mergeClassName(
                contentProps?.className,
                contentClassName,
                styles.content,
              )}
              style={mergedContentStyle}
            >
              {children}
            </div>
          </CanvasBackground>
        ),
      },
      rootProps,
    ),
  });

  return element;
}

export type { CanvasViewportOffset, CanvasViewportOptions };

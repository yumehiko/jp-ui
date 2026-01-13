import * as React from 'react';

import type { MarqueeRect } from '../MarqueeSelection';

export type MarqueeItem = {
  id: string;
  ref: React.RefObject<HTMLElement | null>;
};

export type MarqueeSelectionOptions = {
  stageRef: React.RefObject<HTMLElement | null>;
  items: MarqueeItem[];
  minDragDistance?: number;
  scale?: number;
  offset?: { x: number; y: number };
  onSelectionChange?: (
    ids: string[],
    options: { additive: boolean; rect: MarqueeRect },
  ) => void;
};

export function useMarqueeSelection({
  stageRef,
  items,
  minDragDistance = 4,
  scale = 1,
  offset = { x: 0, y: 0 },
  onSelectionChange,
}: MarqueeSelectionOptions) {
  const [rect, setRect] = React.useState<MarqueeRect>({ x: 0, y: 0, width: 0, height: 0 });
  const [visible, setVisible] = React.useState(false);
  const originRef = React.useRef<{ x: number; y: number } | null>(null);
  const additiveRef = React.useRef(false);
  const scaleRef = React.useRef(scale);
  const offsetRef = React.useRef(offset);

  React.useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  React.useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  const clear = React.useCallback(() => {
    originRef.current = null;
    setVisible(false);
    setRect({ x: 0, y: 0, width: 0, height: 0 });
  }, []);

  const getStagePoint = React.useCallback(
    (event: PointerEvent | React.PointerEvent) => {
      const stage = stageRef.current;
      if (!stage) {
        return { x: event.clientX, y: event.clientY };
      }
      const rect = stage.getBoundingClientRect();
      const currentScale = scaleRef.current || 1;
      const currentOffset = offsetRef.current;
      return {
        x: (event.clientX - rect.left - currentOffset.x) / currentScale,
        y: (event.clientY - rect.top - currentOffset.y) / currentScale,
      };
    },
    [stageRef],
  );

  const getStageProps = React.useCallback(
    () => ({
      onPointerDown: (event: React.PointerEvent) => {
        if (event.button !== 0) return;
        const isMarqueeModifier = event.shiftKey || event.metaKey || event.ctrlKey;
        if (!isMarqueeModifier) return;
        event.preventDefault();

        additiveRef.current = true;
        const start = getStagePoint(event);
        originRef.current = start;
        setVisible(true);
        setRect({ x: start.x, y: start.y, width: 0, height: 0 });

        const handleMove = (moveEvent: PointerEvent) => {
          if (!originRef.current) return;
          const current = getStagePoint(moveEvent);
          const x = Math.min(originRef.current.x, current.x);
          const y = Math.min(originRef.current.y, current.y);
          const width = Math.abs(current.x - originRef.current.x);
          const height = Math.abs(current.y - originRef.current.y);
          setRect({ x, y, width, height });
        };

        const handleUp = (upEvent: PointerEvent) => {
          const start = originRef.current;
          if (!start) return;
          const end = getStagePoint(upEvent);
          const width = Math.abs(end.x - start.x);
          const height = Math.abs(end.y - start.y);
          const stage = stageRef.current;
          if (!stage) {
            clear();
            return;
          }
          const stageRect = stage.getBoundingClientRect();
          const currentScale = scaleRef.current || 1;
          const currentOffset = offsetRef.current;
          const finalRect: MarqueeRect = {
            x: Math.min(start.x, end.x),
            y: Math.min(start.y, end.y),
            width,
            height,
          };

          if (width < minDragDistance && height < minDragDistance) {
            onSelectionChange?.([], { additive: false, rect: finalRect });
            clear();
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerup', handleUp);
            return;
          }

          const selected = items
            .map((item) => {
              const element = item.ref.current;
              if (!element) return null;
              const rect = element.getBoundingClientRect();
              const localRect: MarqueeRect = {
                x: (rect.left - stageRect.left - currentOffset.x) / currentScale,
                y: (rect.top - stageRect.top - currentOffset.y) / currentScale,
                width: rect.width / currentScale,
                height: rect.height / currentScale,
              };
              const intersects = !(
                localRect.x + localRect.width < finalRect.x ||
                localRect.y + localRect.height < finalRect.y ||
                localRect.x > finalRect.x + finalRect.width ||
                localRect.y > finalRect.y + finalRect.height
              );
              return intersects ? item.id : null;
            })
            .filter((id): id is string => id !== null);

          onSelectionChange?.(selected, { additive: additiveRef.current, rect: finalRect });
          clear();
          window.removeEventListener('pointermove', handleMove);
          window.removeEventListener('pointerup', handleUp);
        };

        window.addEventListener('pointermove', handleMove);
        window.addEventListener('pointerup', handleUp);
      },
    }),
    [clear, getStagePoint, items, minDragDistance, onSelectionChange, stageRef],
  );

  return {
    rect,
    visible,
    clear,
    getStageProps,
  };
}

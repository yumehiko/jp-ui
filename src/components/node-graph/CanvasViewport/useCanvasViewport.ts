import * as React from 'react';

export type CanvasViewportOffset = {
  x: number;
  y: number;
};

export type CanvasViewportOptions = {
  scale?: number;
  offset?: CanvasViewportOffset;
  defaultScale?: number;
  defaultOffset?: CanvasViewportOffset;
  minScale?: number;
  maxScale?: number;
  zoomSpeed?: number;
  panSpeed?: number;
  enableZoom?: boolean;
  enablePan?: boolean;
  onScaleChange?: (scale: number) => void;
  onOffsetChange?: (offset: CanvasViewportOffset) => void;
};

type CanvasViewportState = {
  scale: number;
  offset: CanvasViewportOffset;
};

type UpdateValue<T> = T | ((previous: T) => T);

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function useCanvasViewport({
  scale,
  offset,
  defaultScale = 1,
  defaultOffset = { x: 0, y: 0 },
  minScale = 0.5,
  maxScale = 1,
  zoomSpeed = 0.001,
  panSpeed = 1,
  enableZoom = true,
  enablePan = true,
  onScaleChange,
  onOffsetChange,
}: CanvasViewportOptions = {}) {
  const isControlledScale = scale !== undefined;
  const isControlledOffset = offset !== undefined;
  const [internalScale, setInternalScale] = React.useState(defaultScale);
  const [internalOffset, setInternalOffset] = React.useState(defaultOffset);
  const resolvedScale = isControlledScale ? scale : internalScale;
  const resolvedOffset = isControlledOffset ? offset : internalOffset;

  const scaleRef = React.useRef(resolvedScale);
  const offsetRef = React.useRef(resolvedOffset);
  const viewportRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scaleRef.current = resolvedScale;
  }, [resolvedScale]);

  React.useEffect(() => {
    offsetRef.current = resolvedOffset;
  }, [resolvedOffset]);

  const updateScale = React.useCallback(
    (next: UpdateValue<number>) => {
      const resolved = typeof next === 'function' ? next(scaleRef.current) : next;
      const clamped = clamp(resolved, minScale, maxScale);
      if (!isControlledScale) {
        setInternalScale(clamped);
      }
      onScaleChange?.(clamped);
    },
    [isControlledScale, maxScale, minScale, onScaleChange],
  );

  const updateOffset = React.useCallback(
    (next: UpdateValue<CanvasViewportOffset>) => {
      const resolved = typeof next === 'function' ? next(offsetRef.current) : next;
      if (!isControlledOffset) {
        setInternalOffset(resolved);
      }
      onOffsetChange?.(resolved);
    },
    [isControlledOffset, onOffsetChange],
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const target = viewportRef.current;
    if (!target) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      if (!enablePan && !enableZoom) {
        return;
      }

      const shouldZoom = enableZoom && (event.ctrlKey || event.metaKey);

      if (shouldZoom) {
        event.preventDefault();
        const nextScale = clamp(
          scaleRef.current - event.deltaY * zoomSpeed,
          minScale,
          maxScale,
        );
        if (nextScale !== scaleRef.current) {
          const rect = target.getBoundingClientRect();
          const cursorX = event.clientX - rect.left;
          const cursorY = event.clientY - rect.top;
          const worldX = (cursorX - offsetRef.current.x) / (scaleRef.current || 1);
          const worldY = (cursorY - offsetRef.current.y) / (scaleRef.current || 1);
          const nextOffset = {
            x: cursorX - worldX * nextScale,
            y: cursorY - worldY * nextScale,
          };
          updateScale(nextScale);
          updateOffset(nextOffset);
        }
        return;
      }

      if (!enablePan) {
        return;
      }

      event.preventDefault();
      updateOffset((previous) => ({
        x: previous.x - event.deltaX * panSpeed,
        y: previous.y - event.deltaY * panSpeed,
      }));
    };

    target.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      target.removeEventListener('wheel', handleWheel);
    };
  }, [enablePan, enableZoom, maxScale, minScale, panSpeed, updateOffset, updateScale, zoomSpeed]);

  const contentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      transform: `translate(${resolvedOffset.x}px, ${resolvedOffset.y}px) scale(${resolvedScale})`,
      transformOrigin: '0 0',
      willChange: 'transform',
    }),
    [resolvedOffset.x, resolvedOffset.y, resolvedScale],
  );

  return {
    scale: resolvedScale,
    offset: resolvedOffset,
    ref: viewportRef,
    contentStyle,
    setScale: updateScale,
    setOffset: updateOffset,
  } satisfies CanvasViewportState & {
    ref: React.RefObject<HTMLDivElement>;
    contentStyle: React.CSSProperties;
    setScale: (next: UpdateValue<number>) => void;
    setOffset: (next: UpdateValue<CanvasViewportOffset>) => void;
  };
}

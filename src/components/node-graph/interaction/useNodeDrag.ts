import * as React from 'react';

export type NodePosition = {
  x: number;
  y: number;
};

export type NodePositions = Record<string, NodePosition>;

export type NodeDragOptions = {
  positions?: NodePositions;
  defaultPositions?: NodePositions;
  scale?: number;
  selectedIds?: string[];
  onPositionsChange?: (positions: NodePositions) => void;
};

type NodeDragReturn = {
  positions: NodePositions;
  getNodeProps: (id: string) => {
    onPointerDown: (event: React.PointerEvent) => void;
    style: React.CSSProperties;
  };
  setPositions: (next: NodePositions) => void;
};

const emptyPositions: NodePositions = {};

export function useNodeDrag({
  positions,
  defaultPositions = emptyPositions,
  scale = 1,
  selectedIds = [],
  onPositionsChange,
}: NodeDragOptions = {}): NodeDragReturn {
  const isControlled = positions !== undefined;
  const [internalPositions, setInternalPositions] = React.useState(defaultPositions);
  const resolvedPositions = isControlled ? positions ?? emptyPositions : internalPositions;

  const positionsRef = React.useRef(resolvedPositions);
  const scaleRef = React.useRef(scale);
  const selectionRef = React.useRef(selectedIds);

  React.useEffect(() => {
    positionsRef.current = resolvedPositions;
  }, [resolvedPositions]);

  React.useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  React.useEffect(() => {
    selectionRef.current = selectedIds;
  }, [selectedIds]);

  const commit = React.useCallback(
    (next: NodePositions) => {
      if (!isControlled) {
        setInternalPositions(next);
      }
      onPositionsChange?.(next);
    },
    [isControlled, onPositionsChange],
  );

  const setPositions = React.useCallback(
    (next: NodePositions) => {
      commit(next);
    },
    [commit],
  );

  const getNodeProps = React.useCallback(
    (id: string) => {
      const position = resolvedPositions[id] ?? { x: 0, y: 0 };
      return {
        style: { left: position.x, top: position.y },
        onPointerDown: (event: React.PointerEvent) => {
          if (event.button !== 0) return;
          event.preventDefault();

          const activeIds =
            selectionRef.current.includes(id) && selectionRef.current.length > 0
              ? selectionRef.current
              : [id];
          const origins = new Map(
            activeIds.map((activeId) => [
              activeId,
              positionsRef.current[activeId] ?? { x: 0, y: 0 },
            ]),
          );
          const startX = event.clientX;
          const startY = event.clientY;

          const handlePointerMove = (moveEvent: PointerEvent) => {
            const dx = (moveEvent.clientX - startX) / (scaleRef.current || 1);
            const dy = (moveEvent.clientY - startY) / (scaleRef.current || 1);
            const next = { ...positionsRef.current };
            origins.forEach((origin, activeId) => {
              next[activeId] = { x: origin.x + dx, y: origin.y + dy };
            });
            commit(next);
          };

          const handlePointerUp = () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
          };

          window.addEventListener('pointermove', handlePointerMove);
          window.addEventListener('pointerup', handlePointerUp);
        },
      };
    },
    [commit, resolvedPositions],
  );

  return {
    positions: resolvedPositions,
    getNodeProps,
    setPositions,
  };
}

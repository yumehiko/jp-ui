import * as React from 'react';

import type { WirePoint } from '../Wire';
import type { CanvasViewportOffset } from '../CanvasViewport';

export type WirePortDirection = 'input' | 'output';

export type WirePort = {
  id: string;
  direction: WirePortDirection;
};

export type WireConnection = {
  from: string;
  to: string;
};

export type WireDraft = {
  start: WirePoint;
  end: WirePoint;
};

export type WireDraftOptions = {
  stageRef: React.RefObject<HTMLElement>;
  scale?: number;
  offset?: CanvasViewportOffset;
  coordinateSpace?: 'content' | 'viewport';
  onConnect?: (connection: WireConnection) => void;
};

type PortMeta = {
  direction: WirePortDirection;
  ref: React.RefObject<HTMLButtonElement>;
};

const hitSlop = 6;

export function useWireDraft({
  stageRef,
  scale = 1,
  offset = { x: 0, y: 0 },
  coordinateSpace = 'content',
  onConnect,
}: WireDraftOptions) {
  const [draft, setDraft] = React.useState<WireDraft | null>(null);
  const activeRef = React.useRef<{ fromId: string; start: WirePoint } | null>(null);
  const portsRef = React.useRef(new Map<string, PortMeta>());
  const scaleRef = React.useRef(scale);
  const offsetRef = React.useRef(offset);

  React.useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  React.useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  const getStagePoint = React.useCallback((clientX: number, clientY: number) => {
    const stage = stageRef.current;
    if (!stage) {
      return { x: clientX, y: clientY };
    }
    const rect = stage.getBoundingClientRect();
    const effectiveOffset = coordinateSpace === 'viewport' ? offsetRef.current : { x: 0, y: 0 };
    return {
      x: (clientX - rect.left - effectiveOffset.x) / (scaleRef.current || 1),
      y: (clientY - rect.top - effectiveOffset.y) / (scaleRef.current || 1),
    };
  }, [coordinateSpace, stageRef]);

  const getPortPoint = React.useCallback(
    (id: string) => {
      const meta = portsRef.current.get(id);
      const element = meta?.ref.current;
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      return getStagePoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
    },
    [getStagePoint],
  );

  const registerPort = React.useCallback((id: string, direction: WirePortDirection) => {
    const existing = portsRef.current.get(id);
    if (existing) {
      existing.direction = direction;
      return existing.ref;
    }
    const ref = React.createRef<HTMLButtonElement>();
    portsRef.current.set(id, { direction, ref });
    return ref;
  }, []);

  const findTargetPort = React.useCallback((clientX: number, clientY: number) => {
    const entries = Array.from(portsRef.current.entries());
    return entries.find(([, meta]) => {
      if (meta.direction !== 'input') return false;
      const element = meta.ref.current;
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        clientX >= rect.left - hitSlop &&
        clientX <= rect.right + hitSlop &&
        clientY >= rect.top - hitSlop &&
        clientY <= rect.bottom + hitSlop
      );
    });
  }, []);

  const clearDraft = React.useCallback(() => {
    activeRef.current = null;
    setDraft(null);
  }, []);

  const getPortProps = React.useCallback(
    (id: string, direction: WirePortDirection) => {
      registerPort(id, direction);
      if (direction === 'output') {
        return {
          onPointerDown: (event: React.PointerEvent) => {
            if (event.button !== 0) return;
            event.preventDefault();
            const start = getPortPoint(id) ?? getStagePoint(event.clientX, event.clientY);
            activeRef.current = { fromId: id, start };
            setDraft({ start, end: start });

            const handleMove = (moveEvent: PointerEvent) => {
              if (!activeRef.current) return;
              const end = getStagePoint(moveEvent.clientX, moveEvent.clientY);
              setDraft({ start: activeRef.current.start, end });
            };

            const handleUp = (upEvent: PointerEvent) => {
              const active = activeRef.current;
              if (!active) return;
              const target = findTargetPort(upEvent.clientX, upEvent.clientY);
              if (target) {
                const [targetId] = target;
                onConnect?.({ from: active.fromId, to: targetId });
              }
              clearDraft();
              window.removeEventListener('pointermove', handleMove);
              window.removeEventListener('pointerup', handleUp);
            };

            window.addEventListener('pointermove', handleMove);
            window.addEventListener('pointerup', handleUp);
          },
        };
      }

      return {
        onPointerUp: () => {
          if (!activeRef.current) return;
          onConnect?.({ from: activeRef.current.fromId, to: id });
          clearDraft();
        },
      };
    },
    [clearDraft, findTargetPort, getPortPoint, getStagePoint, onConnect, registerPort],
  );

  return {
    draft,
    getPortPoint,
    getPortProps,
    getPortRef: registerPort,
    clearDraft,
  };
}

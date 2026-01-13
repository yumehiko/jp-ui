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
  connections?: WireConnection[];
  defaultConnections?: WireConnection[];
  onConnect?: (connection: WireConnection) => void;
  onDisconnect?: (connection: WireConnection) => void;
  onConnectionsChange?: (connections: WireConnection[]) => void;
};

type PortMeta = {
  direction: WirePortDirection;
  acceptsMultiple?: boolean;
  ref: React.RefObject<HTMLButtonElement>;
};

const hitSlop = 6;

export function useWireDraft({
  stageRef,
  scale = 1,
  offset = { x: 0, y: 0 },
  coordinateSpace = 'content',
  connections,
  defaultConnections = [],
  onConnect,
  onDisconnect,
  onConnectionsChange,
}: WireDraftOptions) {
  const isControlled = connections !== undefined;
  const [internalConnections, setInternalConnections] = React.useState(defaultConnections);
  const resolvedConnections = isControlled ? connections ?? [] : internalConnections;
  const [draft, setDraft] = React.useState<WireDraft | null>(null);
  const [hoveredInputId, setHoveredInputId] = React.useState<string | null>(null);
  const [hoveredOutputId, setHoveredOutputId] = React.useState<string | null>(null);
  const activeRef = React.useRef<{
    fromId?: string;
    targetInputId?: string;
    start: WirePoint;
  } | null>(null);
  const portsRef = React.useRef(new Map<string, PortMeta>());
  const scaleRef = React.useRef(scale);
  const offsetRef = React.useRef(offset);
  const connectionsRef = React.useRef(resolvedConnections);

  React.useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  React.useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  React.useEffect(() => {
    connectionsRef.current = resolvedConnections;
  }, [resolvedConnections]);

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

  const registerPort = React.useCallback(
    (id: string, direction: WirePortDirection, acceptsMultiple?: boolean) => {
    const existing = portsRef.current.get(id);
    if (existing) {
      existing.direction = direction;
      existing.acceptsMultiple = acceptsMultiple;
      return existing.ref;
    }
    const ref = React.createRef<HTMLButtonElement>();
    portsRef.current.set(id, { direction, acceptsMultiple, ref });
    return ref;
    },
    [],
  );

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

  const findSourcePort = React.useCallback((clientX: number, clientY: number) => {
    const entries = Array.from(portsRef.current.entries());
    return entries.find(([, meta]) => {
      if (meta.direction !== 'output') return false;
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
    setHoveredInputId(null);
    setHoveredOutputId(null);
  }, []);

  const commitConnections = React.useCallback(
    (next: WireConnection[]) => {
      if (!isControlled) {
        setInternalConnections(next);
      }
      onConnectionsChange?.(next);
    },
    [isControlled, onConnectionsChange],
  );

  const disconnectConnection = React.useCallback(
    (connection: WireConnection) => {
      const next = connectionsRef.current.filter(
        (item) => !(item.from === connection.from && item.to === connection.to),
      );
      commitConnections(next);
      onDisconnect?.(connection);
    },
    [commitConnections, onDisconnect],
  );

  const connectToInput = React.useCallback(
    (connection: WireConnection) => {
      if (
        connectionsRef.current.some(
          (item) => item.from === connection.from && item.to === connection.to,
        )
      ) {
        return;
      }
      const targetMeta = portsRef.current.get(connection.to);
      const allowsMultiple = targetMeta?.acceptsMultiple ?? false;
      const filtered = allowsMultiple
        ? connectionsRef.current
        : connectionsRef.current.filter((item) => item.to !== connection.to);
      const next = [...filtered, connection];
      commitConnections(next);
      onConnect?.(connection);
    },
    [commitConnections, onConnect],
  );

  const getInputConnections = React.useCallback(
    (id: string) => connectionsRef.current.filter((item) => item.to === id),
    [],
  );

  const getPortProps = React.useCallback(
    (
      id: string,
      directionOrOptions: WirePortDirection | { direction: WirePortDirection; acceptsMultiple?: boolean },
    ) => {
      const options = typeof directionOrOptions === 'string'
        ? { direction: directionOrOptions }
        : directionOrOptions;
      registerPort(id, options.direction, options.acceptsMultiple);
      if (options.direction === 'output') {
        return {
          onPointerDown: (event: React.PointerEvent) => {
            if (event.button !== 0) return;
            event.preventDefault();
            event.stopPropagation();
            const start = getPortPoint(id) ?? getStagePoint(event.clientX, event.clientY);
            activeRef.current = { fromId: id, start };
            setDraft({ start, end: start });

            const handleMove = (moveEvent: PointerEvent) => {
              if (!activeRef.current) return;
              const end = getStagePoint(moveEvent.clientX, moveEvent.clientY);
              setDraft({ start: activeRef.current.start, end });
              const target = findTargetPort(moveEvent.clientX, moveEvent.clientY);
              setHoveredInputId(target ? target[0] : null);
            };

            const handleUp = (upEvent: PointerEvent) => {
              const active = activeRef.current;
              if (!active) return;
              const target = findTargetPort(upEvent.clientX, upEvent.clientY);
              if (target) {
                const [targetId] = target;
                connectToInput({ from: active.fromId, to: targetId });
              }
              clearDraft();
              setHoveredInputId(null);
              window.removeEventListener('pointermove', handleMove);
              window.removeEventListener('pointerup', handleUp);
            };

            window.addEventListener('pointermove', handleMove);
            window.addEventListener('pointerup', handleUp);
          },
        };
      }

      return {
        onPointerDown: (event: React.PointerEvent) => {
          if (event.button !== 0) return;
          const inputConnections = getInputConnections(id);
          event.preventDefault();
          event.stopPropagation();

          if (inputConnections.length > 0) {
            const connection = inputConnections[inputConnections.length - 1];
            disconnectConnection(connection);
            const start = getPortPoint(connection.from) ?? getStagePoint(event.clientX, event.clientY);
            activeRef.current = { fromId: connection.from, start };
            setDraft({ start, end: start });

            const handleMove = (moveEvent: PointerEvent) => {
              if (!activeRef.current) return;
              const end = getStagePoint(moveEvent.clientX, moveEvent.clientY);
              setDraft({ start: activeRef.current.start, end });
              const target = findTargetPort(moveEvent.clientX, moveEvent.clientY);
              setHoveredInputId(target ? target[0] : null);
            };

            const handleUp = (upEvent: PointerEvent) => {
              const active = activeRef.current;
              if (!active || !active.fromId) return;
              const target = findTargetPort(upEvent.clientX, upEvent.clientY);
              if (target) {
                const [targetId] = target;
                connectToInput({ from: active.fromId, to: targetId });
              }
              clearDraft();
              window.removeEventListener('pointermove', handleMove);
              window.removeEventListener('pointerup', handleUp);
            };

            window.addEventListener('pointermove', handleMove);
            window.addEventListener('pointerup', handleUp);
            return;
          }

          const start = getPortPoint(id) ?? getStagePoint(event.clientX, event.clientY);
          activeRef.current = { targetInputId: id, start };
          setDraft({ start, end: start });

          const handleMove = (moveEvent: PointerEvent) => {
            if (!activeRef.current) return;
            const end = getStagePoint(moveEvent.clientX, moveEvent.clientY);
            setDraft({ start: activeRef.current.start, end });
            const source = findSourcePort(moveEvent.clientX, moveEvent.clientY);
            setHoveredOutputId(source ? source[0] : null);
          };

          const handleUp = (upEvent: PointerEvent) => {
            const active = activeRef.current;
            if (!active || !active.targetInputId) return;
            const source = findSourcePort(upEvent.clientX, upEvent.clientY);
            if (source) {
              const [sourceId] = source;
              connectToInput({ from: sourceId, to: active.targetInputId });
            }
            clearDraft();
            setHoveredOutputId(null);
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerup', handleUp);
          };

          window.addEventListener('pointermove', handleMove);
          window.addEventListener('pointerup', handleUp);
        },
        onPointerUp: () => {
          if (!activeRef.current) return;
          if (activeRef.current.fromId) {
            connectToInput({ from: activeRef.current.fromId, to: id });
          }
          clearDraft();
          setHoveredOutputId(null);
        },
      };
    },
    [
      clearDraft,
      connectToInput,
      disconnectConnection,
      findTargetPort,
      findSourcePort,
      getInputConnections,
      getPortPoint,
      getStagePoint,
      registerPort,
    ],
  );

  return {
    connections: resolvedConnections,
    draft,
    hoveredInputId,
    hoveredOutputId,
    getPortPoint,
    getPortProps,
    getPortRef: registerPort,
    clearDraft,
  };
}

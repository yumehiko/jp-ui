import * as React from 'react';
import { Icon, type IconProps } from '../assets/icons/Icon';
import {
  IconBolt,
  IconCirclePlus,
  IconDeviceFloppy,
  IconFilter,
  IconInputSearch,
  IconLayersSubtract,
} from '@tabler/icons-react';
import {
  Button,
  CanvasViewport,
  MarqueeSelection,
  Node,
  Port,
  ToolbarButton,
  ToolbarGroup,
  ToolbarRoot,
  Wire,
  useNodeDrag,
  useNodeSelection,
  useMarqueeSelection,
  usePorts,
  useWireDraft,
  type NodePositions,
  type PortsByNode,
  type PinKeyColor,
} from '../components';
import styles from './NodeEditorSamplePage.module.css';

type CanvasNode = {
  id: string;
  title: string;
  icon: IconProps['icon'];
  x: number;
  y: number;
  keyColor: PinKeyColor;
  selected?: boolean;
};

const canvasNodes: CanvasNode[] = [
  {
    id: 'input',
    title: 'Input',
    icon: IconInputSearch,
    x: 80,
    y: 60,
    keyColor: 'blue',
  },
  {
    id: 'filter',
    title: 'Filter',
    icon: IconFilter,
    x: 360,
    y: 140,
    keyColor: 'orange',
    selected: true,
  },
  {
    id: 'output',
    title: 'Output',
    icon: IconLayersSubtract,
    x: 220,
    y: 320,
    keyColor: 'green',
  },
];

const initialPorts: PortsByNode = {
  input: {
    inputs: [],
    outputs: [{ id: 'input-out', label: 'Out', direction: 'output' }],
  },
  filter: {
    inputs: [{ id: 'filter-in', label: 'In', direction: 'input', acceptsMultiple: true }],
    outputs: [{ id: 'filter-out', label: 'Out', direction: 'output' }],
  },
  output: {
    inputs: [{ id: 'output-in', label: 'In', direction: 'input' }],
    outputs: [],
  },
};

const worldWidth = 2000;
const worldHeight = 1200;

export function NodeEditorSamplePage() {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const nodeRefs = React.useRef(new Map<string, React.RefObject<HTMLDivElement>>());
  const [nodes, setNodes] = React.useState(canvasNodes);
  const [viewportScale, setViewportScale] = React.useState(1);
  const [viewportOffset, setViewportOffset] = React.useState({ x: 0, y: 0 });
  const initialPositions = React.useMemo<NodePositions>(() => {
    return canvasNodes.reduce<NodePositions>((acc, node) => {
      acc[node.id] = { x: node.x, y: node.y };
      return acc;
    }, {});
  }, []);
  const [positions, setPositions] = React.useState(initialPositions);
  const [connections, setConnections] = React.useState([
    { from: 'input-out', to: 'filter-in' },
    { from: 'filter-out', to: 'output-in' },
  ]);
  const selection = useNodeSelection({
    selectionMode: 'multiple',
    defaultSelectedIds: canvasNodes.filter((node) => node.selected).map((node) => node.id),
  });
  const wireSelection = useNodeSelection({ selectionMode: 'multiple' });
  const ports = usePorts({ defaultPorts: initialPorts });
  const drag = useNodeDrag({
    positions,
    onPositionsChange: setPositions,
    scale: viewportScale,
    selectedIds: selection.selectedIds,
  });
  const wireDraft = useWireDraft({
    stageRef,
    scale: viewportScale,
    connections,
    onConnectionsChange: setConnections,
    coordinateSpace: 'viewport',
    offset: viewportOffset,
  });
  const isAdditiveEvent = React.useCallback(
    (event: React.PointerEvent | React.MouseEvent) =>
      event.shiftKey || event.metaKey || event.ctrlKey,
    [],
  );
  const clearSelection = React.useCallback(() => {
    selection.clear();
    wireSelection.clear();
  }, [selection, wireSelection]);
  const applyNodeSelection = React.useCallback(
    (ids: string[], additive: boolean) => {
      if (additive) {
        const next = new Set(selection.selectedIds);
        ids.forEach((id) => next.add(id));
        selection.setSelectedIds(Array.from(next));
      } else {
        selection.setSelectedIds(ids);
      }
      wireSelection.clear();
    },
    [selection, wireSelection],
  );
  const applyWireSelection = React.useCallback(
    (ids: string[], additive: boolean) => {
      if (additive) {
        const next = new Set(wireSelection.selectedIds);
        ids.forEach((id) => next.add(id));
        wireSelection.setSelectedIds(Array.from(next));
      } else {
        wireSelection.setSelectedIds(ids);
      }
      selection.clear();
    },
    [selection, wireSelection],
  );
  const getWireIdsForRect = React.useCallback(
    (rect: { x: number; y: number; width: number; height: number }) =>
      wireDraft.connections
        .map((connection) => {
          const start = wireDraft.getPortPoint(connection.from);
          const end = wireDraft.getPortPoint(connection.to);
          if (!start || !end) return null;
          const minX = Math.min(start.x, end.x);
          const minY = Math.min(start.y, end.y);
          const maxX = Math.max(start.x, end.x);
          const maxY = Math.max(start.y, end.y);
          const intersects = !(
            maxX < rect.x ||
            maxY < rect.y ||
            minX > rect.x + rect.width ||
            minY > rect.y + rect.height
          );
          return intersects ? `${connection.from}-${connection.to}` : null;
        })
        .filter((id): id is string => id !== null),
    [wireDraft],
  );

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Backspace' && event.key !== 'Delete') return;
      if (selection.selectedIds.length === 0 && wireSelection.selectedIds.length === 0) return;
      event.preventDefault();
      const removedNodeIds = new Set(selection.selectedIds);
      const removedWireIds = new Set(wireSelection.selectedIds);

      if (removedNodeIds.size > 0) {
        setNodes((prev) => prev.filter((node) => !removedNodeIds.has(node.id)));
        setPositions((prev) => {
          const next = { ...prev };
          removedNodeIds.forEach((id) => {
            delete next[id];
          });
          return next;
        });
        const nextPorts = { ...ports.ports };
        const removedPortIds = new Set<string>();
        removedNodeIds.forEach((id) => {
          const nodePorts = ports.ports[id];
          if (!nodePorts) return;
          nodePorts.inputs.forEach((port) => removedPortIds.add(port.id));
          nodePorts.outputs.forEach((port) => removedPortIds.add(port.id));
          delete nextPorts[id];
        });
        ports.setPorts(nextPorts);
        setConnections((prev) =>
          prev.filter((connection) => !removedPortIds.has(connection.from) && !removedPortIds.has(connection.to)),
        );
        selection.clear();
      }

      if (removedWireIds.size > 0) {
        setConnections((prev) =>
          prev.filter((connection) => !removedWireIds.has(`${connection.from}-${connection.to}`)),
        );
        wireSelection.clear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [ports, selection, wireSelection]);
  const marquee = useMarqueeSelection({
    stageRef,
    scale: viewportScale,
    offset: viewportOffset,
    items: nodes.map((node) => {
      if (!nodeRefs.current.has(node.id)) {
        nodeRefs.current.set(node.id, React.createRef<HTMLDivElement>());
      }
      return { id: node.id, ref: nodeRefs.current.get(node.id)! };
    }),
    onSelectionChange: (ids, options) => {
      if (ids.length > 0) {
        applyNodeSelection(ids, options.additive);
        return;
      }
      const wireIds = getWireIdsForRect(options.rect);
      if (wireIds.length > 0) {
        applyWireSelection(wireIds, options.additive);
        return;
      }
      clearSelection();
    },
  });
  const stageProps = marquee.getStageProps();

  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <header className={styles.Header}>
          <div>
            <div className={`typesetting-headline typesetting-tsumegumi ${styles.Title}`}>
              Node Editor Sample
            </div>
            <p className={`typesetting-body typesetting-betagumi ${styles.Lead}`}>
              jp-uiの複合コンポーネントを横断して、Canvas + サイドバー構成の最小サンプルを示します。
            </p>
          </div>
          <div className={styles.HeaderActions}>
            <Button variant="ghost">
              <Icon icon={IconDeviceFloppy} size={20} />
              保存
            </Button>
            <Button>
              <Icon icon={IconCirclePlus} size={20} />
              新規ノード
            </Button>
          </div>
        </header>

        <div className={styles.Layout}>
          <aside className={styles.Sidebar}>
            <div className={`typesetting-label ${styles.PanelTitle}`}>パレット</div>
            <div className={styles.SidebarList}>
              <button type="button" className={styles.SidebarItem}>
                <Icon icon={IconBolt} size={18} />
                Trigger
              </button>
              <button type="button" className={styles.SidebarItem}>
                <Icon icon={IconFilter} size={18} />
                Filter
              </button>
              <button type="button" className={styles.SidebarItem}>
                <Icon icon={IconLayersSubtract} size={18} />
                Mix
              </button>
            </div>
            <div className={`typesetting-caption ${styles.SidebarHint}`}>
              ドメインの接続ルールはUI側で持たず、アプリ側で実装します。
            </div>
          </aside>

          <main className={styles.CanvasPanel}>
            <CanvasViewport
              className={styles.CanvasViewport}
              minScale={0.6}
              rootRef={stageRef}
              scale={viewportScale}
              offset={viewportOffset}
              onScaleChange={setViewportScale}
              onOffsetChange={setViewportOffset}
              onPointerDown={(event) => {
                const target = event.target instanceof Element ? event.target : null;
                if (target?.closest(`.${styles.CanvasNode}`)) return;
                if (target?.closest('[data-wire="true"]')) return;
                stageProps.onPointerDown(event);
                if (event.defaultPrevented) return;
                clearSelection();
              }}
            >
              <div
                className={styles.CanvasStage}
              >
                {wireDraft.connections.map((connection) => {
                  const start = wireDraft.getPortPoint(connection.from);
                  const end = wireDraft.getPortPoint(connection.to);
                  if (!start || !end) return null;
                  const wireId = `${connection.from}-${connection.to}`;
                  return (
                    <Wire
                      key={wireId}
                      start={start}
                      end={end}
                      state={wireSelection.isSelected(wireId) ? 'focused' : 'enabled'}
                      keyColor="blue"
                      viewWidth={worldWidth}
                      viewHeight={worldHeight}
                      coordinateSystem="world"
                      onClick={(event) => {
                        applyWireSelection([wireId], isAdditiveEvent(event));
                        event.preventDefault();
                      }}
                      className={styles.CanvasWire}
                    />
                  );
                })}
                {wireDraft.draft ? (
                  <Wire
                    start={wireDraft.draft.start}
                    end={wireDraft.draft.end}
                    keyColor="purple"
                    viewWidth={worldWidth}
                    viewHeight={worldHeight}
                    coordinateSystem="world"
                    styleType="dash"
                    className={styles.CanvasWire}
                  />
                ) : null}
                {nodes.map((node) => {
                  if (!nodeRefs.current.has(node.id)) {
                    nodeRefs.current.set(node.id, React.createRef<HTMLDivElement>());
                  }
                  const nodeRef = nodeRefs.current.get(node.id)!;
                  const dragProps = drag.getNodeProps(node.id);
                  const handleNodeSelect = (event: React.PointerEvent | React.MouseEvent) => {
                    if (isAdditiveEvent(event)) {
                      applyNodeSelection([node.id], true);
                      return;
                    }
                    if (selection.isSelected(node.id)) {
                      return;
                    }
                    applyNodeSelection([node.id], false);
                  };
                  const nodePorts = ports.ports[node.id];
                  if (!nodePorts) return null;
                  const outputPorts = nodePorts.outputs.map((port) => (
                    <Port
                      key={port.id}
                      direction="output"
                      label={port.label}
                      pinKeyColor={node.keyColor}
                      pinConnected={wireDraft.connections.some((item) => item.from === port.id)}
                      pinState={wireDraft.hoveredOutputId === port.id ? 'dragged' : 'enabled'}
                      pinProps={wireDraft.getPortProps(port.id, 'output')}
                      pinRef={wireDraft.getPortRef(port.id, 'output')}
                    />
                  ));
                  const inputPorts = nodePorts.inputs.map((port) => (
                    <Port
                      key={port.id}
                      direction="input"
                      label={port.label}
                      pinKeyColor={node.keyColor}
                      pinConnected={wireDraft.connections.some((item) => item.to === port.id)}
                      pinState={wireDraft.hoveredInputId === port.id ? 'dragged' : 'enabled'}
                      pinProps={wireDraft.getPortProps(port.id, {
                        direction: 'input',
                        acceptsMultiple: port.acceptsMultiple,
                      })}
                      pinRef={wireDraft.getPortRef(port.id, 'input', port.acceptsMultiple)}
                    />
                  ));
                  const handleAddPort = (side: 'input' | 'output') => {
                    ports.addPort(node.id, side, {
                      label: side === 'input' ? 'Input' : 'Output',
                    });
                  };
                  return (
                    <div
                      key={node.id}
                      ref={nodeRef}
                      className={styles.CanvasNode}
                      style={dragProps.style}
                      onPointerDown={(event) => {
                        handleNodeSelect(event);
                        dragProps.onPointerDown(event);
                      }}
                    >
                      <Node
                        title={node.title}
                        showLeadingIcon
                        leadingIcon={node.icon}
                        keyColor={node.keyColor}
                        selected={selection.isSelected(node.id)}
                        selectable={false}
                        outputs={outputPorts}
                        inputs={inputPorts}
                        onAddPort={handleAddPort}
                      />
                    </div>
                  );
                })}
                <MarqueeSelection rect={marquee.rect} visible={marquee.visible} />
              </div>
            </CanvasViewport>
            <div className={styles.CanvasToolbar}>
              <ToolbarRoot aria-label="Canvas tools">
                <ToolbarGroup>
                  <ToolbarButton>整列</ToolbarButton>
                  <ToolbarButton>選択解除</ToolbarButton>
                </ToolbarGroup>
              </ToolbarRoot>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}

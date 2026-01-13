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
  Node,
  Port,
  ToolbarButton,
  ToolbarGroup,
  ToolbarRoot,
  Wire,
  useNodeDrag,
  useNodeSelection,
  useWireDraft,
  type NodePositions,
  type WireConnection,
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

type PortDefinition = {
  id: string;
  label: string;
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

const portDefinitions: Record<string, { inputs: PortDefinition[]; outputs: PortDefinition[] }> = {
  input: {
    inputs: [],
    outputs: [{ id: 'input-out', label: 'Out' }],
  },
  filter: {
    inputs: [{ id: 'filter-in', label: 'In' }],
    outputs: [{ id: 'filter-out', label: 'Out' }],
  },
  output: {
    inputs: [{ id: 'output-in', label: 'In' }],
    outputs: [],
  },
};

const worldWidth = 2000;
const worldHeight = 1200;

export function NodeEditorSamplePage() {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const [viewportScale, setViewportScale] = React.useState(1);
  const [viewportOffset, setViewportOffset] = React.useState({ x: 0, y: 0 });
  const [connections, setConnections] = React.useState<WireConnection[]>([
    { from: 'input-out', to: 'filter-in' },
    { from: 'filter-out', to: 'output-in' },
  ]);
  const initialPositions = React.useMemo<NodePositions>(() => {
    return canvasNodes.reduce<NodePositions>((acc, node) => {
      acc[node.id] = { x: node.x, y: node.y };
      return acc;
    }, {});
  }, []);
  const selection = useNodeSelection({
    defaultSelectedIds: canvasNodes.filter((node) => node.selected).map((node) => node.id),
  });
  const drag = useNodeDrag({
    defaultPositions: initialPositions,
    scale: viewportScale,
  });
  const wireDraft = useWireDraft({
    stageRef,
    scale: viewportScale,
    onConnect: (connection) => {
      setConnections((previous) => {
        if (previous.some((item) => item.from === connection.from && item.to === connection.to)) {
          return previous;
        }
        return [...previous, connection];
      });
    },
  });

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
              scale={viewportScale}
              offset={viewportOffset}
              onScaleChange={setViewportScale}
              onOffsetChange={setViewportOffset}
            >
              <div className={styles.CanvasStage} ref={stageRef}>
                {connections.map((connection) => {
                  const start = wireDraft.getPortPoint(connection.from);
                  const end = wireDraft.getPortPoint(connection.to);
                  if (!start || !end) return null;
                  return (
                    <Wire
                      key={`${connection.from}-${connection.to}`}
                      start={start}
                      end={end}
                      keyColor="blue"
                      viewWidth={worldWidth}
                      viewHeight={worldHeight}
                      coordinateSystem="world"
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
                {canvasNodes.map((node) => {
                  const dragProps = drag.getNodeProps(node.id);
                  const selectionProps = selection.getNodeProps(node.id);
                  const nodePorts = portDefinitions[node.id];
                  const outputPorts = nodePorts.outputs.map((port) => (
                    <Port
                      key={port.id}
                      direction="output"
                      label={port.label}
                      pinKeyColor={node.keyColor}
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
                      pinProps={wireDraft.getPortProps(port.id, 'input')}
                      pinRef={wireDraft.getPortRef(port.id, 'input')}
                    />
                  ));
                  return (
                    <Node
                      key={node.id}
                      title={node.title}
                      showLeadingIcon
                      leadingIcon={node.icon}
                      keyColor={node.keyColor}
                      selected={selection.isSelected(node.id)}
                      selectable={false}
                      className={styles.CanvasNode}
                      outputs={outputPorts}
                      inputs={inputPorts}
                      {...dragProps}
                      {...selectionProps}
                    />
                  );
                })}
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

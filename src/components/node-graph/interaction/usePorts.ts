import * as React from 'react';

export type NodePortDirection = 'input' | 'output';

export type PortDefinition = {
  id: string;
  label: string;
  direction: NodePortDirection;
  acceptsMultiple?: boolean;
};

export type NodePorts = {
  inputs: PortDefinition[];
  outputs: PortDefinition[];
};

export type PortsByNode = Record<string, NodePorts>;

export type AddPortOptions = {
  label?: string;
  acceptsMultiple?: boolean;
  id?: string;
};

export type UsePortsOptions = {
  ports?: PortsByNode;
  defaultPorts?: PortsByNode;
  onPortsChange?: (ports: PortsByNode) => void;
};

const emptyPorts: PortsByNode = {};

export function usePorts({
  ports,
  defaultPorts = emptyPorts,
  onPortsChange,
}: UsePortsOptions = {}) {
  const isControlled = ports !== undefined;
  const [internalPorts, setInternalPorts] = React.useState(defaultPorts);
  const resolvedPorts = isControlled ? ports ?? emptyPorts : internalPorts;
  const countersRef = React.useRef(new Map<string, number>());

  const commit = React.useCallback(
    (next: PortsByNode) => {
      if (!isControlled) {
        setInternalPorts(next);
      }
      onPortsChange?.(next);
    },
    [isControlled, onPortsChange],
  );

  const addPort = React.useCallback(
    (nodeId: string, direction: NodePortDirection, options: AddPortOptions = {}) => {
      const key = `${nodeId}:${direction}`;
      const prevNodePorts = resolvedPorts[nodeId] ?? { inputs: [], outputs: [] };
      const baseCount =
        direction === 'input' ? prevNodePorts.inputs.length : prevNodePorts.outputs.length;
      const nextCount = (countersRef.current.get(key) ?? baseCount) + 1;
      countersRef.current.set(key, nextCount);
      const id = options.id ?? `${nodeId}-${direction}-${nextCount}`;
      const label = options.label ?? `Port ${nextCount}`;
      const acceptsMultiple = options.acceptsMultiple;
      const nextPorts: PortsByNode = {
        ...resolvedPorts,
        [nodeId]: {
          inputs: direction === 'input'
            ? [...prevNodePorts.inputs, { id, label, direction, acceptsMultiple }]
            : prevNodePorts.inputs,
          outputs: direction === 'output'
            ? [...prevNodePorts.outputs, { id, label, direction, acceptsMultiple }]
            : prevNodePorts.outputs,
        },
      };
      commit(nextPorts);
      return id;
    },
    [commit, resolvedPorts],
  );

  return {
    ports: resolvedPorts,
    addPort,
    setPorts: commit,
  };
}

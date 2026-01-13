import * as React from 'react';

export type NodeSelectionMode = 'single' | 'multiple';

export type NodeSelectionOptions = {
  selectedIds?: string[];
  defaultSelectedIds?: string[];
  selectionMode?: NodeSelectionMode;
  onSelectionChange?: (ids: string[]) => void;
};

type NodeSelectionReturn = {
  selectedIds: string[];
  selectedSet: Set<string>;
  isSelected: (id: string) => boolean;
  select: (id: string) => void;
  toggle: (id: string) => void;
  clear: () => void;
  setSelectedIds: (ids: string[]) => void;
  getNodeProps: (id: string) => {
    onClick: (event: React.MouseEvent) => void;
  };
};

const toArray = (value: string[] | undefined) => value ?? [];

export function useNodeSelection({
  selectedIds,
  defaultSelectedIds,
  selectionMode = 'single',
  onSelectionChange,
}: NodeSelectionOptions = {}): NodeSelectionReturn {
  const isControlled = selectedIds !== undefined;
  const [internalSelectedIds, setInternalSelectedIds] = React.useState(
    toArray(defaultSelectedIds),
  );
  const resolvedSelectedIds = isControlled
    ? toArray(selectedIds)
    : internalSelectedIds;
  const selectedSet = React.useMemo(
    () => new Set(resolvedSelectedIds),
    [resolvedSelectedIds],
  );

  const commit = React.useCallback(
    (next: Set<string>) => {
      const resolved = Array.from(next);
      if (!isControlled) {
        setInternalSelectedIds(resolved);
      }
      onSelectionChange?.(resolved);
    },
    [isControlled, onSelectionChange],
  );

  const select = React.useCallback(
    (id: string) => {
      commit(new Set([id]));
    },
    [commit],
  );

  const toggle = React.useCallback(
    (id: string) => {
      const next = new Set(selectedSet);
      if (next.has(id)) {
        next.delete(id);
      } else if (selectionMode === 'single') {
        next.clear();
        next.add(id);
      } else {
        next.add(id);
      }
      commit(next);
    },
    [commit, selectedSet, selectionMode],
  );

  const clear = React.useCallback(() => {
    commit(new Set());
  }, [commit]);

  const setSelectedIds = React.useCallback(
    (ids: string[]) => {
      commit(new Set(ids));
    },
    [commit],
  );

  const getNodeProps = React.useCallback(
    (id: string) => ({
      onClick: (event: React.MouseEvent) => {
        if (event.defaultPrevented) return;
        const isMultiSelect =
          selectionMode === 'multiple' &&
          (event.shiftKey || event.metaKey || event.ctrlKey);
        if (isMultiSelect) {
          toggle(id);
        } else {
          select(id);
        }
      },
    }),
    [select, selectionMode, toggle],
  );

  return {
    selectedIds: resolvedSelectedIds,
    selectedSet,
    isSelected: (id) => selectedSet.has(id),
    select,
    toggle,
    clear,
    setSelectedIds,
    getNodeProps,
  };
}

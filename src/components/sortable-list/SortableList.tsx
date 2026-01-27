import * as React from 'react';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  type SortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import styles from './SortableList.module.css';

type DragHandleProps = React.HTMLAttributes<HTMLElement> & {
  ref: React.Ref<HTMLElement>;
};

type SortableItemRenderOptions = {
  isDragging: boolean;
  isSorting: boolean;
  isOver: boolean;
  dragHandleProps?: DragHandleProps;
};

type SortableListProps<T> = Omit<useRender.ComponentProps<'div'>, 'children'> & {
  items: T[];
  getItemId: (item: T) => string;
  onReorder: (nextItems: T[]) => void;
  renderItem: (item: T, options: SortableItemRenderOptions) => React.ReactNode;
  useDragHandle?: boolean;
  strategy?: SortingStrategy;
  activationDistance?: number;
};

type SortableListItemProps<T> = {
  item: T;
  id: string;
  renderItem: (item: T, options: SortableItemRenderOptions) => React.ReactNode;
  useDragHandle: boolean;
};

function SortableListItem<T>({
  item,
  id,
  renderItem,
  useDragHandle,
}: SortableListItemProps<T>) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
    isSorting,
    isOver,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const dragHandleProps: DragHandleProps | undefined = useDragHandle
    ? {
        ref: setActivatorNodeRef as React.Ref<HTMLElement>,
        ...attributes,
        ...listeners,
      }
    : undefined;

  return (
    <li
      ref={setNodeRef}
      className={`${styles.Item} ${useDragHandle ? styles.ItemHandleOnly : styles.ItemDraggable}`}
      data-dragging={isDragging ? '' : undefined}
      data-over={isOver ? '' : undefined}
      data-sorting={isSorting ? '' : undefined}
      style={style}
      {...(!useDragHandle ? { ...attributes, ...listeners } : undefined)}
    >
      {renderItem(item, { isDragging, isOver, isSorting, dragHandleProps })}
    </li>
  );
}

export function SortableList<T>({
  items,
  getItemId,
  onReorder,
  renderItem,
  useDragHandle = false,
  strategy = verticalListSortingStrategy,
  activationDistance = 8,
  render,
  ...props
}: SortableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: activationDistance } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const itemIds = React.useMemo(() => items.map(getItemId), [items, getItemId]);

  const handleDragEnd = React.useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over || active.id === over.id) {
        return;
      }

      const oldIndex = itemIds.indexOf(String(active.id));
      const newIndex = itemIds.indexOf(String(over.id));

      if (oldIndex < 0 || newIndex < 0) {
        return;
      }

      onReorder(arrayMove(items, oldIndex, newIndex));
    },
    [itemIds, items, onReorder]
  );

  const list = (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <SortableContext items={itemIds} strategy={strategy}>
        <ul className={styles.List} role="list">
          {items.map((item) => {
            const id = getItemId(item);
            return (
              <SortableListItem
                key={id}
                id={id}
                item={item}
                renderItem={renderItem}
                useDragHandle={useDragHandle}
              />
            );
          })}
        </ul>
      </SortableContext>
    </DndContext>
  );

  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>({ className: styles.Root, children: list }, props),
  });

  return element;
}

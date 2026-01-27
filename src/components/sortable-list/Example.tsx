import * as React from 'react';
import { SortableList } from './SortableList';
import styles from './Example.module.css';

const noteIcon = 'http://localhost:3845/assets/a62ac3a644ceca34dc860380d20cb5cd8d0daf84.svg';

const initialItems = [
  { id: 'doc', title: 'Label Large', caption: 'Label Large' },
  { id: 'memo', title: 'Label Large', caption: 'Label Large' },
  { id: 'draft', title: 'Label Large', caption: 'Label Large' },
  { id: 'sheet', title: 'Label Large', caption: 'Label Large' },
];

export function Example() {
  const [items, setItems] = React.useState(initialItems);

  return (
    <div className={styles.Frame}>
      <SortableList
        items={items}
        getItemId={(item) => item.id}
        onReorder={setItems}
        useDragHandle
        renderItem={(item, { isDragging, dragHandleProps }) => {
          const { ref: dragHandleRef, ...dragHandleAttributes } = dragHandleProps ?? {};
          const buttonRef = dragHandleRef as React.Ref<HTMLButtonElement> | undefined;

          return (
            <button
              ref={buttonRef}
              type="button"
              className={`${styles.ItemButton} ${isDragging ? styles.ItemButtonDragging : ''}`}
              {...dragHandleAttributes}
            >
            <span className={styles.IconWrap}>
              <img className={styles.Icon} src={noteIcon} alt="" />
            </span>
            <span className={styles.TextStack}>
              <span className={styles.Label}>{item.title}</span>
              <span className={styles.Caption}>{item.caption}</span>
            </span>
            </button>
          );
        }}
      />
    </div>
  );
}

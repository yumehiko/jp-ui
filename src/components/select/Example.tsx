import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconCircleFilled } from '@tabler/icons-react';
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectList,
  SelectItem,
} from '..';

const itemsDefault = [
  { label: 'Tokyo', value: 'tokyo' },
  { label: 'Osaka', value: 'osaka' },
  { label: 'Sapporo', value: 'sapporo' },
];

export function Example() {
  const [value, setValue] = React.useState<string | null>(null);
  const filled = value !== null;

  return (
    <SelectRoot
      items={itemsDefault}
      value={value}
      onValueChange={setValue}
      defaultOpen
      highlightItemOnHover={false}
    >
      <SelectTrigger
        floatingLabel={<span>Label</span>}
        leadingIcon={<Icon icon={IconCircleFilled} size={24} />}
        filled={filled}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner sideOffset={8}>
          <SelectPopup>
            <SelectList>
              {itemsDefault.map((item) => (
                <SelectItem key={item.label} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectList>
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </SelectRoot>
  );
}

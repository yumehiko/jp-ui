import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectList,
  SelectItem,
  SelectSeparator,
  SelectGroup,
  SelectGroupLabel,
  SelectScrollUpArrow,
  SelectScrollDownArrow,
} from './Select';

const meta: Meta = {
  title: 'Components/Select',
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

const itemsDefault = [
  { label: 'Select option', value: null },
  { label: 'Tokyo', value: 'tokyo' },
  { label: 'Osaka', value: 'osaka' },
  { label: 'Sapporo', value: 'sapporo' },
];

const itemsMany = [
  { label: 'Select option', value: null },
  { label: 'Tokyo', value: 'tokyo' },
  { label: 'Osaka', value: 'osaka' },
  { label: 'Sapporo', value: 'sapporo' },
  { label: 'Nagoya', value: 'nagoya' },
  { label: 'Fukuoka', value: 'fukuoka' },
  { label: 'Kobe', value: 'kobe' },
  { label: 'Hiroshima', value: 'hiroshima' },
  { label: 'Sendai', value: 'sendai' },
  { label: 'Niigata', value: 'niigata' },
  { label: 'Kanazawa', value: 'kanazawa' },
  { label: 'Naha', value: 'naha' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>(null);
    const filled = value !== null;
    const labelByValue = React.useMemo(
      () => new Map(itemsDefault.map((item) => [item.value, item.label])),
      [],
    );

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
          leadingIcon={<Icon name="dummy" size={24} />}
          filled={filled}
        >
          <SelectValue>
            {(currentValue) =>
              currentValue == null
                ? 'Select option'
                : (labelByValue.get(currentValue) ?? String(currentValue))
            }
          </SelectValue>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner sideOffset={8}>
            <SelectPopup>
              <SelectList>
                {itemsDefault.slice(1).map((item) => (
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
  },
};

export const ManyItems: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>(null);
    const filled = value !== null;
    const labelByValue = React.useMemo(
      () => new Map(itemsMany.map((item) => [item.value, item.label])),
      [],
    );

    return (
      <SelectRoot
        items={itemsMany}
        value={value}
        onValueChange={setValue}
        defaultOpen
        highlightItemOnHover={false}
      >
        <SelectTrigger
          floatingLabel={<span>Label</span>}
          leadingIcon={<Icon name="dummy" size={24} />}
          filled={filled}
        >
          <SelectValue>
            {(currentValue) =>
              currentValue == null
                ? 'Select option'
                : (labelByValue.get(currentValue) ?? String(currentValue))
            }
          </SelectValue>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner sideOffset={8} alignItemWithTrigger={false}>
            <SelectPopup style={{ '--select-popup-extra-width': '16px' } as React.CSSProperties}>
              <SelectScrollUpArrow />
              <SelectList style={{ maxHeight: 180 }}>
                <SelectGroup>
                  <SelectGroupLabel>Kanto</SelectGroupLabel>
                  {itemsMany.slice(1, 5).map((item) => (
                    <SelectItem key={item.label} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectGroupLabel>Other</SelectGroupLabel>
                  {itemsMany.slice(5).map((item) => (
                    <SelectItem
                      key={item.label}
                      value={item.value}
                      disabled={item.value === 'sapporo'}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
    );
  },
};

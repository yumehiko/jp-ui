import type { Meta, StoryObj } from '@storybook/react';
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
  SelectSeparator,
  SelectGroup,
  SelectGroupLabel,
  SelectScrollUpArrow,
  SelectScrollDownArrow,
} from '..';

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
  { label: 'Tokyo', value: 'tokyo' },
  { label: 'Osaka', value: 'osaka' },
  { label: 'Sapporo', value: 'sapporo' },
];

const itemsMany = [
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

const DefaultStory = () => {
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
};

const ManyItemsStory = () => {
  const [value, setValue] = React.useState<string | null>(null);
  const filled = value !== null;
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
        leadingIcon={<Icon icon={IconCircleFilled} size={24} />}
        filled={filled}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner sideOffset={8} alignItemWithTrigger={false}>
          <SelectPopup style={{ '--select-popup-extra-width': '16px' } as React.CSSProperties}>
            <SelectScrollUpArrow />
            <SelectList style={{ maxHeight: 180 }}>
              <SelectGroup>
                <SelectGroupLabel>Kanto</SelectGroupLabel>
                {itemsMany.slice(0, 4).map((item) => (
                  <SelectItem key={item.label} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectGroupLabel>Other</SelectGroupLabel>
                {itemsMany.slice(4).map((item) => (
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
};

export const Default: Story = {
  render: () => <DefaultStory />,
};

export const ManyItems: Story = {
  render: () => <ManyItemsStory />,
};

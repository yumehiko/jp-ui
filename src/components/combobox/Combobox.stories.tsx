import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconCaretDown, IconCheck, IconX } from '@tabler/icons-react';
import { Field } from '..';
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxPopup,
  ComboboxList,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxEmpty,
} from '..';
import styles from './Combobox.module.css';

const meta: Meta = {
  title: 'Components/Combobox',
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

const cities = [
  'Tokyo',
  'Osaka',
  'Sapporo',
  'Nagoya',
  'Fukuoka',
  'Sendai',
  'Kobe',
  'Hiroshima',
  'Niigata',
  'Naha',
];

const DefaultStory = () => {
  const [value, setValue] = React.useState<string | null>(null);
  const id = React.useId();

  return (
    <ComboboxRoot
      items={cities}
      value={value}
      onValueChange={setValue}
      defaultOpen
    >
      <Field label="都市名">
        <div className={styles.InputWrapper}>
          <ComboboxInput
            id={id}
            placeholder="例: Tokyo"
          />
          <div className={styles.ActionButtons}>
            <ComboboxClear aria-label="選択をクリア">
              <Icon icon={IconX} size={20} />
            </ComboboxClear>
            <ComboboxTrigger aria-label="候補を開く">
              <Icon icon={IconCaretDown} size={20} />
            </ComboboxTrigger>
          </div>
        </div>
      </Field>
      <ComboboxPortal>
        <ComboboxPositioner sideOffset={8}>
          <ComboboxPopup>
            <ComboboxEmpty>該当する都市がありません。</ComboboxEmpty>
            <ComboboxList>
              {(city: string) => (
                <ComboboxItem key={city} value={city}>
                  <ComboboxItemIndicator>
                    <Icon icon={IconCheck} size={20} />
                  </ComboboxItemIndicator>
                  <span className={styles.ItemText}>{city}</span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </ComboboxRoot>
  );
};

export const Default: Story = {
  render: () => <DefaultStory />,
};

# Combobox

Source: src/components/combobox/Example.tsx

## Example

```tsx
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

export function Example() {
  const [value, setValue] = React.useState<string | null>(null);
  const id = React.useId();

  return (
    <ComboboxRoot items={cities} value={value} onValueChange={setValue} defaultOpen>
      <Field label="都市名">
        <div className={styles.InputWrapper}>
          <ComboboxInput id={id} placeholder="例: Tokyo" />
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
}

```

Source: src/components/combobox/Combobox.module.css

## Styles

```css
.InputWrapper {
  position: relative;
  width: 100%;
}

.Input {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 11px 15px;
  padding-right: calc(15px + 24px * 2 + 8px);
  border: 1px solid var(--on-surface-variant);
  border-radius: var(--radius-s);
  background-color: transparent;
  color: var(--on-surface);
  font-family: var(--font-brand);
  font-size: var(--font-size-editable-label);
  font-weight: var(--font-weight-editable-label);
  line-height: var(--line-height-editable-label);
  letter-spacing: var(--letter-spacing-editable-label);
  font-feature-settings: "palt" 0;
  caret-color: var(--on-surface);
  outline: none;
}

.Input::placeholder {
  color: var(--on-surface-variant);
}

.Input:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}

.Input[data-filled] {
  border-color: var(--on-surface);
}

.Input[data-invalid] {
  border-color: var(--error);
}

.ActionButtons {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
}

.Trigger,
.Clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: var(--radius-full);
  background: transparent;
  color: var(--on-surface-variant);
  cursor: pointer;
}

.Trigger:focus-visible,
.Clear:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.Trigger[data-disabled],
.Clear[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

.Chips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--on-surface-variant);
  border-radius: var(--radius-s);
  background-color: transparent;
}

.Chips:focus-within {
  border-color: var(--on-surface);
}

.Chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: var(--radius-s);
  background-color: var(--surface-container-high);
  color: var(--on-surface);
  font-family: var(--font-brand);
  font-size: var(--font-size-label-small);
  font-weight: var(--font-weight-label-small);
  line-height: var(--line-height-label-small);
  letter-spacing: var(--letter-spacing-label-small);
}

.ChipRemove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: var(--radius-full);
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.ChipRemove:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.Positioner {
  width: var(--anchor-width);
  max-width: var(--available-width);
}

.Popup {
  box-sizing: border-box;
  width: var(--anchor-width);
  max-width: var(--available-width);
  max-height: var(--available-height);
}

.Row {
  display: grid;
  gap: var(--space-1);
}

.Item {
  overflow: hidden;
  cursor: default;
}

.Item[data-highlighted] {
  background-color: var(--surface-container-high);
}

.Item[data-disabled] {
  opacity: 0.2;
}

.ItemIndicator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--on-surface-variant);
}

.ItemText {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Arrow {
  display: none;
}

```

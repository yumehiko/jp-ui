# Checkbox Group

Source: src/components/checkbox-group/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Checkbox } from '..';
import checkboxStyles from '../checkbox/Checkbox.module.css';
import { CheckboxGroup } from '..';
import styles from './CheckboxGroup.module.css';

const labelClassName = `typesetting-label typesetting-tsumegumi ${checkboxStyles.Label}`;

const options = [
  { label: 'お知らせを受け取る', value: 'news' },
  { label: 'アップデートを受け取る', value: 'updates' },
  { label: 'ヒントを受け取る', value: 'tips' },
];

export function Example() {
  const id = React.useId();
  return (
    <CheckboxGroup aria-labelledby={id} defaultValue={['news']}>
      <div id={id} className={styles.Caption}>
        通知設定
      </div>
      {options.map((option) => (
        <label key={option.value} className={labelClassName}>
          <Checkbox name="notifications" value={option.value} />
          {option.label}
        </label>
      ))}
    </CheckboxGroup>
  );
}

```

Source: src/components/checkbox/Checkbox.module.css

## Styles

```css
.Label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--on-surface);
  cursor: pointer;
}

.Label:has(.Checkbox[data-disabled]) {
  opacity: 0.2;
  cursor: not-allowed;
}

.Checkbox {
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  color: var(--inverse-on-surface);
  cursor: pointer;
  outline: none;

  --checkbox-state-opacity: 0;
}

.Checkbox::after {
  content: "";
  position: absolute;
  left: calc(-1 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  top: calc(-1 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  width: calc(24px + 2 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  height: calc(24px + 2 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  border: var(--focus-ring-width) solid var(--focus-ring-color);
  border-radius: var(--radius-full);
  opacity: 0;
  pointer-events: none;
}

.Box {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-xs);
  border: 1px solid var(--outline);
  background-color: transparent;
}

.StateLayer {
  position: absolute;
  left: -4px;
  top: -4px;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background-color: var(--on-surface);
  opacity: var(--checkbox-state-opacity);
  transition: opacity 150ms ease-out;
  pointer-events: none;
}

.Indicator {
  position: absolute;
  left: 6px;
  top: 6px;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--inverse-on-surface);
}

.Icon {
  width: 12px;
  height: 12px;
}

.Checkbox[data-unchecked] .Indicator {
  opacity: 0;
}

.Checkbox[data-checked] .Box {
  border: 0;
  background-color: var(--inverse-surface);
}

.Checkbox[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

.Checkbox[data-disabled] .StateLayer {
  opacity: 0;
}

.Checkbox:focus-visible,
.Checkbox[data-focused] {
  --checkbox-state-opacity: 0.12;
}

.Checkbox:focus-visible::after,
.Checkbox[data-focused]::after {
  opacity: 1;
}

@media (hover: hover) {
  .Checkbox:hover:not([data-disabled]) {
    --checkbox-state-opacity: 0.08;
  }

  .Label:hover .Checkbox:not([data-disabled]) {
    --checkbox-state-opacity: 0.08;
  }
}

.Checkbox:active:not([data-disabled]) {
  --checkbox-state-opacity: 0.16;
}

.Label:active .Checkbox:not([data-disabled]) {
  --checkbox-state-opacity: 0.16;
}

```

Source: src/components/checkbox-group/CheckboxGroup.module.css

## Styles

```css
.Group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
  color: var(--on-surface);
}

.Caption {
  font-family: var(--font-brand);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-label);
  line-height: var(--line-height-label);
  letter-spacing: var(--letter-spacing-label);
  color: var(--on-surface);
}

```

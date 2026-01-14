# Number Field

Source: src/components/number-field/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from '..';
import styles from './NumberField.module.css';

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export function Example() {
  const id = React.useId();
  return (
    <NumberFieldRoot id={id} defaultValue={12} min={0} max={120}>
      <NumberFieldScrubArea>
        <label htmlFor={id} className={labelClassName}>
          数量
        </label>
        <NumberFieldScrubAreaCursor>
          <CursorGrowIcon />
        </NumberFieldScrubAreaCursor>
      </NumberFieldScrubArea>
      <NumberFieldGroup>
        <NumberFieldDecrement aria-label="減らす">
          <Icon icon={IconMinus} size={16} />
        </NumberFieldDecrement>
        <NumberFieldInput />
        <NumberFieldIncrement aria-label="増やす">
          <Icon icon={IconPlus} size={16} />
        </NumberFieldIncrement>
      </NumberFieldGroup>
    </NumberFieldRoot>
  );
}

function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="black"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

```

Source: src/components/number-field/NumberField.module.css

## Styles

```css
.Root {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  color: var(--on-surface);
}

.ScrubArea {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ew-resize;
  user-select: none;
}

.ScrubArea[data-disabled],
.ScrubArea[data-readonly] {
  cursor: default;
}

.ScrubAreaCursor {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--on-surface-variant);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
}

.Label {
  font-family: var(--font-brand);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-label);
  line-height: var(--line-height-label);
  letter-spacing: var(--letter-spacing-label);
  color: var(--on-surface);
}

.Group {
  display: flex;
  align-items: center;
}

.Input {
  box-sizing: border-box;
  width: 96px;
  height: 40px;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--outline);
  border-bottom: 1px solid var(--outline);
  border-left: 0;
  border-right: 0;
  background-color: transparent;
  color: var(--on-surface);
  font-family: var(--font-brand);
  font-size: var(--font-size-editable-label);
  font-weight: var(--font-weight-editable-label);
  line-height: var(--line-height-editable-label);
  letter-spacing: var(--letter-spacing-editable-label);
  font-variant-numeric: tabular-nums;
  text-align: center;
  outline: none;
}

.Input:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
  z-index: 1;
}

.Decrement,
.Increment {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  border: 1px solid var(--outline);
  background-color: var(--surface-container);
  color: var(--on-surface);
  cursor: pointer;
  user-select: none;
  outline: none;
}

.Decrement {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--radius-s);
  border-bottom-left-radius: var(--radius-s);
}

.Increment {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--radius-s);
  border-bottom-right-radius: var(--radius-s);
}

.Decrement:focus-visible,
.Increment:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.Decrement[data-disabled],
.Increment[data-disabled],
.Input[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

@media (hover: hover) {
  .Decrement:hover:not([data-disabled]),
  .Increment:hover:not([data-disabled]) {
    background-color: var(--surface-container-high);
  }
}

.Decrement:active:not([data-disabled]),
.Increment:active:not([data-disabled]) {
  background-color: var(--surface-container-highest);
}

.Icon {
  width: 16px;
  height: 16px;
}

```

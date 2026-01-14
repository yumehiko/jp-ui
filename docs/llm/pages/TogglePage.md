# Toggle

Source: src/pages/TogglePage.tsx

## Example

```tsx
import { Icon } from '../assets/icons/Icon';
import { IconBold, IconItalic, IconStar, IconUnderline } from '@tabler/icons-react';
import { Toggle, ToggleGroup } from '../components';
import toggleStyles from '../components/toggle/Toggle.module.css';
import styles from './TogglePage.module.css';

export function TogglePage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <section className={styles.Section}>
          <h2 className={`typesetting-title ${styles.SectionTitle}`}>Toggle</h2>
          <div className={styles.Row}>
            <Toggle aria-label="お気に入り">
              <Icon icon={IconStar} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle aria-label="お気に入り" defaultPressed>
              <Icon icon={IconStar} size={24} className={toggleStyles.Icon} />
            </Toggle>
          </div>
        </section>

        <section className={styles.Section}>
          <h2 className={`typesetting-title ${styles.SectionTitle}`}>
            Toggle Group (single)
          </h2>
          <ToggleGroup defaultValue={['bold']} className={styles.Group}>
            <Toggle value="bold" aria-label="太字">
              <Icon icon={IconBold} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle value="italic" aria-label="斜体">
              <Icon icon={IconItalic} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle value="underline" aria-label="下線">
              <Icon icon={IconUnderline} size={24} className={toggleStyles.Icon} />
            </Toggle>
          </ToggleGroup>
        </section>

        <section className={styles.Section}>
          <h2 className={`typesetting-title ${styles.SectionTitle}`}>
            Toggle Group (multiple)
          </h2>
          <ToggleGroup
            multiple
            defaultValue={['bold', 'underline']}
            className={styles.Group}
          >
            <Toggle value="bold" aria-label="太字">
              <Icon icon={IconBold} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle value="italic" aria-label="斜体">
              <Icon icon={IconItalic} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle value="underline" aria-label="下線">
              <Icon icon={IconUnderline} size={24} className={toggleStyles.Icon} />
            </Toggle>
          </ToggleGroup>
        </section>
      </div>
    </div>
  );
}

```

Source: src/components/toggle/Toggle.module.css

## Styles

```css
.Toggle {
  position: relative;
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin: 0;
  border: 0;
  border-radius: var(--radius-full);
  background: transparent;
  color: var(--on-surface);
  cursor: pointer;
  outline: none;

  --toggle-state-opacity: 0;
  --toggle-border-color: var(--on-surface-variant);
  --toggle-layer-inset: 50%;
  --toggle-layer-opacity: 0;
  --toggle-layer-scale: 0;
  --toggle-layer-border-width: 0;
}

.Toggle::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: var(--on-surface);
  opacity: var(--toggle-state-opacity);
  transition: opacity 200ms ease-out;
  pointer-events: none;
  z-index: 0;
}

.Toggle::after {
  content: "";
  position: absolute;
  inset: calc(-1 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  border: var(--focus-ring-width) solid var(--focus-ring-color);
  border-radius: var(--radius-full);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}

.Toggle > * {
  position: relative;
  z-index: 1;
}

.ToggleLayer {
  position: absolute;
  inset: var(--toggle-layer-inset);
  border-radius: inherit;
  border: var(--toggle-layer-border-width) solid var(--toggle-border-color);
  pointer-events: none;
  opacity: var(--toggle-layer-opacity);
  transform: scale(var(--toggle-layer-scale));
  transition:
    inset 200ms ease-out,
    opacity 200ms ease-out,
    transform 200ms ease-out,
    border-width 200ms ease-out,
    border-color 200ms ease-out;
  z-index: 1;
}

.Toggle[data-pressed] {
  --toggle-layer-inset: 2px;
  --toggle-layer-opacity: 1;
  --toggle-layer-scale: 1;
  --toggle-layer-border-width: 2px;
}

.Toggle[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

.Toggle[data-disabled]::before {
  opacity: 0;
}

.Toggle:focus-visible,
.Toggle[data-focused] {
  --toggle-state-opacity: 0.12;
}

.Toggle:focus-visible::after,
.Toggle[data-focused]::after {
  opacity: 1;
}

@media (hover: hover) {
  .Toggle:hover:not([data-disabled]) {
    --toggle-state-opacity: 0.08;
  }
}

.Toggle:active:not([data-disabled]) {
  --toggle-state-opacity: 0.16;
}

.Icon {
  width: 24px;
  height: 24px;
}

```

Source: src/pages/TogglePage.module.css

## Styles

```css
.Page {
  padding: 32px 16px 80px;
  background-color: var(--surface);
  color: var(--on-surface);
}

.Container {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
}

.Section {
  display: grid;
  gap: 16px;
  margin-top: 32px;
}

.Section:first-of-type {
  margin-top: 0;
}

.SectionTitle {
  margin: 0;
}

.Row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.Group {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

```

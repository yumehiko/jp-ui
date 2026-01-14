# Preview Card

Source: src/components/preview-card/Example.tsx

## Example

```tsx
import {
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from '..';
import styles from './PreviewCard.module.css';

export function Example() {
  return (
    <div style={{ padding: 32 }}>
      <PreviewCardRoot>
        <p className={styles.Paragraph}>
          The principles of good{' '}
          <PreviewCardTrigger href="https://en.wikipedia.org/wiki/Typography">
            typography
          </PreviewCardTrigger>{' '}
          remain into the digital age.
        </p>
        <PreviewCardPortal>
          <PreviewCardPositioner sideOffset={12}>
            <PreviewCardPopup>
              <img
                className={styles.Image}
                src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
                alt="Station Hofplein signage in Rotterdam, Netherlands"
                width="448"
                height="300"
              />
              <p className={styles.Summary}>
                <strong>Typography</strong> is the art and science of arranging type
                to make written language clear, visually appealing, and effective in
                communication.
              </p>
            </PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>
    </div>
  );
}

```

Source: src/components/preview-card/PreviewCard.module.css

## Styles

```css
.Trigger {
  outline: 0;
  color: var(--primary);
  text-decoration-line: none;
  text-decoration-thickness: 1px;
  text-decoration-color: var(--primary);
  text-underline-offset: 2px;
}

@media (hover: hover) {
  .Trigger:hover {
    text-decoration-line: underline;
  }
}

.Trigger[data-popup-open] {
  text-decoration-line: underline;
}

.Trigger:focus-visible {
  border-radius: var(--radius-xs);
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
  text-decoration-line: none;
}

.Backdrop {
}

.Positioner {
  width: var(--positioner-width);
  height: var(--positioner-height);
  max-width: var(--available-width);
  max-height: var(--available-height);
  z-index: var(--z-tooltip);
}

.Popup {
  box-sizing: border-box;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: var(--radius-m);
  background-color: var(--surface-container-low);
  color: var(--on-surface);
  box-shadow: var(--elevation-2);
  outline: 1px solid var(--outline-variant);
  transform-origin: var(--transform-origin);
  transition: transform 150ms ease, opacity 150ms ease;
  z-index: var(--z-tooltip);
}

.Popup[data-starting-style],
.Popup[data-ending-style] {
  opacity: 0;
  transform: scale(0.95);
}

.Arrow {
  position: absolute;
  display: flex;
}

.Arrow[data-side='top'] {
  bottom: -8px;
  transform: rotate(180deg);
}

.Arrow[data-side='bottom'] {
  top: -8px;
}

.Arrow[data-side='left'] {
  right: -13px;
  transform: rotate(90deg);
}

.Arrow[data-side='right'] {
  left: -13px;
  transform: rotate(-90deg);
}

.ArrowFill {
  fill: var(--surface-container-low);
}

.ArrowOuterStroke {
  fill: var(--outline-variant);
}


.Paragraph {
  margin: 0;
  max-width: 16rem;
  font-family: var(--font-brand);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
  letter-spacing: var(--letter-spacing-body);
  color: var(--on-surface);
  text-wrap: balance;
}

.Image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-xs);
}

.Summary {
  margin: 0;
  font-family: var(--font-brand);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-caption);
  line-height: var(--line-height-caption);
  letter-spacing: var(--letter-spacing-caption);
  color: var(--on-surface);
  text-wrap: pretty;
}

```

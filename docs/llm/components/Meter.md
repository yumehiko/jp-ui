# Meter

Source: src/components/meter/Example.tsx

## Example

```tsx
import { MeterIndicator, MeterLabel, MeterRoot, MeterTrack, MeterValue } from '..';

export function Example() {
  return (
    <MeterRoot value={24} aria-label="使用量">
      <MeterLabel>ストレージ使用量</MeterLabel>
      <MeterValue>{(_, value) => `${value}%`}</MeterValue>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterRoot>
  );
}

```

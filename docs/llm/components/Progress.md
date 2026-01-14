# Progress

Source: src/components/progress/Example.tsx

## Example

```tsx
import * as React from 'react';
import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from '..';

export function Example() {
  const [value, setValue] = React.useState(32);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, current + 12));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressRoot value={value} aria-label="処理の進捗">
      <ProgressLabel>データ書き出し</ProgressLabel>
      <ProgressValue>{(formatted, raw) => (raw === null ? '-' : formatted)}</ProgressValue>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  );
}

```

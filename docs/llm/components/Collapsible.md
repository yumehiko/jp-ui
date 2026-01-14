# Collapsible

Source: src/components/collapsible/Example.tsx

## Example

```tsx
import {
  CollapsibleContent,
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '..';

export function Example() {
  return (
    <CollapsibleRoot>
      <CollapsibleTrigger>詳細を表示</CollapsibleTrigger>
      <CollapsiblePanel>
        <CollapsibleContent className="typesetting-body">
          これは折りたたみ式の内容です。トリガーをクリックすると開閉します。
        </CollapsibleContent>
      </CollapsiblePanel>
    </CollapsibleRoot>
  );
}

```

Source: dist/components/collapsible/Collapsible.d.ts

## Types

```ts
type ButtonVariant = React.ComponentProps<typeof Button>['variant'];

type ButtonSize = React.ComponentProps<typeof Button>['size'];

type CollapsibleContentProps = useRender.ComponentProps<'div'>;
```

# Node Graph / PortAddButton

Source: src/components/node-graph/PortAddButton/Example.tsx

## Example

```tsx
import * as React from 'react';
import { PortAddButton } from '..';

type ExampleProps = React.ComponentProps<typeof PortAddButton>;

export function Example(props: ExampleProps) {
  const { label = 'Add Port', pinKeyColor = 'violet', ...rest } = props;

  return <PortAddButton {...rest} label={label} pinKeyColor={pinKeyColor} />;
}

```

Source: dist/components/node-graph/PortAddButton/PortAddButton.d.ts

## Types

```ts
export type PortAddButtonState = 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled';

export type PortAddButtonSide = 'input' | 'output';

export type PortAddButtonProps = {
    label?: string;
    icon?: IconProps['icon'];
    /**
     * クリック（またはEnter/Space）で呼び出されます。
     * マウス/ペンなどポインタ操作時はホバー位置に応じた `side` が渡され、キーボード操作時は `defaultSide` が渡されます。
     */
    onAdd?: (side: PortAddButtonSide) => void;
    /**
     * キーボード操作など、ポインタ位置が確定しない場合の既定 `side`。
     */
    defaultSide?: PortAddButtonSide;
    /**
     * `side` を固定します。未指定の場合、ホバー位置（左半分=input / 右半分=output）に応じて自動で切り替わります。
     */
    side?: PortAddButtonSide;
    /**
     * 見た目の状態を固定します（主に Storybook や静的プレビュー向け）。
     * `enabled` 以外を指定すると hover/press/focus による見た目変化を抑制します。
     */
    state?: PortAddButtonState;
    pinKeyColor?: PinKeyColor;
} & useRender.ComponentProps<'button'>;
```

# Scroll Area

Source: src/components/scroll-area/Example.tsx

## Example

```tsx
import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '..';

export function Example() {
  return (
    <ScrollAreaRoot style={{ width: 320, height: 196 }}>
      <ScrollAreaViewport>
        <ScrollAreaContent>
          <p className="typesetting-body">
            文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
          </p>
          <p className="typesetting-body">
            文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
          </p>
          <p className="typesetting-body">
            文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
          </p>
          <p className="typesetting-body">
            文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
          </p>
          <p className="typesetting-body">
            文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。文を増やしてスクロールが発生する状態にします。
          </p>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  );
}

```

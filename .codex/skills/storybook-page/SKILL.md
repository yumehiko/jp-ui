---
name: storybook-page
description: Storybook Pageの新規作成や既存Pageのレイアウト/余白/幅ルールの適用を行うためのスキル。特に「幅を満たす系（Field, InputBoxなど）」を含むページで、適切なmax-widthと中央配置ルールを守る必要がある場合に使う。
---

# Storybook Page

## 方針

- 既存のPageに合わせる: `src/pages/ColorsPage.*`, `src/pages/IconsPage.*`, `src/pages/TypesettingPage.*` を基準にする。
- Pageは基本「背景・文字色・上下余白」を持つラッパーで、**中身は適切なmax-widthのコンテナで中央寄せ**する。
- 「幅を満たす系（Field, InputBoxなど）」も、**コンテナの幅はmax-widthで制限し、要素はコンテナ幅100%** にする。
- ルールを守らない実装が出やすいので、**幅・中央寄せ・コンテナ構造は明示的にコード化**する。

## 実装ルール（必須）

1) **Pageラッパー**
   - `padding` と `background`/`color` を指定する。
   - 例: `padding: 32px 16px 80px; background-color: var(--surface); color: var(--on-surface);`

2) **中央寄せコンテナ**
   - `max-width` は **デフォルト 640px** とする。
   - 特別な指定がある場合のみ、その数値を使う（例: 一覧/グリッドで `max-width: 960px`）。
   - `margin: 0 auto; width: 100%;` を指定する。

3) **幅を満たす系アイテム（Field, InputBox など）**
   - **コンテナ内で `width: 100%`** とし、コンテナのmax-widthで制約する。
   - 画面全幅に引き伸ばさない。必ず中央寄せコンテナの中に置く。

## 推奨構成（最小形）

```tsx
// src/pages/FooPage.tsx
import styles from './FooPage.module.css';

export function FooPage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        {/* contents */}
      </div>
    </div>
  );
}
```

```css
/* src/pages/FooPage.module.css */
.Page {
  padding: 32px 16px 80px;
  background-color: var(--surface);
  color: var(--on-surface);
}

.Container {
  width: 100%;
  max-width: 640px; /* default. override when specified */
  margin: 0 auto;
}
```

## 追加メモ

- 既存Pageの実装に合わせて、`display: grid` や `gap` は必要に応じて追加する。
- ルールがぶれそうな場合は、**Containerの責務をコメントで短く明示**する。

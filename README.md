# jp-ui

[Base UI](https://base-ui.com/) をベースに構築したUIコンポーネントライブラリです。日本語圏での利用を前提に、和文向けのコンポーネント、日本語組版を補助するテキストスタイル、一貫した色彩設計を提供します。

## 特長

- Base UIの体験を保ったラッパーコンポーネント
- 日本語組版を補助するテキストスタイル
- 一貫した色彩設計のトークン

## インストール

- `pnpm add @yumehiko/jp-ui @base-ui/react @tabler/icons-react react react-dom`

## 使い方

```tsx
import '@yumehiko/jp-ui/style.css';
import { Button } from '@yumehiko/jp-ui';

export function App() {
  return <Button>OK</Button>;
}
```

## プロバイダー / テーマ

```tsx
import {
  TooltipProvider,
  ToastProvider,
  ToastViewport,
  createToastManager,
} from '@yumehiko/jp-ui';

const toastManager = createToastManager();

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <ToastProvider manager={toastManager}>
        {children}
        <ToastViewport />
      </ToastProvider>
    </TooltipProvider>
  );
}
```

ライトトークンはデフォルトで適用されます。ダークトークンを有効にするには、ルート要素に `theme-dark` を付与してください。必要に応じて `theme-light` を使うと、ライトテーマをサブツリーに限定できます。

## ドキュメント

- [概要](docs/overview.md)
- [使い方](docs/usage.md)
- [コンポーネント](docs/components.md)
- [トークン](docs/tokens.md)
- [アイコン](docs/icons.md)
- [Storybook（GitHub Pages）](https://yumehiko.github.io/jp-ui/)

## Codexスキル（任意）

コーディングエージェントがjp-uiの利用ガイドを読み込めるように、スキルをプロジェクトにコピーします。

```sh
mkdir -p .codex/skills && cp -R node_modules/@yumehiko/jp-ui/docs/skills/jp-ui-consumer .codex/skills/
```

## 開発者向け

このセクションはリポジトリ開発用です。パッケージ利用者が実行する必要はありません。

### スクリプト

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm storybook` (コンポーネント例)
- `pnpm build-storybook`
- `pnpm gen:tones`
- `pnpm gen:roles`
- `pnpm gen:roles-css`

feedback for jp-ui

目的
- Diff-pdf の全画面・全機能UIを jp-ui で置き換えるために、事前に必要な情報を整理する
- jp-ui の使い勝手テスト用のフィードバック観点をまとめる

現状のフロント構成（調査結果）
- Electron + Vite + React 構成
- 入口: `src/main.tsx`
- 画面本体: `src/App.tsx` と `src/components/**`
- 既存のスタイル: CSS ファイル個別（`src/components/**.css`, `src/index.css`, `src/App.css`）

jp-ui について、現状不足している情報
- README 現状は「インストール + Button の最小例のみ」
- インストール後の最小動作例（import 例と最小 JSX）
- 依存/peer 依存（例: react/react-dom/@base-ui/react のバージョン条件）
- 必須のグローバル CSS / reset / font 取り込み
- Theme/Provider の有無と、適用方法
- デザイントークン（color/space/typography/radius/shadow/motion）
- レイアウト/フォーム/ボタン/ダイアログなど主要コンポーネントの一覧と API
- Icon やアセットの依存（フォント/アイコン/画像）
- デフォルトの見た目を確認できる「スクリーンショット or デモ」

README を読んで分かったこと
- インストール手順と Button の最小 JSX は確認できる
- それ以外の利用情報（Provider/CSS/テーマ/トークン/API/依存）は未記載

jp-ui 側で共有してもらえると助かるもの（最小セット）
- npm パッケージの `README.md` に以下を追加
  - インストール手順（pnpm の例）
  - 3分で動く最小サンプル
  - Provider / Theme / CSS の導入手順
  - 基本コンポーネントの一覧（名前だけでも）
- jp-ui の簡易デモ
  - Storybook を静的公開するか、`docs/` に HTML でも可
  - 主要コンポーネントの見た目が一括で見れるページ
- トークン一覧のテキスト（CSS 変数 or JSON）

もし private で共有するなら（実務向けの現実案）
- npm パッケージの `README` を充実させる（最優先）
- 追加で、以下いずれかを選択
  - A: jp-ui リポジトリを一時的に read-only で共有
  - B: `pnpm pack` で tgz を渡し、docs を同梱
  - C: デモページの静的 HTML を共有（社内/ローカル配布でもOK）

この改修を進めるための具体的な質問
- jp-ui は Provider 必須？（例: `<JpUiProvider>` など）
- CSS の読み込みは 1 ファイル？複数？
- ボタン/入力/ダイアログ/トースト/メニューの API をざっくり教えてほしい
- デフォルトのフォントは何を想定している？

次の進め方の提案
- まず `README + 最小サンプル + 主要コンポーネント一覧` を共有
- 次に、Diff-pdf の主要画面を jp-ui で置き換える PoC を作成
- 問題点をこのファイルに追記して、jp-ui の改善に反映

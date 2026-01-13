# @yumehiko/jp-ui 改善要望メモ

LiveBlueprint から npm パッケージとして `@yumehiko/jp-ui` を利用し始めた段階で、使いづらさ・つまずきポイントがいくつか出たので整理します。  
（本ファイルは LiveBlueprint 側からのフィードバックであり、修正は `@yumehiko/jp-ui` 側に依頼する前提）

## 方針メモ
- アプリ（LiveBlueprint）の意味や仕様に依存する **ドメイン固有の振る舞い**（例: メニュー内容、選択ルール、接続制約など）を ui 側の責務にしないよう慎重に扱う。
- ui 側に要望する場合も、可能な限り「任意で使える汎用的な補助」や「レイアウト/表現の共通化」に留める。

## 背景
- LiveBlueprint は `pnpm` workspace（`apps/web`）で開発中。
- UI 要素は npm パッケージの `@yumehiko/jp-ui` を利用。
- Vite + React + TS 構成。

## 未解決の要望

開発中に見つけた改善点はここへ追記し、`@yumehiko/jp-ui` 側で反映されたら削除します。

- Chip コンポーネント（ラベル + 任意のアイコン + クリック可能）を追加してほしい。旧UIで多用していたため互換の受け皿が必要。
- Menu / ContextMenu / Dialog の基本的な「必須構成」サンプルが欲しい（MenuItem/Popup が MenuRoot 配下必須などの落とし穴が分かりにくい）。
- Canvas向けの ContextMenu 実装サンプルが欲しい（ContextMenuTrigger + Positioner + Popup + Content + Item の最小構成と、右クリック座標の扱いを含む）。
- Canvasのホイールズーム/パンの実装サンプルが欲しい（preventDefaultが必要な場合の推奨パターン、passiveイベントの扱い）。

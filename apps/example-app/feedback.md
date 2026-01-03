# フィードバックログ

## 2026-01-02

- コンポーネント/対象: Select
- 状況/スクリーン: Example App / ワークスペース作成
- 問題の種類: API不整合
- 再現手順: Select を組む際に items + SelectValue + label map + filled 判定を毎回書く
- 期待する挙動: ラベル解決と filled 判定の補助が用意されている
- 実際の挙動: Map と SelectValue の render を自前で書く必要がある
- 影響範囲: フォームの Select を増やすたびに記述が冗長になる
- 望ましい API / 振る舞い: value/label の配列だけで表示ラベルが解決できるユーティリティ
- 回避策（あれば）: 画面ごとに label map を用意する
- 参考（コード/スクショ/リンク）: `src/pages/ExampleAppPage.tsx`
- 対応: SelectRoot の items と Select.Value の標準挙動を利用するよう修正済み

- コンポーネント/対象: Autocomplete + InputBox
- 状況/スクリーン: Example App / ワークスペース作成
- 問題の種類: 使いづらい
- 再現手順: AutocompleteRoot と InputBox の両方で value/onValueChange を渡す
- 期待する挙動: 1箇所の state で済むようにまとめられる
- 実際の挙動: Root と InputBox への二重配線が必要
- 影響範囲: 入力フォームで Autocomplete を使うたびに手数が増える
- 望ましい API / 振る舞い: AutocompleteInputBox のようなラッパー提供
- 回避策（あれば）: 画面内でハンドラーを共有する
- 参考（コード/スクショ/リンク）: `src/pages/ExampleAppPage.tsx`
- 対応: AutocompleteInputBox を追加し、二重配線をラッパーに集約

- コンポーネント/対象: Slider / RadioGroup
- 状況/スクリーン: Example App / 通知・利用設定
- 問題の種類: API不整合
- 再現手順: Slider/RadioGroup のラベルをつけるために Base UI の Field/RadioGroup を直接使う
- 期待する挙動: jp-ui 側に Field ラッパー or Group ラッパーがある
- 実際の挙動: base UI を直接 import し、module の Label class も必要
- 影響範囲: ラッパー運用の統一方針に沿いにくい
- 望ましい API / 振る舞い: jp-ui に SliderField, RadioGroup のラッパー追加
- 回避策（あれば）: 画面側で base UI を直接使用
- 参考（コード/スクショ/リンク）: `src/pages/ExampleAppPage.tsx`
- 対応: Field の labelPlacement を追加し、RadioGroup ラッパーも新設

- コンポーネント/対象: Popover
- 状況/スクリーン: Example App / ワークスペース作成（ガイド）
- 問題の種類: 使いづらい
- 再現手順: ガイドボタンから Popover を開くと、下にある Field/Input の前面に出ない
- 期待する挙動: 常にフォーム要素より前面に表示される
- 実際の挙動: z-index が不足して重なり順が逆転する
- 影響範囲: Popover/Tooltip/Dropdown などのオーバーレイ系全般に波及
- 望ましい API / 振る舞い: overlay 用の z-index トークンを定義し一貫適用
- 回避策（あれば）: Popover 側で z-index を明示する
- 参考（コード/スクショ/リンク）: `src/components/popover/Popover.module.css`
- 対応: overlay 用 z-index トークンを導入して全体に適用

- コンポーネント/対象: Dialog / AlertDialog
- 状況/スクリーン: Example App / アクセス管理
- 問題の種類: 使いづらい
- 再現手順: Dialog を開いても背景が暗くならない
- 期待する挙動: 背景に scrim が入り、フォーカス対象が明確になる
- 実際の挙動: 暗色テーマでは scrim がほぼ見えない
- 影響範囲: Dialog/AlertDialog の視認性
- 望ましい API / 振る舞い: テーマに応じた scrim 不透明度トークンを持つ
- 回避策（あれば）: scrim の不透明度を上げる
- 参考（コード/スクショ/リンク）: `src/components/dialog/Dialog.module.css`
- 対応: ガイドは Popover だったため対象外。Dialog/AlertDialog は表示確認済み

## 2025-00-00

- コンポーネント/対象:
- 状況/スクリーン:
- 問題の種類:
- 再現手順:
- 期待する挙動:
- 実際の挙動:
- 影響範囲:
- 望ましい API / 振る舞い:
- 回避策（あれば）:
- 参考（コード/スクショ/リンク）:

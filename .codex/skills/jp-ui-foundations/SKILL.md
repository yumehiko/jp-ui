---
name: jp-ui-foundations
description: jp-uiのFoundation（色/タイポ/アイコン/形状/影）を参照して実装するためのスキル。Foundationトークンや関連ファイルが更新されたらこのスキルも更新する。
metadata:
  short-description: jp-ui foundation reference
---

# jp-ui Foundations

## 使いどころ
- コンポーネント実装時に Foundation トークン（色/タイポ/アイコン/形状/影）を参照する
- Tokens/roles/tones の更新があった場合に内容を追随

## 参照先（Source of Truth）
- 色トーン生成: `scripts/generate-tones.mjs`
- Role抽出: `scripts/extract-roles.mjs`
- Role CSS生成: `scripts/generate-roles-css.mjs`
- 色入力: `tokens/source.json`
- 色トーン出力: `tokens/tones.json`, `tokens/tones.css`
- Role出力: `tokens/roles.light.json`, `tokens/roles.dark.json`, `tokens/roles.css`
- 基本CSSトークン: `src/index.css`

## Foundation トークン
### Typography
- ベースフォント: `"Hiragino Sans", sans-serif`
- `typesetting-body` / `typesetting-betagumi` / `typesetting-tsumegumi`
- 見出し: `typesetting-display`, `typesetting-headline`, `typesetting-title`
- ラベル: `typesetting-label` (tsumegumi), `typesetting-editable-label` (betagumi)

### Color
- 役割色: `tokens/roles.css` から `--surface`, `--on-surface`, `--primary`, `--on-primary` など
- パレット色: `--red`, `--on-red`, `--red-container`, `--on-red-container`, `--inverse-red` など
- Fixed: `--true-white`, `--true-black`
- テーマクラス: `.theme-light`, `.theme-dark`

### Shape
- `--radius-none: 0`
- `--radius-xs: 4px`
- `--radius-s: 8px`
- `--radius-m: 12px`
- `--radius-l: 16px`
- `--radius-xl: 28px`
- `--radius-full: 8192px`

### Shadow
- `--shadow-rgb: 0 0 0`
- `--elevation-0..5`（blur: 0,8,12,16,24,32 / opacity 0.2）

### Icons
- アイコン: `src/assets/icons/Icon.tsx`
- 生成マップ: `src/assets/icons/iconMap.generated.ts`
- アイコン一覧: `src/pages/IconsPage.tsx`

## 更新時のルール
- Foundation トークンを更新したら、このスキルの記載も更新する
- 新しい参照先ファイルを追加したら `参照先` セクションに追加

# ExampleApp

Source: src/pages/ExampleAppPage.tsx

## Example

```tsx
import * as React from 'react';
import { Icon } from '../assets/icons/Icon';
import {
  IconDeviceFloppy,
  IconFolder,
  IconMenu,
  IconMinus,
  IconNote,
  IconPlus,
  IconSearch,
  IconSettings,
  IconTrash,
  IconUser,
} from '@tabler/icons-react';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
  AlertDialogActions,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogViewport,
  AutocompleteEmpty,
  AutocompleteInputBox,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Button,
  Checkbox,
  CheckboxGroup,
  DialogActions,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogViewport,
  Field,
  Form,
  IconButton,
  InputBox,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  Radio,
  RadioGroup,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  Separator,
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
  Switch,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '../components';
import checkboxStyles from '../components/checkbox/Checkbox.module.css';
import checkboxGroupStyles from '../components/checkbox-group/CheckboxGroup.module.css';
import numberFieldStyles from '../components/number-field/NumberField.module.css';
import radioStyles from '../components/radio/Radio.module.css';
import sliderStyles from '../components/slider/Slider.module.css';
import switchStyles from '../components/switch/Switch.module.css';
import styles from './ExampleAppPage.module.css';

type SelectOption = {
  label: string;
  value: string | null;
};

const regions: SelectOption[] = [
  { label: '東京', value: 'tokyo' },
  { label: '大阪', value: 'osaka' },
  { label: '福岡', value: 'fukuoka' },
  { label: '札幌', value: 'sapporo' },
];

const channels = [
  { label: '重要なお知らせ', value: 'critical' },
  { label: '週次の更新', value: 'weekly' },
  { label: 'ヒント/学習', value: 'tips' },
];

const tags = [
  'feature',
  'fix',
  'bug',
  'docs',
  'internal',
  'mobile',
  'component: dialog',
  'component: tabs',
  'component: autocomplete',
  'component: number-field',
];

const members = [
  { name: 'Yumehiko Kato', role: 'Owner', avatar: '/vite.svg' },
  { name: 'Riko Tanaka', role: 'Designer', avatar: '' },
  { name: 'Kenji Sato', role: 'Engineer', avatar: '' },
];

export function ExampleAppPage() {
  const [region, setRegion] = React.useState<string | null>(null);
  const [tagValue, setTagValue] = React.useState('component: dialog');
  const [volume, setVolume] = React.useState(40);
  const labelClassName = `typesetting-label typesetting-tsumegumi ${checkboxStyles.Label}`;
  const radioLabelClassName = `typesetting-label typesetting-tsumegumi ${radioStyles.Label}`;
  const sliderLabelClassName = `typesetting-label typesetting-tsumegumi ${sliderStyles.Label}`;
  const numberFieldLabelClassName = `typesetting-label typesetting-tsumegumi ${numberFieldStyles.Label}`;
  const switchLabelClassName = `typesetting-label typesetting-tsumegumi ${switchStyles.Label}`;

  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <TooltipProvider>
          <header className={styles.Header}>
            <div>
              <div className={`typesetting-headline typesetting-tsumegumi ${styles.Title}`}>
                Example App: ワークスペース設定
              </div>
              <p className={`typesetting-body typesetting-betagumi ${styles.Lead}`}>
                jp-ui を利用する側の観点で、頻出フローと複合コンポーネントの組み合わせを確認するための画面です。
              </p>
            </div>
            <div className={styles.HeaderActions}>
              <Button>
                <Icon icon={IconDeviceFloppy} size={20} />
                保存
              </Button>
              <Button variant="ghost">下書き</Button>
              <TooltipRoot>
                <TooltipTrigger
                  render={(props) => (
                    <IconButton {...props} aria-label="設定" variant="ghost">
                      <Icon icon={IconSettings} size={20} />
                    </IconButton>
                  )}
                />
                <TooltipPortal>
                  <TooltipPositioner sideOffset={10}>
                    <TooltipPopup>詳細設定</TooltipPopup>
                  </TooltipPositioner>
                </TooltipPortal>
              </TooltipRoot>
            </div>
          </header>
        </TooltipProvider>

        <div className={styles.Grid}>
          <section className={styles.Section} aria-labelledby="workspace-setup">
            <div className={styles.SectionHeader}>
              <div>
                <h2 id="workspace-setup" className={`typesetting-title ${styles.SectionTitle}`}>
                  ワークスペース作成
                </h2>
                <p className={`typesetting-body ${styles.SectionDescription}`}>
                  基本情報と通知設定の初期値をまとめて入力します。
                </p>
              </div>
              <PopoverRoot>
                <PopoverTrigger
                  render={(props) => (
                    <Button {...props} variant="ghost">
                      <Icon icon={IconNote} size={18} />
                      ガイド
                    </Button>
                  )}
                />
                <PopoverPortal>
                  <PopoverPositioner sideOffset={8}>
                    <PopoverPopup>
                      <PopoverTitle>ワークスペース名のルール</PopoverTitle>
                      <PopoverDescription>
                        文字数は 2 - 40 文字です。チーム名やプロジェクト名に合わせて設定してください。
                      </PopoverDescription>
                      <PopoverClose render={(props) => <Button {...props}>閉じる</Button>} />
                    </PopoverPopup>
                  </PopoverPositioner>
                </PopoverPortal>
              </PopoverRoot>
            </div>

            <Form className={styles.Form} onSubmit={(event) => event.preventDefault()}>
              <div className={styles.FieldGrid}>
                <Field
                  label="ワークスペース名"
                  supportingText="チーム名・サービス名に合わせた識別子を入力します。"
                >
                  <InputBox
                    placeholder="例: jp-ui design"
                    leadingIcon={<Icon icon={IconFolder} size={20} />}
                    className={styles.InputFull}
                  />
                </Field>
                <Field
                  label="プロジェクトコード"
                  supportingText="請求や分析で使う短縮コードです。"
                  invalid
                  errorMessage="英数字とハイフンのみで入力してください。"
                >
                  <InputBox
                    placeholder="例: jp-ui-core"
                    leadingIcon={<Icon icon={IconNote} size={20} />}
                    className={styles.InputFull}
                  />
                </Field>
              </div>

              <div className={styles.FieldGrid}>
                <div className={styles.ControlColumn}>
                  <div className={`typesetting-label typesetting-tsumegumi ${styles.ControlLabel}`}>
                    地域
                  </div>
                  <SelectRoot items={regions} value={region} onValueChange={setRegion}>
                    <SelectTrigger
                      floatingLabel={<span>地域</span>}
                      leadingIcon={<Icon icon={IconMenu} size={20} />}
                      filled={region !== null}
                      className={styles.SelectTrigger}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectPositioner sideOffset={8}>
                        <SelectPopup>
                          <SelectList>
                            {regions.map((item) => (
                              <SelectItem key={item.label} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectList>
                        </SelectPopup>
                      </SelectPositioner>
                    </SelectPortal>
                  </SelectRoot>
                  <p className={`typesetting-caption ${styles.ControlHint}`}>
                    現在は日本リージョンのみ対応です。
                  </p>
                </div>

                <AutocompleteInputBox
                  items={tags}
                  value={tagValue}
                  onValueChange={setTagValue}
                  placeholder="例: component"
                  leadingIcon={<Icon icon={IconSearch} size={20} />}
                  className={styles.InputFull}
                  fieldProps={{ label: 'タグ検索' }}
                >
                  <AutocompletePortal>
                    <AutocompletePositioner sideOffset={8}>
                      <AutocompletePopup>
                        <AutocompleteEmpty>該当タグがありません</AutocompleteEmpty>
                        <AutocompleteList>
                          {(tag: string) => (
                            <AutocompleteItem key={tag} value={tag}>
                              {tag}
                            </AutocompleteItem>
                          )}
                        </AutocompleteList>
                      </AutocompletePopup>
                    </AutocompletePositioner>
                  </AutocompletePortal>
                </AutocompleteInputBox>
              </div>

              <div className={styles.SplitRow}>
                <CheckboxGroup
                  aria-labelledby="channels-label"
                  defaultValue={['critical', 'weekly']}
                  className={styles.CheckboxStack}
                >
                  <div id="channels-label" className={`${checkboxGroupStyles.Caption} ${styles.ControlLabel}`}>
                    通知チャネル
                  </div>
                  {channels.map((option) => (
                    <label key={option.value} className={labelClassName}>
                      <Checkbox name="channels" value={option.value} />
                      {option.label}
                    </label>
                  ))}
                </CheckboxGroup>

                <div className={styles.RadioGroup}>
                  <div className={`typesetting-label typesetting-tsumegumi ${styles.ControlLabel}`}>
                    公開範囲
                  </div>
                  <RadioGroup defaultValue="private">
                    <label className={radioLabelClassName}>
                      <Radio value="private" />
                      非公開（招待のみ）
                    </label>
                    <label className={radioLabelClassName}>
                      <Radio value="public" />
                      公開（リンク共有）
                    </label>
                  </RadioGroup>
                </div>
              </div>

              <Separator className={styles.Divider} />

              <div className={styles.ActionRow}>
                <Button type="submit">
                  <Icon icon={IconPlus} size={20} />
                  作成する
                </Button>
                <Button variant="outlined">下書き保存</Button>
              </div>
            </Form>
          </section>

          <section className={styles.Section} aria-labelledby="workspace-preferences">
            <div className={styles.SectionHeader}>
              <div>
                <h2 id="workspace-preferences" className={`typesetting-title ${styles.SectionTitle}`}>
                  通知・利用設定
                </h2>
                <p className={`typesetting-body ${styles.SectionDescription}`}>
                  既存ユーザー向けの利用設定をまとめて調整します。
                </p>
              </div>
            </div>

            <div className={styles.ControlColumn}>
              <label className={switchLabelClassName}>
                <Switch defaultChecked />
                重要アラートを優先する
              </label>
              <label className={switchLabelClassName}>
                <Switch />
                作業ログを毎日送信する
              </label>
            </div>

            <Field
              name="volume"
              label="通知音量"
              labelPlacement="start"
              labelClassName={sliderLabelClassName}
              className={styles.ControlColumn}
            >
              <SliderRoot
                value={volume}
                onValueChange={(next) => {
                  const [nextValue] = Array.isArray(next) ? next : [next];
                  setVolume(nextValue);
                }}
              >
                <SliderControl>
                  <SliderTrack>
                    <SliderIndicator />
                    <SliderThumb aria-label="通知音量" />
                  </SliderTrack>
                </SliderControl>
                <SliderValue>{([value]) => `${value}%`}</SliderValue>
              </SliderRoot>
            </Field>

            <NumberFieldRoot defaultValue={8} min={1} max={60} className={styles.ControlColumn}>
              <NumberFieldScrubArea>
                <label className={numberFieldLabelClassName}>アーカイブ日数</label>
              </NumberFieldScrubArea>
              <NumberFieldGroup>
                <NumberFieldDecrement aria-label="減らす">
                  <Icon icon={IconMinus} size={16} />
                </NumberFieldDecrement>
                <NumberFieldInput />
                <NumberFieldIncrement aria-label="増やす">
                  <Icon icon={IconPlus} size={16} />
                </NumberFieldIncrement>
              </NumberFieldGroup>
            </NumberFieldRoot>

            <AccordionRoot>
              <AccordionItem>
                <AccordionHeader>
                  <AccordionTrigger>高度な通知ルール</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  <AccordionContent className={`typesetting-body ${styles.AccordionContent}`}>
                    指定された時間帯のみ通知を許可する設定が入ります。夜間の抑制などに活用できます。
                  </AccordionContent>
                </AccordionPanel>
              </AccordionItem>
            </AccordionRoot>
          </section>
        </div>

        <section className={styles.Section} aria-labelledby="workspace-members">
          <div className={styles.SectionHeader}>
            <div>
              <h2 id="workspace-members" className={`typesetting-title ${styles.SectionTitle}`}>
                アクセス管理
              </h2>
              <p className={`typesetting-body ${styles.SectionDescription}`}>
                メンバー招待と権限の切り替えをタブで管理します。
              </p>
            </div>
            <div className={styles.SectionActions}>
              <DialogRoot>
                <DialogTrigger
                  render={(props) => (
                    <Button {...props} variant="tonal">
                      <Icon icon={IconUser} size={20} />
                      招待を送る
                    </Button>
                  )}
                />
                <DialogPortal>
                  <DialogBackdrop />
                  <DialogViewport>
                    <DialogPopup>
                      <DialogContent>
                        <DialogTitle>メンバーを追加</DialogTitle>
                        <DialogDescription>
                          メールアドレスを入力して招待を送信します。
                        </DialogDescription>
                        <Field label="メールアドレス">
                          <InputBox placeholder="example@jp-ui.dev" />
                        </Field>
                      </DialogContent>
                      <DialogActions>
                        <DialogClose render={(props) => (
                          <Button {...props} variant="ghost">閉じる</Button>
                        )} />
                        <DialogClose render={(props) => (
                          <Button {...props}>送信</Button>
                        )} />
                      </DialogActions>
                    </DialogPopup>
                  </DialogViewport>
                </DialogPortal>
              </DialogRoot>

              <DialogRoot>
                <DialogTrigger
                  render={(props) => (
                    <Button {...props} variant="ghost">
                      Nested Dialog
                    </Button>
                  )}
                />
                <DialogPortal>
                  <DialogBackdrop />
                  <DialogViewport>
                    <DialogPopup>
                      <DialogContent>
                        <DialogTitle>親Dialog</DialogTitle>
                        <DialogDescription>
                          親Dialogの本文です。ここからNested Dialogを開けます。
                        </DialogDescription>
                      </DialogContent>
                      <DialogActions>
                        <DialogRoot>
                          <DialogTrigger
                            render={(props) => (
                              <Button {...props} variant="outlined">
                                子Dialogを開く
                              </Button>
                            )}
                          />
                          <DialogPortal>
                            <DialogBackdrop />
                            <DialogViewport>
                              <DialogPopup>
                                <DialogContent>
                                  <DialogTitle>子Dialog</DialogTitle>
                                  <DialogDescription>
                                    これはNested Dialogの本文です。もう1行分のテキストを追加して、
                                    2行表示の見た目を確認します。
                                  </DialogDescription>
                                </DialogContent>
                                <DialogActions>
                                  <DialogRoot>
                                    <DialogTrigger
                                      render={(props) => (
                                        <Button {...props} variant="outlined">
                                          孫Dialogを開く
                                        </Button>
                                      )}
                                    />
                                    <DialogPortal>
                                      <DialogBackdrop />
                                      <DialogViewport>
                                        <DialogPopup>
                                          <DialogContent>
                                            <DialogTitle>孫Dialog</DialogTitle>
                                            <DialogDescription>
                                              これは第三階層のDialogです。
                                            </DialogDescription>
                                          </DialogContent>
                                          <DialogActions>
                                            <DialogClose render={(props) => (
                                              <Button {...props}>閉じる</Button>
                                            )} />
                                          </DialogActions>
                                        </DialogPopup>
                                      </DialogViewport>
                                    </DialogPortal>
                                  </DialogRoot>
                                  <DialogClose render={(props) => (
                                    <Button {...props}>閉じる</Button>
                                  )} />
                                </DialogActions>
                              </DialogPopup>
                            </DialogViewport>
                          </DialogPortal>
                        </DialogRoot>
                        <DialogClose
                          render={(props) => (
                            <Button {...props} variant="ghost">
                              親を閉じる
                            </Button>
                          )}
                        />
                      </DialogActions>
                    </DialogPopup>
                  </DialogViewport>
                </DialogPortal>
              </DialogRoot>

              <AlertDialogRoot>
                <AlertDialogTrigger
                  render={(props) => (
                    <Button {...props} variant="outlined">
                      <Icon icon={IconTrash} size={20} />
                      削除
                    </Button>
                  )}
                />
                <AlertDialogPortal>
                  <AlertDialogBackdrop />
                  <AlertDialogViewport>
                    <AlertDialogPopup>
                      <AlertDialogContent>
                        <AlertDialogTitle>ワークスペースを削除しますか？</AlertDialogTitle>
                        <AlertDialogDescription>
                          この操作は取り消せません。関連するデータも削除されます。
                        </AlertDialogDescription>
                      </AlertDialogContent>
                      <AlertDialogActions>
                        <AlertDialogClose render={(props) => (
                          <Button {...props} variant="ghost">キャンセル</Button>
                        )} />
                        <AlertDialogClose render={(props) => (
                          <Button {...props}>削除する</Button>
                        )} />
                      </AlertDialogActions>
                    </AlertDialogPopup>
                  </AlertDialogViewport>
                </AlertDialogPortal>
              </AlertDialogRoot>
            </div>
          </div>

          <TabsRoot defaultValue="members">
            <TabsList>
              <TabsTab value="members" label="メンバー" icon={<Icon icon={IconUser} size={20} />} />
              <TabsTab value="roles" label="権限" icon={<Icon icon={IconSettings} size={20} />} />
              <TabsTab value="logs" label="ログ" icon={<Icon icon={IconNote} size={20} />} />
              <TabsIndicator />
            </TabsList>

            <TabsPanel value="members">
              <div className={styles.PanelCard}>
                {members.map((member) => (
                  <div key={member.name} className={styles.MemberRow}>
                    <AvatarRoot className={styles.Avatar}>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                    </AvatarRoot>
                    <div>
                      <div className={`typesetting-label ${styles.MemberName}`}>{member.name}</div>
                      <div className={`typesetting-caption ${styles.MemberRole}`}>{member.role}</div>
                    </div>
                    <Button variant="ghost" className={styles.MemberAction}>編集</Button>
                  </div>
                ))}
              </div>
            </TabsPanel>

            <TabsPanel value="roles">
              <div className={`typesetting-body ${styles.PanelCard}`}>
                権限テンプレートを選択してチーム全体の標準ロールを切り替えます。
              </div>
            </TabsPanel>

            <TabsPanel value="logs">
              <div className={`typesetting-body ${styles.PanelCard}`}>
                直近の操作ログが表示されます。フィルタと検索は別画面で扱います。
              </div>
            </TabsPanel>
          </TabsRoot>
        </section>
      </div>
    </div>
  );
}

```

Source: src/components/checkbox/Checkbox.module.css

## Styles

```css
.Label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--on-surface);
  cursor: pointer;
}

.Label:has(.Checkbox[data-disabled]) {
  opacity: 0.2;
  cursor: not-allowed;
}

.Checkbox {
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  color: var(--inverse-on-surface);
  cursor: pointer;
  outline: none;

  --checkbox-state-opacity: 0;
}

.Checkbox::after {
  content: "";
  position: absolute;
  left: calc(-1 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  top: calc(-1 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  width: calc(24px + 2 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  height: calc(24px + 2 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  border: var(--focus-ring-width) solid var(--focus-ring-color);
  border-radius: var(--radius-full);
  opacity: 0;
  pointer-events: none;
}

.Box {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-xs);
  border: 1px solid var(--outline);
  background-color: transparent;
}

.StateLayer {
  position: absolute;
  left: -4px;
  top: -4px;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background-color: var(--on-surface);
  opacity: var(--checkbox-state-opacity);
  transition: opacity 150ms ease-out;
  pointer-events: none;
}

.Indicator {
  position: absolute;
  left: 6px;
  top: 6px;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--inverse-on-surface);
}

.Icon {
  width: 12px;
  height: 12px;
}

.Checkbox[data-unchecked] .Indicator {
  opacity: 0;
}

.Checkbox[data-checked] .Box {
  border: 0;
  background-color: var(--inverse-surface);
}

.Checkbox[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

.Checkbox[data-disabled] .StateLayer {
  opacity: 0;
}

.Checkbox:focus-visible,
.Checkbox[data-focused] {
  --checkbox-state-opacity: 0.12;
}

.Checkbox:focus-visible::after,
.Checkbox[data-focused]::after {
  opacity: 1;
}

@media (hover: hover) {
  .Checkbox:hover:not([data-disabled]) {
    --checkbox-state-opacity: 0.08;
  }

  .Label:hover .Checkbox:not([data-disabled]) {
    --checkbox-state-opacity: 0.08;
  }
}

.Checkbox:active:not([data-disabled]) {
  --checkbox-state-opacity: 0.16;
}

.Label:active .Checkbox:not([data-disabled]) {
  --checkbox-state-opacity: 0.16;
}

```

Source: src/components/checkbox-group/CheckboxGroup.module.css

## Styles

```css
.Group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
  color: var(--on-surface);
}

.Caption {
  font-family: var(--font-brand);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-label);
  line-height: var(--line-height-label);
  letter-spacing: var(--letter-spacing-label);
  color: var(--on-surface);
}

```

Source: src/components/number-field/NumberField.module.css

## Styles

```css
.Root {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  color: var(--on-surface);
}

.ScrubArea {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ew-resize;
  user-select: none;
}

.ScrubArea[data-disabled],
.ScrubArea[data-readonly] {
  cursor: default;
}

.ScrubAreaCursor {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--on-surface-variant);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
}

.Label {
  font-family: var(--font-brand);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-label);
  line-height: var(--line-height-label);
  letter-spacing: var(--letter-spacing-label);
  color: var(--on-surface);
}

.Group {
  display: flex;
  align-items: center;
}

.Input {
  box-sizing: border-box;
  width: 96px;
  height: 40px;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--outline);
  border-bottom: 1px solid var(--outline);
  border-left: 0;
  border-right: 0;
  background-color: transparent;
  color: var(--on-surface);
  font-family: var(--font-brand);
  font-size: var(--font-size-editable-label);
  font-weight: var(--font-weight-editable-label);
  line-height: var(--line-height-editable-label);
  letter-spacing: var(--letter-spacing-editable-label);
  font-variant-numeric: tabular-nums;
  text-align: center;
  outline: none;
}

.Input:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
  z-index: 1;
}

.Decrement,
.Increment {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  border: 1px solid var(--outline);
  background-color: var(--surface-container);
  color: var(--on-surface);
  cursor: pointer;
  user-select: none;
  outline: none;
}

.Decrement {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--radius-s);
  border-bottom-left-radius: var(--radius-s);
}

.Increment {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--radius-s);
  border-bottom-right-radius: var(--radius-s);
}

.Decrement:focus-visible,
.Increment:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.Decrement[data-disabled],
.Increment[data-disabled],
.Input[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

@media (hover: hover) {
  .Decrement:hover:not([data-disabled]),
  .Increment:hover:not([data-disabled]) {
    background-color: var(--surface-container-high);
  }
}

.Decrement:active:not([data-disabled]),
.Increment:active:not([data-disabled]) {
  background-color: var(--surface-container-highest);
}

.Icon {
  width: 16px;
  height: 16px;
}

```

Source: src/components/radio/Radio.module.css

## Styles

```css
.Label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--on-surface);
  cursor: pointer;
}

.Label:has(.Radio[data-disabled]) {
  opacity: 0.2;
  cursor: not-allowed;
}

.Radio {
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  --radio-state-opacity: 0;
}

.Radio::after {
  content: "";
  position: absolute;
  left: calc(-1 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  top: calc(-1 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  width: calc(24px + 2 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  height: calc(24px + 2 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  border: var(--focus-ring-width) solid var(--focus-ring-color);
  border-radius: var(--radius-full);
  opacity: 0;
  pointer-events: none;
}

.Base {
  position: absolute;
  left: 3px;
  top: 3px;
  width: 18px;
  height: 18px;
  border-radius: var(--radius-full);
  border: 1px solid var(--on-surface);
  background-color: transparent;
}

.StateLayer {
  position: absolute;
  left: -4px;
  top: -4px;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background-color: var(--on-surface);
  opacity: var(--radio-state-opacity);
  transition: opacity 150ms ease-out;
  pointer-events: none;
}

.Indicator {
  position: absolute;
  left: 7px;
  top: 7px;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background-color: var(--on-surface);
}

.Radio[data-unchecked] .Indicator {
  opacity: 0;
}

.Radio[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

.Radio[data-disabled] .StateLayer {
  opacity: 0;
}

.Radio:focus-visible,
.Radio[data-focused] {
  --radio-state-opacity: 0.12;
}

.Radio:focus-visible::after,
.Radio[data-focused]::after {
  opacity: 1;
}

@media (hover: hover) {
  .Radio:hover:not([data-disabled]) {
    --radio-state-opacity: 0.08;
  }

  .Label:hover .Radio:not([data-disabled]) {
    --radio-state-opacity: 0.08;
  }
}

.Radio:active:not([data-disabled]) {
  --radio-state-opacity: 0.16;
}

.Label:active .Radio:not([data-disabled]) {
  --radio-state-opacity: 0.16;
}

```

Source: src/components/slider/Slider.module.css

## Styles

```css
.Root {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  color: var(--on-surface);
}

.Label {
  color: var(--on-surface);
}

.Control {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--slider-thumb-size, 24px);
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  touch-action: none;
  user-select: none;

  --slider-thumb-size: 24px;
  --slider-track-opacity: 0.08;
  --slider-indicator-color: var(--on-surface-variant);
  --slider-thumb-handle-color: var(--on-surface-variant);
  --slider-thumb-handle-inset: 4px;
  --slider-thumb-ring-inset: 2px;
  --slider-thumb-ring-opacity: 0;
}

.Control[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

.Track {
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: var(--radius-full);
  overflow: visible;
  z-index: 0;
}

.Track::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: var(--on-surface-variant);
  opacity: var(--slider-track-opacity);
  transition: opacity 150ms ease-out;
}

.Indicator {
  position: relative;
  height: 100%;
  border-radius: inherit;
  background-color: var(--slider-indicator-color);
  transition: background-color 150ms ease-out;
  z-index: 0;
}

.Thumb {
  position: absolute;
  width: var(--slider-thumb-size);
  height: var(--slider-thumb-size);
  border-radius: var(--radius-full);
  background-color: transparent;
  z-index: 2;
}

.Thumb::before {
  content: "";
  position: absolute;
  inset: var(--slider-thumb-handle-inset);
  border-radius: inherit;
  background-color: var(--slider-thumb-handle-color);
  box-shadow: var(--elevation-1);
  pointer-events: none;
  transition:
    inset 150ms ease-out,
    background-color 150ms ease-out;
}

.Thumb::after {
  content: "";
  position: absolute;
  inset: var(--slider-thumb-ring-inset);
  border-radius: inherit;
  border: 2px solid var(--outline);
  opacity: var(--slider-thumb-ring-opacity);
  pointer-events: none;
  transition:
    inset 150ms ease-out,
    opacity 150ms ease-out;
}

.Thumb[data-focused] {
  --slider-thumb-handle-inset: 2px;
  --slider-thumb-handle-color: var(--on-surface);
  --slider-thumb-ring-inset: 0;
  --slider-thumb-ring-opacity: 1;
}

.Thumb[data-dragging],
.Thumb:active:not([data-disabled]) {
  --slider-thumb-handle-inset: 0;
  --slider-thumb-handle-color: var(--on-surface);
  --slider-thumb-ring-inset: -2px;
  --slider-thumb-ring-opacity: 0;
}

@media (hover: hover) {
  .Control:hover:not([data-disabled]) {
    --slider-track-opacity: 0.12;
    --slider-indicator-color: var(--on-surface);
  }

  .Thumb:hover:not([data-disabled]) {
    --slider-thumb-handle-inset: 2px;
    --slider-thumb-ring-inset: 0;
  }
}

.Control:active:not([data-disabled]),
.Control[data-dragging] {
  --slider-track-opacity: 0.16;
  --slider-indicator-color: var(--on-surface);
}

.Value {
  align-self: flex-start;
  font-family: var(--font-brand);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-label);
  line-height: var(--line-height-label);
  letter-spacing: var(--letter-spacing-label);
  color: var(--on-surface);
}

```

Source: src/components/switch/Switch.module.css

## Styles

```css
.Label {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  color: var(--on-surface);
  cursor: pointer;
}

.Label:has(.Switch[data-disabled]) {
  opacity: 0.2;
  cursor: not-allowed;
}

.Switch {
  position: relative;
  display: inline-flex;
  width: var(--switch-width);
  height: var(--switch-height);
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  outline: none;

  --switch-base-color: var(--on-surface);
  --switch-base-opacity: 0.08;
  --switch-state-color: var(--on-surface);
  --switch-state-opacity: 0;
  --switch-width: 56px;
  --switch-height: 32px;
  --switch-thumb-size: 24px;
  --switch-thumb-offset: 4px;
  --switch-thumb-translate: 24px;
  --switch-icon-size: 20px;
}

.Switch::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--radius-full);
  background-color: var(--switch-base-color);
  opacity: var(--switch-base-opacity);
}

.Switch::after {
  content: "";
  position: absolute;
  inset: calc(-1 * (var(--focus-ring-offset) + var(--focus-ring-width)));
  border: var(--focus-ring-width) solid var(--focus-ring-color);
  border-radius: var(--radius-full);
  opacity: 0;
  pointer-events: none;
}

.StateLayer {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-full);
  background-color: var(--switch-state-color);
  opacity: var(--switch-state-opacity);
  transition: opacity 150ms ease-out;
  pointer-events: none;
}

.Thumb {
  position: absolute;
  left: var(--switch-thumb-offset);
  top: var(--switch-thumb-offset);
  width: var(--switch-thumb-size);
  height: var(--switch-thumb-size);
  border-radius: var(--radius-full);
  background-color: var(--on-surface);
  color: var(--on-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 150ms ease-out, background-color 150ms ease-out,
    width 150ms ease-out, height 150ms ease-out, left 150ms ease-out,
    top 150ms ease-out;
}

.Icon {
  width: var(--switch-icon-size);
  height: var(--switch-icon-size);
}

.Switch[data-checked] {
  --switch-base-opacity: 1;
  --switch-state-color: var(--surface);
  --switch-thumb-size: 28px;
  --switch-thumb-offset: 2px;
  --switch-thumb-translate: 24px;
}

.Switch[data-checked] .Thumb {
  transform: translateX(var(--switch-thumb-translate));
  background-color: var(--surface);
}

.Switch[data-disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

.Switch[data-disabled] .StateLayer {
  opacity: 0;
}

.Switch[data-size='small'] {
  --switch-width: 42px;
  --switch-height: 24px;
  --switch-thumb-size: 18px;
  --switch-thumb-offset: 3px;
  --switch-thumb-translate: 18px;
  --switch-icon-size: 15px;
}

.Switch[data-size='small'][data-checked] {
  --switch-thumb-size: 20px;
  --switch-thumb-offset: 2px;
  --switch-thumb-translate: 18px;
}

.Switch:focus-visible,
.Switch[data-focused] {
  --switch-state-opacity: 0.12;
}

.Switch:focus-visible::after,
.Switch[data-focused]::after {
  opacity: 1;
}

@media (hover: hover) {
  .Switch:hover:not([data-disabled]) {
    --switch-state-opacity: 0.08;
  }

  .Label:hover .Switch:not([data-disabled]) {
    --switch-state-opacity: 0.08;
  }
}

.Switch:active:not([data-disabled]) {
  --switch-state-opacity: 0.16;
}

.Label:active .Switch:not([data-disabled]) {
  --switch-state-opacity: 0.16;
}

```

Source: src/pages/ExampleAppPage.module.css

## Styles

```css
.Page {
  padding: 32px 16px 80px;
  background-color: var(--surface);
  color: var(--on-surface);
}

.Container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  /* Container keeps readable width for the two-column demo layout. */
}

.Header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.Title {
  margin: 0;
}

.Lead {
  margin: 12px 0 0;
  color: var(--on-surface-variant);
}

.HeaderActions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.Grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.Section {
  display: grid;
  gap: 16px;
  padding: 20px;
  border-radius: var(--radius-l);
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
}

.SectionHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.SectionTitle {
  margin: 0;
}

.SectionDescription {
  margin: 8px 0 0;
  color: var(--on-surface-variant);
}

.SectionActions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.Form {
  display: grid;
  gap: 16px;
}

.FieldGrid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.FieldGrid > * {
  min-width: 0;
}

.ControlColumn {
  display: grid;
  gap: 12px;
  min-width: 0;
}

.InputFull {
  width: 100%;
}

.SelectTrigger {
  width: 100%;
}

.ControlLabel {
  color: var(--on-surface);
}

.ControlHint {
  margin: 0;
  color: var(--on-surface-variant);
}

.SplitRow {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
}

.SplitRow > * {
  min-width: 0;
}

.CheckboxStack {
  display: grid;
  gap: 12px;
}

.RadioGroup {
  display: grid;
  gap: 12px;
}

.Divider {
  margin: 8px 0;
}

.ActionRow {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.AccordionContent {
  color: var(--on-surface-variant);
}

.PanelCard {
  padding: 16px;
  border-radius: var(--radius-s);
  background: var(--surface-container-low);
  color: var(--on-surface);
  display: grid;
  gap: 12px;
}

.MemberRow {
  display: flex;
  align-items: center;
  gap: 12px;
}

.MemberRow:not(:last-child) {
  padding-bottom: 12px;
  border-bottom: 1px solid var(--outline-variant);
}

.Avatar {
  width: 40px;
  height: 40px;
}

.MemberName {
  color: var(--on-surface);
}

.MemberRole {
  color: var(--on-surface-variant);
}

.MemberAction {
  margin-left: auto;
}

@media (max-width: 960px) {
  .Header {
    flex-direction: column;
  }

  .Grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .FieldGrid,
  .SplitRow {
    grid-template-columns: minmax(0, 1fr);
  }

  .SectionActions {
    flex-wrap: wrap;
  }
}

```

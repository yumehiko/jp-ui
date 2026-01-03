import * as React from 'react';
import { Icon } from '../assets/icons/Icon';
import { AccordionContent, AccordionHeader, AccordionItem, AccordionPanel, AccordionRoot, AccordionTrigger } from '../components/accordion/Accordion';
import { AlertDialogActions, AlertDialogBackdrop, AlertDialogClose, AlertDialogContent, AlertDialogDescription, AlertDialogPopup, AlertDialogPortal, AlertDialogRoot, AlertDialogTitle, AlertDialogTrigger, AlertDialogViewport } from '../components/alert-dialog/AlertDialog';
import { AvatarFallback, AvatarImage, AvatarRoot } from '../components/avatar/Avatar';
import { Button } from '../components/button/Button';
import { IconButton } from '../components/button/IconButton';
import { Checkbox } from '../components/checkbox/Checkbox';
import { CheckboxGroup } from '../components/checkbox-group/CheckboxGroup';
import { DialogActions, DialogBackdrop, DialogClose, DialogContent, DialogDescription, DialogPopup, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, DialogViewport } from '../components/dialog/Dialog';
import { Field } from '../components/field/Field';
import { Form } from '../components/form/Form';
import { InputBox } from '../components/input-box/InputBox';
import { NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot, NumberFieldScrubArea } from '../components/number-field/NumberField';
import { PopoverClose, PopoverDescription, PopoverPopup, PopoverPortal, PopoverPositioner, PopoverRoot, PopoverTitle, PopoverTrigger } from '../components/popover/Popover';
import { Radio } from '../components/radio/Radio';
import { RadioGroup } from '../components/radio-group/RadioGroup';
import { SelectItem, SelectList, SelectPopup, SelectPortal, SelectPositioner, SelectRoot, SelectTrigger, SelectValue } from '../components/select/Select';
import { Separator } from '../components/separator/Separator';
import { SliderControl, SliderIndicator, SliderRoot, SliderThumb, SliderTrack, SliderValue } from '../components/slider/Slider';
import { Switch } from '../components/switch/Switch';
import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from '../components/tabs/Tabs';
import { AutocompleteEmpty, AutocompleteItem, AutocompleteList, AutocompletePopup, AutocompletePortal, AutocompletePositioner } from '../components/autocomplete/Autocomplete';
import { AutocompleteInputBox } from '../components/autocomplete/AutocompleteInputBox';
import { TooltipPopup, TooltipPortal, TooltipPositioner, TooltipProvider, TooltipRoot, TooltipTrigger } from '../components/tooltip/Tooltip';
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
                <Icon name="device-floppy" size={20} />
                保存
              </Button>
              <Button variant="ghost">下書き</Button>
              <TooltipRoot>
                <TooltipTrigger
                  render={(props) => (
                    <IconButton {...props} aria-label="設定" variant="ghost">
                      <Icon name="settings" size={20} />
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
                      <Icon name="note" size={18} />
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
                    leadingIcon={<Icon name="folder" size={20} />}
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
                    leadingIcon={<Icon name="note" size={20} />}
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
                      leadingIcon={<Icon name="menu" size={20} />}
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
                  leadingIcon={<Icon name="search" size={20} />}
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
                  <Icon name="plus" size={20} />
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
              <SliderRoot value={volume} onValueChange={([next]) => setVolume(next)}>
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
                  <Icon name="minus" size={16} />
                </NumberFieldDecrement>
                <NumberFieldInput />
                <NumberFieldIncrement aria-label="増やす">
                  <Icon name="plus" size={16} />
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
                      <Icon name="user" size={20} />
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

              <AlertDialogRoot>
                <AlertDialogTrigger
                  render={(props) => (
                    <Button {...props} variant="outlined">
                      <Icon name="trash" size={20} />
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
              <TabsTab value="members" label="メンバー" icon={<Icon name="user" size={20} />} />
              <TabsTab value="roles" label="権限" icon={<Icon name="settings" size={20} />} />
              <TabsTab value="logs" label="ログ" icon={<Icon name="note" size={20} />} />
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

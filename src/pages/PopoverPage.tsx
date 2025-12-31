import { Button } from '../components/button/Button';
import { Field } from '../components/field/Field';
import { InputBox } from '../components/input-box/InputBox';
import { Separator } from '../components/separator/Separator';
import { Switch } from '../components/switch/Switch';
import {
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from '../components/popover/Popover';
import styles from './PopoverPage.module.css';

export function PopoverPage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <section className={styles.Section}>
          <h2 className={`typesetting-title ${styles.SectionTitle}`}>
            Quick settings
          </h2>
          <div className={styles.ExampleRow}>
            <PopoverRoot>
              <PopoverTrigger className={styles.Trigger}>
                表示オプション
              </PopoverTrigger>
              <PopoverPortal>
                <PopoverPositioner sideOffset={8}>
                  <PopoverPopup className={styles.Popup}>
                    <div className={styles.Content}>
                      <div className={styles.Header}>
                        <PopoverTitle>表示設定</PopoverTitle>
                        <PopoverDescription>
                          直近の検索と表示条件を調整します。
                        </PopoverDescription>
                      </div>
                      <Field label="キーワード">
                        <InputBox placeholder="例: 進捗, 依頼" />
                      </Field>
                      <div className={styles.Row}>
                        <span className={styles.RowLabel}>未読のみ</span>
                        <Switch defaultChecked />
                      </div>
                      <Separator className={styles.Separator} />
                      <div className={styles.Actions}>
                        <Button variant="ghost">クリア</Button>
                        <PopoverClose
                          render={(props) => (
                            <Button {...props} variant="filled">
                              適用
                            </Button>
                          )}
                        />
                      </div>
                    </div>
                  </PopoverPopup>
                </PopoverPositioner>
              </PopoverPortal>
            </PopoverRoot>
          </div>
        </section>
        <section className={styles.Section}>
          <h2 className={`typesetting-title ${styles.SectionTitle}`}>
            Hover hint
          </h2>
          <div className={styles.ExampleRow}>
            <PopoverRoot>
              <PopoverTrigger openOnHover className={styles.Trigger}>
                ショートカット
              </PopoverTrigger>
              <PopoverPortal>
                <PopoverPositioner sideOffset={8}>
                  <PopoverPopup className={styles.Popup}>
                    <div className={styles.Content}>
                      <div className={styles.Header}>
                        <PopoverTitle>キーボード操作</PopoverTitle>
                        <PopoverDescription>Shift + / で一覧表示</PopoverDescription>
                      </div>
                      <div className={styles.ShortcutList}>
                        <div className={styles.ShortcutRow}>
                          <span className={styles.ShortcutLabel}>新規作成</span>
                          <span className={styles.ShortcutKey}>N</span>
                        </div>
                        <div className={styles.ShortcutRow}>
                          <span className={styles.ShortcutLabel}>検索</span>
                          <span className={styles.ShortcutKey}>S</span>
                        </div>
                      </div>
                    </div>
                  </PopoverPopup>
                </PopoverPositioner>
              </PopoverPortal>
            </PopoverRoot>
          </div>
        </section>
      </div>
    </div>
  );
}

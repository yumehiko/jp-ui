import { Icon } from '../assets/icons/Icon';
import { Icons } from '../assets/icons/icons';
import { Toggle, ToggleGroup } from '../components';
import toggleStyles from '../components/toggle/Toggle.module.css';
import styles from './TogglePage.module.css';

export function TogglePage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <section className={styles.Section}>
          <h2 className={`typesetting-title ${styles.SectionTitle}`}>Toggle</h2>
          <div className={styles.Row}>
            <Toggle aria-label="お気に入り">
              <Icon icon={Icons.Dummy} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle aria-label="お気に入り" defaultPressed>
              <Icon icon={Icons.Dummy} size={24} className={toggleStyles.Icon} />
            </Toggle>
          </div>
        </section>

        <section className={styles.Section}>
          <h2 className={`typesetting-title ${styles.SectionTitle}`}>
            Toggle Group (single)
          </h2>
          <ToggleGroup defaultValue={['bold']} className={styles.Group}>
            <Toggle value="bold" aria-label="太字">
              <Icon icon={Icons.Dummy} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle value="italic" aria-label="斜体">
              <Icon icon={Icons.Dummy} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle value="underline" aria-label="下線">
              <Icon icon={Icons.Dummy} size={24} className={toggleStyles.Icon} />
            </Toggle>
          </ToggleGroup>
        </section>

        <section className={styles.Section}>
          <h2 className={`typesetting-title ${styles.SectionTitle}`}>
            Toggle Group (multiple)
          </h2>
          <ToggleGroup
            multiple
            defaultValue={['bold', 'underline']}
            className={styles.Group}
          >
            <Toggle value="bold" aria-label="太字">
              <Icon icon={Icons.Dummy} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle value="italic" aria-label="斜体">
              <Icon icon={Icons.Dummy} size={24} className={toggleStyles.Icon} />
            </Toggle>
            <Toggle value="underline" aria-label="下線">
              <Icon icon={Icons.Dummy} size={24} className={toggleStyles.Icon} />
            </Toggle>
          </ToggleGroup>
        </section>
      </div>
    </div>
  );
}

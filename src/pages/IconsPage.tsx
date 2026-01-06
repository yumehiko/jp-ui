import { Icon } from '../assets/icons/Icon';
import { Icons } from '../assets/icons/icons';
import styles from './IconsPage.module.css';

const iconEntries = Object.entries(Icons).sort(([a], [b]) => a.localeCompare(b));

const toTitle = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2');

export function IconsPage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <h1 className={`typesetting-title ${styles.Title}`}>Icons</h1>
        <div className={styles.Grid}>
          {iconEntries.map(([name, IconComponent]) => (
            <div key={name} className={styles.IconItem}>
              <Icon icon={IconComponent} size={24} />
              <span className={`typesetting-label ${styles.IconLabel}`}>
                {toTitle(name)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Icon } from '../assets/icons/Icon';
import { icons } from '../assets/icons/icons';
import type { IconName } from '../assets/icons/icons';
import styles from './IconsPage.module.css';

const iconNames = (Object.keys(icons) as IconName[]).sort();

const toTitle = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

export function IconsPage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <h1 className={`typesetting-title ${styles.Title}`}>Icons</h1>
        <div className={styles.Grid}>
          {iconNames.map((name) => (
            <div key={name} className={styles.IconItem}>
              <Icon name={name} size={24} />
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

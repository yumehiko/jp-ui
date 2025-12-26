import roles from '../../tokens/roles.light.json';
import { ColorChip } from '../components/color-chip/ColorChip';
import styles from './ColorsPage.module.css';

type RoleEntry = {
  palette: string;
  tone: number;
};

type RoleGroups = Record<string, Record<string, RoleEntry>>;

const roleGroups = roles as RoleGroups;

const toTitle = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

export function ColorsPage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        {Object.entries(roleGroups).map(([groupName, groupRoles]) => (
          <section className={styles.Section} key={groupName}>
            <h2 className={`typesetting-title ${styles.SectionTitle}`}>
              {toTitle(groupName)}
            </h2>
            <div className={styles.Grid}>
              {Object.keys(groupRoles).map((roleName) => (
                <ColorChip
                  key={roleName}
                  name={toTitle(roleName)}
                  role={roleName}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

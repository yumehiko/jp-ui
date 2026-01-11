import roles from '../../tokens/roles.light.json';
import { ColorChip } from '../components';
import styles from './ColorsPage.module.css';

type RoleEntry = {
  palette: string;
  tone: number;
};

type RoleGroups = Record<string, Record<string, RoleEntry>>;

const toTitle = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const roleGroups = roles as RoleGroups;

const baseRoleOrder = [
  'primary',
  'on-primary',
  'primary-container',
  'on-primary-container',
  'inverse-primary',
  'primary-fixed',
  'primary-fixed-dim',
  'on-primary-fixed',
  'on-primary-fixed-variant',
];

const buildGroupRoleOrder = (groupName: string) =>
  baseRoleOrder.map((role) =>
    role
      .replace(/^primary/, groupName)
      .replace(/-primary/g, `-${groupName}`)
      .replace(/^on-primary/, `on-${groupName}`)
      .replace(/^inverse-primary/, `inverse-${groupName}`),
  );

export function ThemePreviewPage() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        {Object.entries(roleGroups).map(([groupName, groupRoles]) => (
          <section className={styles.Section} key={groupName}>
            <h2 className={`typesetting-title ${styles.SectionTitle}`}>
              {toTitle(groupName)}
            </h2>
            <div className={styles.Grid}>
              {Object.keys(groupRoles)
                .sort((a, b) => {
                  const order = buildGroupRoleOrder(groupName);
                  const indexA = order.indexOf(a);
                  const indexB = order.indexOf(b);
                  if (indexA === -1 && indexB === -1) {
                    return a.localeCompare(b);
                  }
                  if (indexA === -1) return 1;
                  if (indexB === -1) return -1;
                  return indexA - indexB;
                })
                .map((roleName) => (
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

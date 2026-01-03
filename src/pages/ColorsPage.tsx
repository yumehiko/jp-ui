import roles from '../../tokens/roles.light.json';
import source from '../../tokens/source.json';
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
const paletteNames = Object.keys(source.palette ?? {});
const paletteRoleOrder = [
  { suffix: '', label: (name: string) => toTitle(name) },
  { suffix: '', prefix: 'on-', label: (name: string) => `On ${toTitle(name)}` },
  { suffix: '-container', label: (name: string) => `${toTitle(name)} Container` },
  {
    suffix: '-container',
    prefix: 'on-',
    label: (name: string) => `On ${toTitle(name)} Container`,
  },
  { suffix: '', prefix: 'inverse-', label: (name: string) => `Inverse ${toTitle(name)}` },
  { suffix: '-fixed', label: (name: string) => `${toTitle(name)} Fixed` },
  { suffix: '-fixed-dim', label: (name: string) => `${toTitle(name)} Fixed Dim` },
  { suffix: '-fixed', prefix: 'on-', label: (name: string) => `On ${toTitle(name)} Fixed` },
  {
    suffix: '-fixed-variant',
    prefix: 'on-',
    label: (name: string) => `On ${toTitle(name)} Fixed Variant`,
  },
];

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
        {paletteNames.map((paletteName) => (
          <section className={styles.Section} key={paletteName}>
            <h2 className={`typesetting-title ${styles.SectionTitle}`}>
              {toTitle(paletteName)}
            </h2>
            <div className={styles.Grid}>
              {paletteRoleOrder.map(({ suffix, prefix = '', label }) => (
                <ColorChip
                  key={`${prefix}${paletteName}${suffix}`}
                  name={label(paletteName)}
                  role={`${prefix}${paletteName}${suffix}`}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

import * as React from 'react';
import styles from './ColorChip.module.css';

type ColorChipProps = {
  name: string;
  role: string;
};

const resolveTextRole = (role: string) => {
  if (role === 'inverse-surface') {
    return 'inverse-on-surface';
  }

  if (role === 'scrim' || role === 'shadow') {
    return 'true-white';
  }

  if (role.startsWith('on-') && role.endsWith('-fixed-variant')) {
    return role.replace(/^on-/, '').replace(/-variant$/, '');
  }

  if (role.startsWith('on-') && role.endsWith('-fixed')) {
    return role.replace(/^on-/, '');
  }

  if (role.startsWith('on-')) {
    return role.slice(3);
  }

  if (role.endsWith('-fixed-dim')) {
    return `on-${role.replace(/-fixed-dim$/, '-fixed-variant')}`;
  }

  if (role.endsWith('-fixed')) {
    return `on-${role}`;
  }

  if (role.startsWith('surface')) {
    return 'on-surface';
  }

  return `on-${role}`;
};

export function ColorChip({ name, role }: ColorChipProps) {
  const textRole = resolveTextRole(role);
  const style = {
    backgroundColor: `var(--${role}, var(--surface))`,
    color: `var(--${textRole}, var(--on-surface))`,
  } as React.CSSProperties;

  return (
    <div className={styles.Chip} style={style}>
      <span className={`typesetting-label ${styles.Label}`}>{name}</span>
    </div>
  );
}

import type { SVGProps } from 'react';

import { iconMap } from './iconMap.generated';
import type { IconName } from './iconMap.generated';
export type { IconName } from './iconMap.generated';

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, className, style, ...rest }: IconProps) {
  const Component = iconMap[name];
  const mergedClass = ['ui-icon', className].filter(Boolean).join(' ');

  return (
    <Component
      className={mergedClass}
      width={size}
      height={size}
      focusable="false"
      aria-hidden={rest['aria-label'] ? undefined : true}
      style={{ display: 'inline-block', flexShrink: 0, color: 'currentColor', ...style }}
      {...rest}
    />
  );
}

export const icons = iconMap;

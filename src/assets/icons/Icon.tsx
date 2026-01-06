import type { ComponentType, SVGProps } from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

export type IconProps = useRender.ComponentProps<'svg'> & {
  size?: number;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export function Icon({ render, icon, size = 24, ...props }: IconProps) {
  const IconComponent = icon;
  const mergedRender = render ?? (IconComponent ? <IconComponent /> : undefined);
  const element = useRender({
    defaultTagName: 'svg',
    render: mergedRender,
    props: mergeProps<'svg'>(
      {
        className: 'ui-icon',
        width: size,
        height: size,
        focusable: 'false',
        'aria-hidden': props['aria-label'] ? undefined : true,
        style: {
          display: 'inline-block',
          flexShrink: 0,
          color: 'currentColor',
        },
      },
      props,
    ),
  });

  return element;
}

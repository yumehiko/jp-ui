import { forwardRef, type CSSProperties } from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import styles from './Pin.module.css';

export type PinShape = 'circle' | 'capsule';
export type PinState = 'enabled' | 'hovered' | 'focused' | 'dragged';
export type PinKeyColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'pea'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'achromatic';

export type PinProps = {
  shape?: PinShape;
  state?: PinState;
  /**
   * 接続状態。`true` のとき中央の空洞が埋まり、`data-connected="true"` が付与されます。
   */
  isConnected?: boolean;
  keyColor?: PinKeyColor;
} & useRender.ComponentProps<'button'>;

const overlayOpacityByState: Record<PinState, number> = {
  enabled: 0,
  hovered: 0.08,
  focused: 0.12,
  dragged: 0.16,
};

export const Pin = forwardRef<HTMLButtonElement, PinProps>(function Pin(
  {
    render,
    shape = 'circle',
    state = 'enabled',
    isConnected = false,
    keyColor = 'red',
    type = 'button',
    style,
    ...rest
  },
  ref,
) {
  const isStaticState = state !== 'enabled';
  const overlayOpacity = overlayOpacityByState[state] ?? 0;
  const paletteVar = `--${keyColor}`;

  const cssVars: CSSProperties & Record<`--${string}`, string> = {
    '--pin-base-color': `var(${paletteVar}, var(--error))`,
    '--pin-empty-color': 'var(--surface)',
    '--pin-overlay-color': `var(${paletteVar}, var(--error))`,
    '--pin-overlay-opacity': overlayOpacity.toString(),
    '--pin-focus-opacity': state === 'focused' ? '1' : '0',
    '--pin-empty-opacity': isConnected ? '0' : '1',
  };
  const mergedStyle = { ...cssVars, ...(style ?? {}) } as CSSProperties & Record<`--${string}`, string>;

  const dataAttributes = {
    'data-shape': shape,
    'data-state': state,
    'data-static-state': isStaticState ? 'true' : undefined,
    'data-connected': isConnected ? 'true' : 'false',
  } as Record<string, string | undefined>;

  const mergedProps = mergeProps<'button'>(
    {
      type,
      className: styles.root,
      'aria-pressed': isConnected,
      style: mergedStyle,
      ...dataAttributes,
      children: (
        <>
          <span className={styles.focusRing} aria-hidden />
          <span className={styles.base} aria-hidden />
          <span className={styles.empty} aria-hidden />
          <span className={styles.drag} aria-hidden />
          <span className={styles.overlay} aria-hidden />
        </>
      ),
    } as useRender.ComponentProps<'button'>,
    rest,
  );

  mergedProps.ref = ref;

  const element = useRender({
    defaultTagName: 'button',
    render,
    props: mergedProps,
  });

  return element;
});

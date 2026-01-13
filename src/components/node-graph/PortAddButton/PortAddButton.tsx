import {
  forwardRef,
  type CSSProperties,
  type MouseEventHandler,
  type PointerEvent,
  type PointerEventHandler,
  useMemo,
  useState,
} from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { Icon, type IconProps } from '../../../assets/icons/Icon';
import { IconPlus } from '@tabler/icons-react';
import type { PinKeyColor } from '../Pin';
import styles from './PortAddButton.module.css';

export type PortAddButtonState = 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled';
export type PortAddButtonSide = 'input' | 'output';

export type PortAddButtonProps = {
  label?: string;
  icon?: IconProps['icon'];
  /**
   * クリック（またはEnter/Space）で呼び出されます。
   * マウス/ペンなどポインタ操作時はホバー位置に応じた `side` が渡され、キーボード操作時は `defaultSide` が渡されます。
   */
  onAdd?: (side: PortAddButtonSide) => void;
  /**
   * キーボード操作など、ポインタ位置が確定しない場合の既定 `side`。
   */
  defaultSide?: PortAddButtonSide;
  /**
   * `side` を固定します。未指定の場合、ホバー位置（左半分=input / 右半分=output）に応じて自動で切り替わります。
   */
  side?: PortAddButtonSide;
  /**
   * 見た目の状態を固定します（主に Storybook や静的プレビュー向け）。
   * `enabled` 以外を指定すると hover/press/focus による見た目変化を抑制します。
   */
  state?: PortAddButtonState;
  pinKeyColor?: PinKeyColor;
} & useRender.ComponentProps<'button'>;

const stateLayerOpacity: Record<Exclude<PortAddButtonState, 'enabled' | 'disabled'>, number> = {
  hovered: 0.08,
  focused: 0.12,
  pressed: 0.16,
};

/** `ref` は root の `<button>` に forward されます。 */
export const PortAddButton = forwardRef<HTMLButtonElement, PortAddButtonProps>(function PortAddButton(
  {
    label = 'Add Port',
    icon = IconPlus,
    onAdd,
    defaultSide = 'input',
    side,
    state = 'enabled',
    pinKeyColor = 'red',
    type = 'button',
    disabled,
    onPointerEnter,
    onPointerMove,
    onPointerLeave,
    onClick,
    render,
    ...rest
  },
  ref,
) {
  const { className, style, ...rootProps } = rest;
  const isStaticState = state !== 'enabled';
  const isDisabled = state === 'disabled' || disabled;

  const [internalSide, setInternalSide] = useState<PortAddButtonSide | undefined>(undefined);
  const isControlledSide = side !== undefined;
  const visualSide = (isControlledSide ? side : internalSide) ?? (isStaticState ? defaultSide : undefined);

  const overlayOpacity = isDisabled ? 0 : stateLayerOpacity[state as keyof typeof stateLayerOpacity] ?? 0;

  type CSSVars = CSSProperties & Record<`--${string}`, string>;
  const cssVars = useMemo(
    () =>
      ({
        '--port-add-button-overlay-color': 'var(--on-surface)',
        '--port-add-button-overlay-opacity': overlayOpacity.toString(),
        '--pin-base-color': `var(--${pinKeyColor}, var(--error))`,
        '--pin-empty-color': 'var(--surface)',
      }) as CSSVars,
    [overlayOpacity, pinKeyColor],
  );
  const mergedStyle = { ...cssVars, ...(style ?? {}) } as CSSVars;

  const resolveSideFromPointer = (event: PointerEvent<HTMLButtonElement>): PortAddButtonSide => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    return x < rect.width / 2 ? 'input' : 'output';
  };

  const handlePointerMove: PointerEventHandler<HTMLButtonElement> = (event) => {
    onPointerMove?.(event);
    if (event.defaultPrevented || isDisabled) return;
    if (isControlledSide) return;
    setInternalSide(resolveSideFromPointer(event));
  };

  const handlePointerEnter: PointerEventHandler<HTMLButtonElement> = (event) => {
    onPointerEnter?.(event);
    if (event.defaultPrevented || isDisabled) return;
    if (isControlledSide) return;
    setInternalSide(resolveSideFromPointer(event));
  };

  const handlePointerLeave: PointerEventHandler<HTMLButtonElement> = (event) => {
    onPointerLeave?.(event);
    if (event.defaultPrevented) return;
    if (isControlledSide) return;
    setInternalSide(undefined);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || isDisabled) return;
    const chosen: PortAddButtonSide = visualSide ?? defaultSide;
    onAdd?.(chosen);
  };

  const dataSide = visualSide;
  const dataAttributes = {
    'data-state': state,
    'data-side': dataSide,
    'data-static-state': isStaticState ? 'true' : undefined,
  } as Record<string, string | undefined>;

  const mergedProps = mergeProps<'button'>(
    {
      className: styles.root,
      type,
      disabled: isDisabled,
      style: mergedStyle,
      onPointerEnter: handlePointerEnter,
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
      onClick: handleClick,
      ...dataAttributes,
      children: (
        <>
          <span className={styles.pinSlot} data-side="input" aria-hidden>
            <span className={styles.pin}>
              <span className={styles.pinFocusRing} aria-hidden />
              <span className={styles.pinBase} aria-hidden />
              <span className={styles.pinEmpty} aria-hidden />
            </span>
          </span>
          <span className={styles.labelArea}>
            <span className={styles.icon} aria-hidden>
              <Icon icon={icon} size={24} />
            </span>
            <span className={styles.label}>{label}</span>
          </span>
          <span className={styles.pinSlot} data-side="output" aria-hidden>
            <span className={styles.pin}>
              <span className={styles.pinFocusRing} aria-hidden />
              <span className={styles.pinBase} aria-hidden />
              <span className={styles.pinEmpty} aria-hidden />
            </span>
          </span>
        </>
      ),
    } as useRender.ComponentProps<'button'>,
    { ...rootProps, className },
  );

  mergedProps.ref = ref;

  const element = useRender({
    defaultTagName: 'button',
    render,
    props: mergedProps,
  });

  return element;
});

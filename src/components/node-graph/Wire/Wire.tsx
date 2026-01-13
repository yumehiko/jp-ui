import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import type { PinKeyColor } from '../Pin';

export type WireCurve = 'bezier' | 'straight';
export type WireStyle = 'solid' | 'dash';
export type WireState = 'enabled' | 'focused';
export type WireCoordinateSystem = 'boundingBox' | 'world';

export type WirePoint = {
  x: number;
  y: number;
};

export type WireProps = {
  start: WirePoint;
  end: WirePoint;
  curve?: WireCurve;
  styleType?: WireStyle;
  state?: WireState;
  keyColor?: PinKeyColor;
  viewWidth?: number;
  viewHeight?: number;
  viewBoxX?: number;
  viewBoxY?: number;
  coordinateSystem?: WireCoordinateSystem;
} & Omit<useRender.ComponentProps<'svg'>, 'start' | 'end'>;

const dashArray = '10 8';

const computeBezierPath = (start: WirePoint, end: WirePoint, bend: number) => {
  const dx = end.x - start.x;
  const offset = Math.max(24, Math.abs(dx) * bend);
  const direction = Math.sign(dx) || 1;
  const c1 = { x: start.x + offset * direction, y: start.y };
  const c2 = { x: end.x - offset * direction, y: end.y };
  return `M ${start.x},${start.y} C ${c1.x},${c1.y} ${c2.x},${c2.y} ${end.x},${end.y}`;
};

export function Wire({
  start,
  end,
  curve = 'bezier',
  styleType = 'solid',
  state = 'enabled',
  keyColor = 'red',
  viewWidth,
  viewHeight,
  viewBoxX = 0,
  viewBoxY = 0,
  coordinateSystem,
  render,
  ...rest
}: WireProps) {
  const { className, style, onClick, onPointerDown, onPointerUp, ...restProps } = rest;
  const isFocused = state === 'focused';
  const strokeWidth = 2;
  const color = `var(--${keyColor}, var(--error))`;
  const dash = styleType === 'dash' ? dashArray : undefined;

  const padding = 8;
  const minX = Math.min(start.x, end.x) - padding;
  const minY = Math.min(start.y, end.y) - padding;
  const maxX = Math.max(start.x, end.x) + padding;
  const maxY = Math.max(start.y, end.y) + padding;
  const width = maxX - minX;
  const height = maxY - minY;
  const hasViewSize = viewWidth !== undefined || viewHeight !== undefined;
  const useWorldCoordinates =
    coordinateSystem === 'world' ||
    (coordinateSystem === undefined && hasViewSize);
  const resolvedViewWidth = viewWidth ?? width;
  const resolvedViewHeight = viewHeight ?? height;

  const translatedStart = useWorldCoordinates ? start : { x: start.x - minX, y: start.y - minY };
  const translatedEnd = useWorldCoordinates ? end : { x: end.x - minX, y: end.y - minY };

  const path =
    curve === 'straight'
      ? `M ${translatedStart.x},${translatedStart.y} L ${translatedEnd.x},${translatedEnd.y}`
      : computeBezierPath(translatedStart, translatedEnd, 0.5);

  const filter = isFocused
    ? `drop-shadow(0 0 1px ${color}) drop-shadow(0 0 4px ${color})`
    : undefined;

  const mergedStyle = { overflow: 'visible', pointerEvents: 'none', ...(style ?? {}) } as typeof style;
  const element = useRender({
    defaultTagName: 'svg',
    render,
    props: mergeProps<'svg'>(
      {
        className,
        style: mergedStyle,
        width: resolvedViewWidth,
        height: resolvedViewHeight,
        viewBox: `${viewBoxX} ${viewBoxY} ${resolvedViewWidth} ${resolvedViewHeight}`,
        preserveAspectRatio: 'none',
        'aria-hidden': true,
        children: (
          <>
            <path
              d={path}
              fill="none"
              stroke="transparent"
              strokeWidth={Math.max(12, strokeWidth * 6)}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={dash}
              data-wire="true"
              style={{ pointerEvents: 'stroke' }}
              onClick={onClick}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            />
            <path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={dash}
              style={{ filter, pointerEvents: 'none' }}
            />
          </>
        ),
      },
      restProps,
    ),
  });

  return element;
}

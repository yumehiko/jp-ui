import type { Ref } from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import { Pin, type PinKeyColor, type PinProps, type PinShape, type PinState } from '../Pin';
import {
  PortLabel,
  type PortLabelDirection,
  type PortLabelProps,
  type PortLabelState,
} from '../PortLabel';
import styles from './Port.module.css';

export type PortDirection = PortLabelDirection;

type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined;
};

export type PortProps = {
  direction?: PortDirection;
  label?: string;
  pinState?: PinState;
  pinShape?: PinShape;
  pinConnected?: boolean;
  pinKeyColor?: PinKeyColor;
  labelState?: PortLabelState;
  pinProps?: (Omit<PinProps, 'state' | 'shape' | 'isConnected' | 'keyColor'> & DataAttributes);
  pinRef?: Ref<HTMLButtonElement>;
  labelProps?: (Omit<PortLabelProps, 'portName' | 'direction' | 'state'> & DataAttributes);
} & useRender.ComponentProps<'div'>;

export function Port({
  direction = 'output',
  label = 'Port Name',
  pinState = 'enabled',
  pinShape = 'circle',
  pinConnected = false,
  pinKeyColor = 'red',
  labelState = 'enabled',
  pinProps,
  pinRef,
  labelProps,
  render,
  ...rest
}: PortProps) {
  const isOutput = direction === 'output';
  const mergedPinStyle = { flexShrink: 0, ...(pinProps?.style ?? {}) };
  const mergedLabelStyle = { width: '100%', ...(labelProps?.style ?? {}) };

  const children = isOutput ? (
    <>
      <PortLabel
        {...labelProps}
        portName={label}
        direction="output"
        state={labelState}
        style={mergedLabelStyle}
      />
      <Pin
        {...pinProps}
        state={pinState}
        shape={pinShape}
        isConnected={pinConnected}
        keyColor={pinKeyColor}
        style={mergedPinStyle}
        ref={pinRef}
      />
    </>
  ) : (
    <>
      <Pin
        {...pinProps}
        state={pinState}
        shape={pinShape}
        isConnected={pinConnected}
        keyColor={pinKeyColor}
        style={mergedPinStyle}
        ref={pinRef}
      />
      <PortLabel
        {...labelProps}
        portName={label}
        direction="input"
        state={labelState}
        style={mergedLabelStyle}
      />
    </>
  );

  const dataAttributes = {
    'data-direction': direction,
  } as Record<string, string | undefined>;

  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>(
      { className: styles.root, children, ...dataAttributes } as useRender.ComponentProps<'div'>,
      rest,
    ),
  });

  return element;
}

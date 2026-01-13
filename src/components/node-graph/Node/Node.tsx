import type { CSSProperties, KeyboardEventHandler, MouseEventHandler, ReactNode } from 'react';
import { useState } from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import { Icon, type IconProps } from '../../../assets/icons/Icon';
import { IconAlertCircle, IconBox } from '@tabler/icons-react';
import { type PinKeyColor, type PinShape, type PinState } from '../Pin';
import { Port, type PortProps } from '../Port';
import { PortAddButton, type PortAddButtonSide } from '../PortAddButton';
import { type PortLabelState } from '../PortLabel';
import styles from './Node.module.css';

export type NodeState = 'enabled' | 'selected';

export type NodeProps = {
  title?: string;
  showLeadingIcon?: boolean;
  leadingIcon?: IconProps['icon'];
  valid?: boolean;
  state?: NodeState;
  selectable?: boolean;
  showPortAddButton?: boolean;
  onAddPort?: (side: PortAddButtonSide) => void;
  disableInternalSelection?: boolean;
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
  keyColor?: PinKeyColor;
  outputs?: ReactNode | ReactNode[];
  inputs?: ReactNode | ReactNode[];
  pinShape?: PinShape;
  pinState?: PinState;
  pinConnected?: boolean;
  pinKeyColor?: PinKeyColor;
  labelState?: PortLabelState;
  defaultPortProps?: Omit<PortProps, 'direction' | 'label' | 'children'>;
} & useRender.ComponentProps<'div'>;

export function Node({
  title = 'Node Title',
  showLeadingIcon = false,
  leadingIcon = IconBox,
  valid = true,
  state,
  selectable = true,
  showPortAddButton,
  onAddPort,
  disableInternalSelection = false,
  selected,
  defaultSelected = false,
  onSelectedChange,
  keyColor = 'red',
  outputs,
  inputs,
  pinShape = 'circle',
  pinState = 'enabled',
  pinConnected = false,
  pinKeyColor = keyColor,
  labelState = 'enabled',
  defaultPortProps,
  render,
  ...rest
}: NodeProps) {
  const { className, style, onClick, onKeyDown, ...rootProps } = rest;
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const isControlledSelected = selected !== undefined;
  const isSelected = isControlledSelected ? selected : internalSelected;
  const visualState: NodeState = state ?? (isSelected ? 'selected' : 'enabled');
  const isInteractive = selectable && state === undefined;
  const shouldShowPortAddButton = showPortAddButton ?? visualState === 'selected';

  const cssVars: CSSProperties = {
    '--node-key-color': `var(--${keyColor}, var(--error))`,
    '--node-key-container': `var(--${keyColor}-container, var(--surface-container))`,
    '--node-on-key': `var(--on-${keyColor}, var(--on-error))`,
    '--node-on-key-container': `var(--on-${keyColor}-container, var(--on-surface))`,
    '--node-outline-opacity': isSelected ? '1' : '0',
  } as CSSProperties;
  const mergedStyle = { ...cssVars, ...(style ?? {}) } as CSSProperties;

  const normalize = (items?: ReactNode | ReactNode[]) =>
    items === undefined ? undefined : Array.isArray(items) ? items : [items];

  const defaultOutputs: ReactNode[] = [
    <Port
      key="output-1"
      direction="output"
      label="Port Name"
      pinState={pinState}
      pinShape={pinShape}
      pinConnected={pinConnected}
      pinKeyColor={pinKeyColor}
      labelState={labelState}
      {...defaultPortProps}
    />,
  ];

  const defaultInputs: ReactNode[] = [
    <Port
      key="input-1"
      direction="input"
      label="Port Name"
      pinState={pinState}
      pinShape={pinShape}
      pinConnected={pinConnected}
      pinKeyColor={pinKeyColor}
      labelState={labelState}
      {...defaultPortProps}
    />,
    <Port
      key="input-2"
      direction="input"
      label="Port Name"
      pinState={pinState}
      pinShape={pinShape}
      pinConnected={pinConnected}
      pinKeyColor={pinKeyColor}
      labelState={labelState}
      {...defaultPortProps}
    />,
  ];

  const outputPorts = normalize(outputs) ?? defaultOutputs;
  const inputPorts = normalize(inputs) ?? defaultInputs;

  const toggleSelected = () => {
    const next = !isSelected;
    if (!disableInternalSelection && !isControlledSelected) setInternalSelected(next);
    onSelectedChange?.(next);
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || !isInteractive) return;
    toggleSelected();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyDown?.(event);
    if (!isInteractive) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSelected();
    }
  };

  const children = (
    <>
      <div className={styles.title} data-valid={valid ? 'true' : 'false'}>
        {showLeadingIcon ? (
          <span className={styles.titleIcon} aria-hidden>
            <Icon icon={leadingIcon} size={24} />
          </span>
        ) : null}
        <span className={styles.titleText}>{title}</span>
        {valid ? null : (
          <span className={styles.titleIcon} aria-hidden>
            <Icon icon={IconAlertCircle} size={24} />
          </span>
        )}
      </div>
      <span className={styles.stateBorder} aria-hidden />
      <div className={styles.outputs}>
        {outputPorts.map((node, index) => (
          <div className={styles.portRow} key={`output-${index}`}>
            {node}
          </div>
        ))}
      </div>
      <div className={styles.inputs}>
        {inputPorts.map((node, index) => (
          <div className={styles.portRow} key={`input-${index}`}>
            {node}
          </div>
        ))}
      </div>
      {shouldShowPortAddButton ? (
        <div className={styles.addButtonRow}>
          <PortAddButton
            className={styles.portAddButton}
            pinKeyColor={pinKeyColor}
            onAdd={onAddPort}
          />
        </div>
      ) : null}
    </>
  );

  const dataAttributes = {
    'data-state': visualState,
    'data-valid': valid ? 'true' : 'false',
  } as Record<string, string | undefined>;

  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>(
      {
        className: styles.root,
        style: mergedStyle,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        role: isInteractive ? 'button' : undefined,
        tabIndex: isInteractive ? 0 : undefined,
        ...dataAttributes,
      } as useRender.ComponentProps<'div'>,
      { ...rootProps, className, children },
    ),
  });

  return element;
}

import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import styles from './InputBox.module.css';

type InputBoxProps = {
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClear?: () => void;
  clearLabel?: string;
  filled?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  floatingLabel?: React.ReactNode;
  className?: string;
};

type ControlClassName =
  | string
  | ((state: unknown) => string | undefined)
  | undefined;

const mergeControlClassName = (
  className: ControlClassName,
  controlClassName: string,
): ControlClassName => {
  if (!className) return controlClassName;
  if (typeof className === 'function') {
    return (state: unknown) =>
      [controlClassName, className(state)].filter(Boolean).join(' ');
  }
  return [controlClassName, className].filter(Boolean).join(' ');
};

export function InputBox({
  children,
  leadingIcon,
  trailingIcon,
  onClear,
  clearLabel = '入力をクリア',
  filled = false,
  invalid = false,
  disabled,
  readOnly,
  floatingLabel,
  className,
}: InputBoxProps) {
  const control = React.isValidElement<{ className?: ControlClassName }>(children)
    ? React.cloneElement(children, {
        className: mergeControlClassName(children.props.className, styles.Control),
      })
    : children;
  const label = React.isValidElement<{
    className?: string;
    'data-inputbox-label'?: boolean;
  }>(floatingLabel)
    ? React.cloneElement(floatingLabel, {
        className: [styles.Label, floatingLabel.props.className]
          .filter(Boolean)
          .join(' '),
        'data-inputbox-label': true,
      })
    : floatingLabel;
  const showClearButton = Boolean(
    onClear && filled && !invalid && !disabled && !readOnly,
  );
  return (
    <label
      className={[styles.InputBox, className].filter(Boolean).join(' ')}
      data-filled={filled || undefined}
      data-invalid={invalid || undefined}
      data-disabled={disabled || undefined}
      data-readonly={readOnly || undefined}
      data-leading-icon={leadingIcon ? true : undefined}
    >
      {label}
      {leadingIcon ? (
        <span className={styles.LeadingIcon}>{leadingIcon}</span>
      ) : null}
      {control}
      {showClearButton ? (
        <button type="button" className={styles.ClearButton} onClick={onClear}>
          <Icon name="x" size={24} aria-label={clearLabel} />
        </button>
      ) : (
        trailingIcon && <span className={styles.TrailingIcon}>{trailingIcon}</span>
      )}
      <span aria-hidden="true" className={styles.StateLayer} />
    </label>
  );
}

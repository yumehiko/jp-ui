import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconX } from '@tabler/icons-react';
import { Input } from '../input/Input';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './InputBox.module.css';

type InputBoxBaseProps = Omit<
  React.ComponentPropsWithoutRef<typeof Input>,
  'className' | 'children' | 'value' | 'defaultValue' | 'onChange'
> & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  clearLabel?: string;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  floatingLabel?: React.ReactNode;
  className?: string;
  inputClassName?: React.ComponentPropsWithoutRef<typeof Input>['className'];
  inputComponent?: React.ElementType<
    React.ComponentPropsWithoutRef<typeof Input>
  >;
  onClear?: () => void;
  onValueChange?: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

type ControlledInputBoxProps = {
  value: string;
  defaultValue?: never;
  onValueChange: (value: string) => void;
};

type UncontrolledInputBoxProps = {
  value?: undefined;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

type InputBoxProps = InputBoxBaseProps &
  (ControlledInputBoxProps | UncontrolledInputBoxProps);

export function InputBox({
  leadingIcon,
  trailingIcon,
  onClear,
  clearLabel = '入力をクリア',
  invalid = false,
  disabled,
  readOnly,
  floatingLabel,
  className,
  inputClassName,
  inputComponent,
  value,
  defaultValue = '',
  onValueChange,
  onChange,
  placeholder,
  ...inputProps
}: InputBoxProps) {
  const InputComponent = inputComponent ?? Input;
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const currentValue = isControlled ? value : uncontrolledValue;
  const filled = currentValue.length > 0;
  const control = (
    <InputComponent
      className={mergeClassName<typeof Input>(inputClassName, styles.Control)}
      value={currentValue}
      onChange={(event) => {
        const nextValue = event.target.value;
        if (!isControlled) {
          setUncontrolledValue(nextValue);
        }
        onValueChange?.(nextValue);
        onChange?.(event);
      }}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      {...inputProps}
    />
  );
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
    filled && !invalid && !disabled && !readOnly,
  );
  const handleClear = () => {
    if (!isControlled) {
      setUncontrolledValue('');
    }
    onValueChange?.('');
    onClear?.();
  };
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
        <button type="button" className={styles.ClearButton} onClick={handleClear}>
          <Icon icon={IconX} size={24} aria-label={clearLabel} />
        </button>
      ) : (
        trailingIcon && <span className={styles.TrailingIcon}>{trailingIcon}</span>
      )}
      <span aria-hidden="true" className={styles.StateLayer} />
    </label>
  );
}

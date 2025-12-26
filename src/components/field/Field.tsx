import * as React from 'react';
import { Field as BaseField } from '@base-ui/react/field';
import { Icon } from '../../assets/icons/Icon';
import { Input } from '../input/Input';
import inputStyles from '../input/Input.module.css';
import styles from './Field.module.css';

type FieldInputType = 'text' | 'select' | 'path';

type FieldProps = {
  label: string;
  supportingText?: string;
  errorMessage?: string;
  inputType?: FieldInputType;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<typeof BaseField.Root>, 'children'> &
  Omit<React.ComponentPropsWithoutRef<typeof Input>, 'className'>;

const getTrailingIcon = (
  inputType: FieldInputType,
  invalid: boolean | undefined,
) => {
  if (invalid) {
    return <Icon name="exclamation-circle" size={24} />;
  }

  if (inputType === 'select') {
    return <Icon name="caret-down" size={24} />;
  }

  if (inputType === 'path') {
    return <Icon name="drag-drop" size={24} />;
  }

  return null;
};

export function Field({
  label,
  supportingText,
  errorMessage,
  inputType = 'text',
  leadingIcon,
  trailingIcon,
  disabled,
  invalid,
  readOnly,
  ...inputProps
}: FieldProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const resolvedTrailingIcon = trailingIcon ?? getTrailingIcon(inputType, invalid);
  const hasLeadingIcon = Boolean(leadingIcon);
  const inputReadOnly = readOnly ?? inputType !== 'text';
  const visualReadOnly = Boolean(readOnly);
  const inputClassName = [inputStyles.Input, styles.Control]
    .filter(Boolean)
    .join(' ');
  const showClearButton =
    inputType === 'text' && !invalid && !disabled && !inputReadOnly && !trailingIcon;

  const handleClear = () => {
    const input = inputRef.current;
    if (!input) return;
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    )?.set;
    if (setter) {
      setter.call(input, '');
    } else {
      input.value = '';
    }
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
  };

  return (
    <BaseField.Root
      className={styles.Field}
      data-input-type={inputType}
      data-leading-icon={hasLeadingIcon}
      data-readonly={visualReadOnly || undefined}
      disabled={disabled}
      invalid={invalid}
    >
      <div className={styles.InputBox}>
        {hasLeadingIcon && <span className={styles.LeadingIcon}>{leadingIcon}</span>}
        <Input
          className={inputClassName}
          readOnly={inputReadOnly}
          disabled={disabled}
          ref={inputRef}
          {...inputProps}
        />
        {showClearButton ? (
          <button
            type="button"
            className={styles.ClearButton}
            aria-label="入力をクリア"
            onClick={handleClear}
          >
            <Icon name="x" size={24} />
          </button>
        ) : (
          resolvedTrailingIcon && (
            <span className={styles.TrailingIcon}>{resolvedTrailingIcon}</span>
          )
        )}
        <span className={styles.Label}>{label}</span>
        <span className={styles.StateLayer} />
      </div>
      {supportingText && (
        <BaseField.Description className={styles.SupportingText}>
          {supportingText}
        </BaseField.Description>
      )}
      {invalid && errorMessage && (
        <BaseField.Error className={styles.ErrorText} match>
          {errorMessage}
        </BaseField.Error>
      )}
    </BaseField.Root>
  );
}

import * as React from 'react';
import { Field as BaseField } from '@base-ui/react/field';
import { InputBox } from '../input-box/InputBox';
import styles from './Field.module.css';

type FieldProps = {
  label: string;
  supportingText?: string;
  errorMessage?: string;
  children: React.ReactNode;
  readOnly?: boolean;
} & Omit<React.ComponentPropsWithoutRef<typeof BaseField.Root>, 'children'>;

type ControlClassName =
  | string
  | ((state: unknown) => string | undefined)
  | undefined;

type ControlElementProps = {
  className?: ControlClassName;
  floatingLabel?: React.ReactNode;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

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

export function Field({
  label,
  supportingText,
  errorMessage,
  disabled,
  invalid,
  readOnly,
  children,
  className,
  ...props
}: FieldProps) {
  const labelNode = (
    <BaseField.Label data-floating-label>{label}</BaseField.Label>
  );
  const isInputBox =
    React.isValidElement(children) && children.type === InputBox;
  const control = React.isValidElement<ControlElementProps>(children)
    ? React.cloneElement(children, {
        className: mergeControlClassName(children.props.className, styles.Control),
        ...(isInputBox
          ? {
              floatingLabel: labelNode,
              invalid: children.props.invalid ?? invalid,
              disabled: children.props.disabled ?? disabled,
              readOnly: children.props.readOnly ?? readOnly,
            }
          : null),
      })
    : children;

  return (
    <BaseField.Root
      className={[styles.Field, className].filter(Boolean).join(' ')}
      data-readonly={readOnly || undefined}
      disabled={disabled}
      invalid={invalid}
      {...props}
    >
      {control}
      {!isInputBox && labelNode}
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

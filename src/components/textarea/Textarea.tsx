import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Textarea.module.css';

type TextareaBaseProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'defaultValue' | 'onChange' | 'className'
> & {
  floatingLabel?: React.ReactNode;
  invalid?: boolean;
  className?: string;
  textareaClassName?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['className'];
  onValueChange?: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  render?: useRender.ComponentProps<'label'>['render'];
};

type ControlledTextareaProps = {
  value: string;
  defaultValue?: never;
  onValueChange: (value: string) => void;
};

type UncontrolledTextareaProps = {
  value?: undefined;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export type TextareaProps = TextareaBaseProps &
  (ControlledTextareaProps | UncontrolledTextareaProps);

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      render,
      className,
      textareaClassName,
      floatingLabel,
      value,
      defaultValue = '',
      onValueChange,
      onChange,
      invalid = false,
      disabled,
      readOnly,
      placeholder,
      ...textareaProps
    },
    ref,
  ) {
    const isControlled = value !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
    const currentValue = isControlled ? value : uncontrolledValue;
    const filled = currentValue.length > 0;
    const label = React.isValidElement<{
      className?: string;
      'data-textarea-label'?: boolean;
    }>(floatingLabel)
      ? React.cloneElement(floatingLabel, {
          className: [styles.Label, floatingLabel.props.className]
            .filter(Boolean)
            .join(' '),
          'data-textarea-label': true,
        })
      : floatingLabel;
    const control = (
      <textarea
        ref={ref}
        className={mergeClassName<'textarea'>(textareaClassName, styles.Control)}
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
        {...textareaProps}
      />
    );

    const wrapperProps = mergeProps<'label'>(
      {
        className: [styles.TextareaBox, className].filter(Boolean).join(' '),
        'data-filled': filled || undefined,
        'data-invalid': invalid || undefined,
        'data-disabled': disabled || undefined,
        'data-readonly': readOnly || undefined,
        children: (
          <>
            {label}
            {control}
            <span aria-hidden="true" className={styles.StateLayer} />
          </>
        ),
      } as useRender.ComponentProps<'label'>,
      {},
    );

    return useRender({
      defaultTagName: 'label',
      render,
      props: wrapperProps,
    });
  },
);

Textarea.displayName = 'Textarea';

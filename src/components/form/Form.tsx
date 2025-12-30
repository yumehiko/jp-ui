import { Form as BaseForm } from '@base-ui/react/form';
import type { FormProps as BaseFormProps } from '@base-ui/react/form';
import styles from './Form.module.css';

type FormProps<FormValues extends Record<string, unknown> = Record<string, unknown>> =
  BaseFormProps<FormValues>;

export function Form<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  className,
  ...props
}: FormProps<FormValues>) {
  const mergedClassName =
    typeof className === 'function'
      ? (state: Parameters<NonNullable<typeof className>>[0]) =>
          [styles.Form, className(state)].filter(Boolean).join(' ')
      : [styles.Form, className].filter(Boolean).join(' ');

  return <BaseForm className={mergedClassName} {...props} />;
}

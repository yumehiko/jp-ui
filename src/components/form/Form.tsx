import { Form as BaseForm } from '@base-ui/react/form';
import type { FormProps as BaseFormProps } from '@base-ui/react/form';
import { mergeClassName } from '../utils/mergeClassName';
import styles from './Form.module.css';

type FormProps<FormValues extends Record<string, unknown> = Record<string, unknown>> =
  BaseFormProps<FormValues>;

export function Form<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  className,
  ...props
}: FormProps<FormValues>) {
  return (
    <BaseForm
      className={mergeClassName<typeof BaseForm>(className, styles.Form)}
      {...props}
    />
  );
}

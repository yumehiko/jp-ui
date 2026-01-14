# Form

Source: src/components/form/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Button } from '..';
import { Field } from '..';
import { InputBox } from '..';
import { Form } from '..';
import styles from './Form.module.css';

type ExampleProps = {
  label?: string;
  supportingText?: string;
  errorMessage?: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
};

export function Example({
  label = 'Label',
  supportingText = 'Supporting text.',
  errorMessage,
  placeholder = 'Place Holder',
  defaultValue = '',
  disabled = false,
  invalid = false,
  readOnly = false,
}: ExampleProps) {
  const [value, setValue] = React.useState(defaultValue ?? '');

  React.useEffect(() => {
    setValue(defaultValue ?? '');
  }, [defaultValue]);

  return (
    <Form
      onFormSubmit={() => {
        setValue('');
      }}
    >
      <Field
        label={label}
        supportingText={supportingText}
        errorMessage={errorMessage}
        invalid={invalid}
        disabled={disabled}
        readOnly={readOnly}
      >
        <InputBox
          value={value}
          onValueChange={setValue}
          invalid={invalid}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
        />
      </Field>
      <div className={styles.Actions}>
        <Button type="button" variant="ghost">
          キャンセル
        </Button>
        <Button type="submit" disabled={disabled}>
          送信
        </Button>
      </div>
    </Form>
  );
}

```

Source: src/components/form/Form.module.css

## Styles

```css
.Form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
}

.Actions {
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
}

```

Source: dist/components/form/Form.d.ts

## Types

```ts
type FormProps<FormValues extends Record<string, unknown> = Record<string, unknown>> = BaseFormProps<FormValues>;
```

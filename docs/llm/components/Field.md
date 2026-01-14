# Field

Source: src/components/field/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconEdit, IconExclamationCircle } from '@tabler/icons-react';
import { InputBox } from '..';
import { Field } from '..';

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
    <Field
      label={label}
      supportingText={supportingText}
      errorMessage={errorMessage}
      invalid={invalid}
      disabled={disabled}
      readOnly={readOnly}
    >
      <InputBox
        leadingIcon={<Icon icon={IconEdit} size={24} />}
        value={value}
        onValueChange={setValue}
        invalid={invalid}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        trailingIcon={invalid ? <Icon icon={IconExclamationCircle} size={24} /> : undefined}
      />
    </Field>
  );
}

```

Source: dist/components/field/Field.d.ts

## Types

```ts
type FieldProps = {
    label: React.ReactNode;
    supportingText?: string;
    errorMessage?: string;
    children: React.ReactNode;
    readOnly?: boolean;
    labelPlacement?: 'start' | 'end';
    labelClassName?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof BaseField.Root>, 'children'>;
```

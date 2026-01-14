# Textarea

Source: src/components/textarea/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Field } from '..';
import { Textarea } from './Textarea';

export function Example() {
  const [value, setValue] = React.useState('');

  return (
    <Field label="コメント" supportingText="150文字以内で入力してください。">
      <Textarea
        value={value}
        onValueChange={setValue}
        rows={4}
        placeholder="入力してください"
      />
    </Field>
  );
}

```

Source: dist/components/textarea/Textarea.d.ts

## Types

```ts
type TextareaBaseProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange' | 'className'> & {
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

export type TextareaProps = TextareaBaseProps & (ControlledTextareaProps | UncontrolledTextareaProps);
```

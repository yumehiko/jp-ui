import * as React from 'react';
import { Field } from '..';
import { InputBox } from '..';
import { FieldsetLegend, FieldsetRoot } from '..';

type ExampleProps = {
  legend?: string;
  disabled?: boolean;
  placeholder?: string;
};

export function Example({
  legend = '連絡先',
  disabled = false,
  placeholder = '入力してください',
}: ExampleProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <FieldsetRoot disabled={disabled}>
      <FieldsetLegend>{legend}</FieldsetLegend>
      <Field label="氏名">
        <InputBox
          value={name}
          onValueChange={setName}
          disabled={disabled}
          placeholder={placeholder}
        />
      </Field>
      <Field label="メールアドレス">
        <InputBox
          value={email}
          onValueChange={setEmail}
          disabled={disabled}
          placeholder={placeholder}
        />
      </Field>
    </FieldsetRoot>
  );
}

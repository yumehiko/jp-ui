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

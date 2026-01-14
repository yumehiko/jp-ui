# Input Box

Source: src/components/input-box/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconCircleFilled, IconExclamationCircle } from '@tabler/icons-react';
import { InputBox } from '..';

type ExampleProps = {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
};

export function Example({
  placeholder = 'Place Holder',
  defaultValue = 'Input Text',
  disabled = false,
  invalid = false,
  readOnly = false,
}: ExampleProps) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <InputBox
      floatingLabel={<span>Label</span>}
      leadingIcon={<Icon icon={IconCircleFilled} size={24} />}
      value={value}
      onValueChange={setValue}
      invalid={invalid}
      readOnly={readOnly}
      placeholder={placeholder}
      trailingIcon={invalid ? <Icon icon={IconExclamationCircle} size={24} /> : undefined}
      disabled={disabled}
    />
  );
}

```

Source: dist/components/input-box/InputBox.d.ts

## Types

```ts
type InputBoxBaseProps = Omit<React.ComponentPropsWithoutRef<typeof Input>, 'className' | 'children' | 'value' | 'defaultValue' | 'onChange'> & {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    clearLabel?: string;
    invalid?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    floatingLabel?: React.ReactNode;
    className?: string;
    inputClassName?: React.ComponentPropsWithoutRef<typeof Input>['className'];
    inputComponent?: React.ElementType<React.ComponentPropsWithoutRef<typeof Input>>;
    onClear?: () => void;
    onValueChange?: (value: string) => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

type ControlledInputBoxProps = {
    value: string;
    defaultValue?: never;
    onValueChange: (value: string) => void;
};

type UncontrolledInputBoxProps = {
    value?: undefined;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
};

type InputBoxProps = InputBoxBaseProps & (ControlledInputBoxProps | UncontrolledInputBoxProps);
```

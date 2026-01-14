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

import * as React from 'react';
import { Field } from '../field/Field';
import { InputBox } from '../input-box/InputBox';
import {
  AutocompleteInput,
  AutocompleteRoot,
} from './Autocomplete';

type AutocompleteRootProps = React.ComponentPropsWithoutRef<
  typeof AutocompleteRoot
>;

type InputBoxProps = React.ComponentPropsWithoutRef<typeof InputBox>;
type FieldProps = Omit<React.ComponentPropsWithoutRef<typeof Field>, 'children'>;

type AutocompleteInputBoxProps = Omit<
  InputBoxProps,
  'inputComponent' | 'value' | 'defaultValue' | 'onValueChange'
> & {
  items: AutocompleteRootProps['items'];
  value?: AutocompleteRootProps['value'];
  defaultValue?: AutocompleteRootProps['defaultValue'];
  onValueChange?: AutocompleteRootProps['onValueChange'];
  rootProps?: Omit<
    AutocompleteRootProps,
    'items' | 'value' | 'defaultValue' | 'onValueChange' | 'children'
  >;
  fieldProps?: FieldProps;
  children?: React.ReactNode;
};

export function AutocompleteInputBox({
  items,
  value,
  defaultValue,
  onValueChange,
  rootProps,
  fieldProps,
  children,
  ...inputBoxProps
}: AutocompleteInputBoxProps) {
  const input = (
    <InputBox
      inputComponent={AutocompleteInput}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      {...inputBoxProps}
    />
  );
  const content = fieldProps ? <Field {...fieldProps}>{input}</Field> : input;

  return (
    <AutocompleteRoot
      items={items}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      {...rootProps}
    >
      {content}
      {children}
    </AutocompleteRoot>
  );
}

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

type ControlledAutocompleteInputBoxProps = {
  value: string;
  defaultValue?: never;
  onValueChange: (value: string) => void;
};

type UncontrolledAutocompleteInputBoxProps = {
  value?: undefined;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

type AutocompleteInputBoxProps = Omit<
  InputBoxProps,
  'inputComponent' | 'value' | 'defaultValue' | 'onValueChange'
> & {
  items: AutocompleteRootProps['items'];
  rootProps?: Omit<
    AutocompleteRootProps,
    'items' | 'value' | 'defaultValue' | 'onValueChange' | 'children'
  >;
  fieldProps?: FieldProps;
  children?: React.ReactNode;
} & (ControlledAutocompleteInputBoxProps | UncontrolledAutocompleteInputBoxProps);

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
  const handleRootValueChange: AutocompleteRootProps['onValueChange'] =
    onValueChange
      ? (nextValue) => {
          onValueChange(nextValue as string);
        }
      : undefined;
  const inputBoxValueProps =
    value === undefined
      ? { defaultValue, onValueChange }
      : { value, onValueChange };
  const input = (
    <InputBox
      inputComponent={AutocompleteInput}
      {...inputBoxValueProps}
      {...inputBoxProps}
    />
  );
  const content = fieldProps ? <Field {...fieldProps}>{input}</Field> : input;

  return (
    <AutocompleteRoot
      items={items}
      {...(value === undefined ? { defaultValue } : { value })}
      onValueChange={handleRootValueChange}
      {...rootProps}
    >
      {content}
      {children}
    </AutocompleteRoot>
  );
}

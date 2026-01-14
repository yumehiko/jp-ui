# Autocomplete

Source: src/components/autocomplete/Example.tsx

## Example

```tsx
import * as React from 'react';
import { AutocompleteInputBox } from '..';
import {
  AutocompletePortal,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
} from '..';

const tags = [
  'feature',
  'fix',
  'bug',
  'docs',
  'internal',
  'mobile',
  'component: accordion',
  'component: alert dialog',
  'component: autocomplete',
  'component: avatar',
  'component: checkbox',
  'component: dialog',
];

export function Example() {
  const [value, setValue] = React.useState('com');

  return (
    <AutocompleteInputBox
      items={tags}
      value={value}
      onValueChange={setValue}
      placeholder="e.g. feature"
      rootProps={{ defaultOpen: true }}
      fieldProps={{ label: 'Search tags' }}
    >
      <AutocompletePortal>
        <AutocompletePositioner sideOffset={8}>
          <AutocompletePopup>
            <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
            <AutocompleteList>
              {(tag: string) => (
                <AutocompleteItem key={tag} value={tag}>
                  {tag}
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompletePopup>
        </AutocompletePositioner>
      </AutocompletePortal>
    </AutocompleteInputBox>
  );
}

```

Source: dist/components/autocomplete/AutocompleteInputBox.d.ts

## Types

```ts
type AutocompleteRootProps = React.ComponentPropsWithoutRef<typeof AutocompleteRoot>;

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

type AutocompleteInputBoxProps = Omit<InputBoxProps, 'inputComponent' | 'value' | 'defaultValue' | 'onValueChange'> & {
    items: AutocompleteRootProps['items'];
    rootProps?: Omit<AutocompleteRootProps, 'items' | 'value' | 'defaultValue' | 'onValueChange' | 'children'>;
    fieldProps?: FieldProps;
    children?: React.ReactNode;
} & (ControlledAutocompleteInputBoxProps | UncontrolledAutocompleteInputBoxProps);
```

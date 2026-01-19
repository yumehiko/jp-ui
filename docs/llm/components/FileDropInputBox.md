# File Drop Input Box

Source: src/components/file-drop-input-box/Example.tsx

## Example

```tsx
import * as React from 'react';
import { FileDropInputBox } from '..';

type ExampleProps = {
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  multiple?: boolean;
  directory?: boolean;
};

const formatFilesValue = (files: File[]) =>
  files
    .map((file) => (file.webkitRelativePath ? file.webkitRelativePath : file.name))
    .join(', ');

export function Example({
  placeholder = 'ファイルを選択またはドロップ',
  disabled = false,
  invalid = false,
  readOnly = false,
  multiple = false,
  directory = false,
}: ExampleProps) {
  const [value, setValue] = React.useState('');

  return (
    <FileDropInputBox
      floatingLabel={<span>Path</span>}
      placeholder={placeholder}
      value={value}
      onValueChange={() => {}}
      onFilesChange={(files) => {
        setValue(formatFilesValue(files));
      }}
      disabled={disabled}
      invalid={invalid}
      readOnly={readOnly}
      multiple={multiple}
      webkitdirectory={directory}
    />
  );
}

```

Source: dist/components/file-drop-input-box/FileDropInputBox.d.ts

## Types

```ts
type FileDropInputBoxBaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange' | 'className'> & {
    className?: string;
    inputClassName?: React.InputHTMLAttributes<HTMLInputElement>['className'];
    floatingLabel?: React.ReactNode;
    invalid?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    directory?: boolean;
    webkitdirectory?: boolean;
    onValueChange?: (value: string) => void;
    onFilesChange?: (files: File[]) => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    render?: useRender.ComponentProps<'label'>['render'];
};

type ControlledFileDropInputBoxProps = {
    value: string;
    defaultValue?: never;
    onValueChange: (value: string) => void;
};

type UncontrolledFileDropInputBoxProps = {
    value?: undefined;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
};

export type FileDropInputBoxProps = FileDropInputBoxBaseProps & (ControlledFileDropInputBoxProps | UncontrolledFileDropInputBoxProps);
```

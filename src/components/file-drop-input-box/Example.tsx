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

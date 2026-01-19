import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import styles from './FileDropInputBox.module.css';

type FileDropInputBoxBaseProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'defaultValue' | 'onChange' | 'className'
> & {
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

export type FileDropInputBoxProps = FileDropInputBoxBaseProps &
  (ControlledFileDropInputBoxProps | UncontrolledFileDropInputBoxProps);

const formatFilesValue = (files: File[]) =>
  files.map((file) => file.name).join(', ');

const isFileDragEvent = (event: React.DragEvent) =>
  Array.from(event.dataTransfer?.types ?? []).includes('Files');

export const FileDropInputBox = React.forwardRef<
  HTMLInputElement,
  FileDropInputBoxProps
>(function FileDropInputBox(
  {
    render,
    className,
    inputClassName,
    floatingLabel,
    value,
    defaultValue = '',
    placeholder = 'ファイルを選択またはドロップ',
    onValueChange,
    onFilesChange,
    onChange,
    invalid = false,
    disabled,
    readOnly,
    multiple,
    accept,
    directory,
    webkitdirectory,
    ...inputProps
  },
  ref,
) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const [dragging, setDragging] = React.useState(false);
  const enableDirectory = Boolean(directory ?? webkitdirectory);
  const allowMultiple = multiple || enableDirectory;
  const directoryProps = enableDirectory
    ? ({
        directory: true,
        webkitdirectory: true,
      } as React.InputHTMLAttributes<HTMLInputElement>)
    : {};
  const currentValue = isControlled ? value : uncontrolledValue;
  const filled = currentValue.length > 0;

  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const applyValueUpdate = (nextValue: string, files: File[]) => {
    if (!isControlled) {
      setUncontrolledValue(nextValue);
    }
    onValueChange?.(nextValue);
    onFilesChange?.(files);
  };

  const applyFilesToInput = (files: File[]) => {
    if (!inputRef.current || typeof DataTransfer === 'undefined') return;
    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    inputRef.current.files = dataTransfer.files;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    applyValueUpdate(formatFilesValue(files), files);
    onChange?.(event);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLLabelElement>) => {
    if (disabled || readOnly || !isFileDragEvent(event)) return;
    setDragging(true);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    if (disabled || readOnly || !isFileDragEvent(event)) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    if (disabled || readOnly || !isFileDragEvent(event)) return;
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    if (disabled || readOnly || !isFileDragEvent(event)) return;
    event.preventDefault();
    setDragging(false);
    const files = Array.from(event.dataTransfer?.files ?? []);
    if (files.length === 0) return;
    applyFilesToInput(files);
    applyValueUpdate(formatFilesValue(files), files);
  };

  const label = React.isValidElement<{
    className?: string;
    'data-filedrop-label'?: boolean;
  }>(floatingLabel)
    ? React.cloneElement(floatingLabel, {
        className: [styles.Label, floatingLabel.props.className]
          .filter(Boolean)
          .join(' '),
        'data-filedrop-label': true,
      })
    : floatingLabel;

  const wrapperProps = mergeProps<'label'>(
    {
      className: [styles.FileDropInputBox, className].filter(Boolean).join(' '),
      'data-filled': filled || undefined,
      'data-invalid': invalid || undefined,
      'data-disabled': disabled || undefined,
      'data-readonly': readOnly || undefined,
      'data-dragging': dragging || undefined,
      'aria-readonly': readOnly || undefined,
      children: (
        <>
          {label}
          <input
            ref={inputRef}
            className={[styles.HiddenInput, inputClassName]
              .filter(Boolean)
              .join(' ')}
            type="file"
            onChange={handleInputChange}
            disabled={disabled || readOnly}
            multiple={allowMultiple}
            accept={accept}
            {...inputProps}
            {...directoryProps}
          />
          <span
            className={styles.Value}
            data-placeholder={filled ? undefined : true}
          >
            {filled ? currentValue : placeholder}
          </span>
          <span aria-hidden="true" className={styles.StateLayer} />
        </>
      ),
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    } as useRender.ComponentProps<'label'>,
    {},
  );

  return useRender({
    defaultTagName: 'label',
    render,
    props: wrapperProps,
  });
});

FileDropInputBox.displayName = 'FileDropInputBox';

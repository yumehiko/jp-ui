import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconX } from '@tabler/icons-react';
import { useMenuSize } from '../menu/MenuSizeContext';
import { Input } from '../input/Input';
import styles from './MenuInputBox.module.css';

type MenuInputBoxBaseProps = Omit<
  React.ComponentPropsWithoutRef<typeof Input>,
  'className' | 'children' | 'value' | 'defaultValue' | 'onChange' | 'size'
> & {
  size?: 'large' | 'small';
  leadingIcon?: React.ReactNode;
  clearLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  inputClassName?: React.ComponentPropsWithoutRef<typeof Input>['className'];
  onClear?: () => void;
  onValueChange?: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

type ControlledMenuInputBoxProps = {
  value: string;
  defaultValue?: never;
  onValueChange: (value: string) => void;
};

type UncontrolledMenuInputBoxProps = {
  value?: undefined;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

type MenuInputBoxProps = MenuInputBoxBaseProps &
  (ControlledMenuInputBoxProps | UncontrolledMenuInputBoxProps);

export function MenuInputBox({
  size,
  leadingIcon,
  onClear,
  clearLabel = '入力をクリア',
  disabled,
  readOnly,
  className,
  inputClassName,
  value,
  defaultValue = '',
  onValueChange,
  onChange,
  placeholder,
  ...inputProps
}: MenuInputBoxProps) {
  const menuSize = useMenuSize();
  const resolvedSize = size ?? menuSize;
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const currentValue = isControlled ? value : uncontrolledValue;
  const filled = currentValue.length > 0;
  const showClearButton = Boolean(filled && !disabled && !readOnly);
  const handleClear = () => {
    if (!isControlled) {
      setUncontrolledValue('');
    }
    onValueChange?.('');
    onClear?.();
  };

  return (
    <div
      className={[styles.MenuInputBox, className].filter(Boolean).join(' ')}
      data-size={resolvedSize}
      data-filled={filled || undefined}
      data-disabled={disabled || undefined}
      data-readonly={readOnly || undefined}
      data-leading-icon={leadingIcon ? true : undefined}
    >
      <span aria-hidden="true" className={styles.StateLayer} />
      {leadingIcon ? (
        <span className={styles.LeadingIcon}>{leadingIcon}</span>
      ) : null}
      <Input
        className={[styles.Input, inputClassName].filter(Boolean).join(' ')}
        value={currentValue}
        onChange={(event) => {
          const nextValue = event.target.value;
          if (!isControlled) {
            setUncontrolledValue(nextValue);
          }
          onValueChange?.(nextValue);
          onChange?.(event);
        }}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        {...inputProps}
      />
      {showClearButton ? (
        <button type="button" className={styles.ClearButton} onClick={handleClear}>
          <Icon
            icon={IconX}
            size={resolvedSize === 'small' ? 16 : 24}
            aria-label={clearLabel}
          />
        </button>
      ) : null}
    </div>
  );
}

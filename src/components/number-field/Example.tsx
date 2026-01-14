import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from '..';
import styles from './NumberField.module.css';

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export function Example() {
  const id = React.useId();
  return (
    <NumberFieldRoot id={id} defaultValue={12} min={0} max={120}>
      <NumberFieldScrubArea>
        <label htmlFor={id} className={labelClassName}>
          数量
        </label>
        <NumberFieldScrubAreaCursor>
          <CursorGrowIcon />
        </NumberFieldScrubAreaCursor>
      </NumberFieldScrubArea>
      <NumberFieldGroup>
        <NumberFieldDecrement aria-label="減らす">
          <Icon icon={IconMinus} size={16} />
        </NumberFieldDecrement>
        <NumberFieldInput />
        <NumberFieldIncrement aria-label="増やす">
          <Icon icon={IconPlus} size={16} />
        </NumberFieldIncrement>
      </NumberFieldGroup>
    </NumberFieldRoot>
  );
}

function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="black"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

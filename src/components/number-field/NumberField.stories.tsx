import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from './NumberField';
import styles from './NumberField.module.css';

const meta: Meta = {
  title: 'Components/Number Field',
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 320, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

const labelClassName = `typesetting-label typesetting-tsumegumi ${styles.Label}`;

export const Default: Story = {
  render: () => {
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
            <Icon name="minus" size={16} />
          </NumberFieldDecrement>
          <NumberFieldInput />
          <NumberFieldIncrement aria-label="増やす">
            <Icon name="plus" size={16} />
          </NumberFieldIncrement>
        </NumberFieldGroup>
      </NumberFieldRoot>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const id = React.useId();
    return (
      <NumberFieldRoot id={id} defaultValue={4} disabled>
        <NumberFieldScrubArea>
          <label htmlFor={id} className={labelClassName}>
            個数
          </label>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement aria-label="減らす">
            <Icon name="minus" size={16} />
          </NumberFieldDecrement>
          <NumberFieldInput />
          <NumberFieldIncrement aria-label="増やす">
            <Icon name="plus" size={16} />
          </NumberFieldIncrement>
        </NumberFieldGroup>
      </NumberFieldRoot>
    );
  },
};

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

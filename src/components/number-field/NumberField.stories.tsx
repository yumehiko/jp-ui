import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
} from '..';
import styles from './NumberField.module.css';
import { Example } from './Example';

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
  render: () => <Example />,
};

const DisabledStory = () => {
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
          <Icon icon={IconMinus} size={16} />
        </NumberFieldDecrement>
        <NumberFieldInput />
        <NumberFieldIncrement aria-label="増やす">
          <Icon icon={IconPlus} size={16} />
        </NumberFieldIncrement>
      </NumberFieldGroup>
    </NumberFieldRoot>
  );
};

export const Disabled: Story = {
  render: () => <DisabledStory />,
};

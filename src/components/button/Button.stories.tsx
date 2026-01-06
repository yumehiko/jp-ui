import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { Icons } from '../../assets/icons/icons';
import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Submit',
    variant: 'filled',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const IconWithLabel: Story = {
  args: {
    children: (
      <>
        <Icon icon={Icons.Edit} size={24} />
        ラベル付き
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: (
      <>
        <Icon icon={Icons.Edit} size={16} />
        Small
      </>
    ),
  },
};

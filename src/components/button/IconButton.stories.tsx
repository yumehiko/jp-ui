import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../assets/icons/Icon';
import { Icons } from '../../assets/icons/icons';
import { IconButton } from '..';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  args: {
    variant: 'filled',
    'aria-label': '編集',
    children: <Icon icon={Icons.Edit} size={24} />,
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

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

export const Small: Story = {
  args: {
    size: 'small',
    children: <Icon icon={Icons.Edit} size={16} />,
  },
};

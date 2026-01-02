import type { Meta, StoryObj } from '@storybook/react';
import avatarImage from '../../assets/images/avator.jpg';
import { AvatarFallback, AvatarImage, AvatarRoot } from './Avatar';

const meta: Meta = {
  title: 'Components/Avatar',
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <>
      <AvatarRoot>
        <AvatarImage src={avatarImage} width="96" height="96" alt="" />
        <AvatarFallback>YM</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>YM</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot
        style={{
          ['--avatar-size' as string]: '32px',
          ['--avatar-text-offset' as string]: '0.06em',
        }}
      >
        <AvatarFallback>YM</AvatarFallback>
      </AvatarRoot>
    </>
  ),
};

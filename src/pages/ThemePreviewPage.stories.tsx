import type { Meta, StoryObj } from '@storybook/react';
import { createTheme } from '../theme';
import { ThemePreviewPage } from './ThemePreviewPage';

const themeCss = createTheme({
  primary: '#4f46e5',
  secondary: '#f97316',
  tertiary: '#10b981',
}).css;

const meta: Meta<typeof ThemePreviewPage> = {
  title: 'Foundations/Theme Preview',
  component: ThemePreviewPage,
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <style>{themeCss}</style>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    centeredStage: false,
  },
};

export default meta;

type Story = StoryObj<typeof ThemePreviewPage>;

export const Default: Story = {};

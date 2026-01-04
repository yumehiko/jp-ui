import * as React from 'react';
import type { Preview } from '@storybook/react-vite'
import '../src/index.css';

export const globalTypes = {
  theme: {
    description: 'Theme',
    defaultValue: 'dark',
    toolbar: {
      title: 'Theme',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
};

const withThemeClass = (Story, context) => {
  const theme = context.globals.theme === 'dark' ? 'theme-dark' : 'theme-light';
  const root = document.documentElement;
  root.classList.remove('theme-light', 'theme-dark');
  root.classList.add(theme);

  return Story();
};

const withCenteredStage = (Story, context) => {
  if (context?.parameters?.centeredStage === false) {
    return Story();
  }
  return React.createElement(
    'div',
    {
      style: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
        boxSizing: 'border-box',
      },
    },
    React.createElement(Story),
  );
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [withThemeClass, withCenteredStage],
};

export default preview;

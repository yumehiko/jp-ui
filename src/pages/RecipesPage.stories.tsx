import type { Meta, StoryObj } from '@storybook/react-vite';
import { RecipesPage } from './RecipesPage';

const meta: Meta<typeof RecipesPage> = {
  title: 'Guides/Recipes',
  component: RecipesPage,
  parameters: {
    layout: 'fullscreen',
    centeredStage: false,
  },
};

export default meta;

type Story = StoryObj<typeof RecipesPage>;

export const Default: Story = {};

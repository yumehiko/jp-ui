import type { Meta, StoryObj } from '@storybook/react';
import { NodeEditorSamplePage } from './NodeEditorSamplePage';

const meta: Meta<typeof NodeEditorSamplePage> = {
  title: 'Samples/Node Editor',
  component: NodeEditorSamplePage,
  parameters: {
    layout: 'fullscreen',
    centeredStage: false,
  },
};

export default meta;

type Story = StoryObj<typeof NodeEditorSamplePage>;

export const Default: Story = {};

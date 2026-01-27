import type { Meta, StoryObj } from '@storybook/react-vite';
import { Example } from './Example';

type StoryArgs = {
  placeholder: string;
  disabled: boolean;
  invalid: boolean;
  readOnly: boolean;
  multiple: boolean;
  directory: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/FileDropInputBox',
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    multiple: { control: 'boolean' },
    directory: { control: 'boolean' },
  },
  args: {
    placeholder: 'ファイルを選択またはドロップ',
    disabled: false,
    invalid: false,
    readOnly: false,
    multiple: false,
    directory: false,
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  render: (args) => <Example {...args} />,
};

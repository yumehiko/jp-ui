import type { Meta, StoryObj } from '@storybook/react-vite';
import { Example } from './Example';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    rows: 4,
    placeholder: '入力してください',
    defaultValue: '',
    disabled: false,
    invalid: false,
    readOnly: false,
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => <Example />,
};

export const Standalone: Story = {
  render: (args) => <Textarea {...args} />,
};

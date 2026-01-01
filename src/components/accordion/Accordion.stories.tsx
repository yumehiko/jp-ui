import type { Meta, StoryObj } from '@storybook/react';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from './Accordion';

const meta: Meta = {
  title: 'Components/Accordion',
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <AccordionRoot>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>Accordion Example</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <AccordionContent className="typesetting-body">
            パネルの内容は後で調整できます。必要なら専用デザインを選択して下さい。
          </AccordionContent>
        </AccordionPanel>
      </AccordionItem>
    </AccordionRoot>
  ),
};

import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from '..';

export function Example() {
  return (
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
  );
}

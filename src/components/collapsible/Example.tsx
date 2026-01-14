import {
  CollapsibleContent,
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '..';

export function Example() {
  return (
    <CollapsibleRoot>
      <CollapsibleTrigger>詳細を表示</CollapsibleTrigger>
      <CollapsiblePanel>
        <CollapsibleContent className="typesetting-body">
          これは折りたたみ式の内容です。トリガーをクリックすると開閉します。
        </CollapsibleContent>
      </CollapsiblePanel>
    </CollapsibleRoot>
  );
}

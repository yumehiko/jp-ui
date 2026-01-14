import { Button } from '..';
import {
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from '..';

export function Example() {
  return (
    <div style={{ padding: 32 }}>
      <PopoverRoot>
        <PopoverTrigger render={(props) => <Button {...props}>設定を開く</Button>} />
        <PopoverPortal>
          <PopoverPositioner sideOffset={12}>
            <PopoverPopup>
              <PopoverTitle>通知設定</PopoverTitle>
              <PopoverDescription>重要度の高い通知のみを受け取ります。</PopoverDescription>
              <PopoverClose render={(props) => <Button {...props}>閉じる</Button>} />
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </PopoverRoot>
    </div>
  );
}

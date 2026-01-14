# Toast

Source: src/components/toast/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Button } from '..';
import {
  ToastBody,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastLeadingIcon,
  ToastPortal,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  useToastManager,
} from '..';
import { Icon } from '../../assets/icons/Icon';
import { IconCheck, IconExclamationCircle } from '@tabler/icons-react';

function ToastList() {
  const { toasts } = useToastManager();

  return toasts.map((toast) => (
    <ToastRoot key={toast.id} toast={toast}>
      <ToastContent>
        {toast.type === 'primary' ? (
          <ToastLeadingIcon icon={<Icon icon={IconCheck} size={24} />} />
        ) : null}
        {toast.type === 'error' ? (
          <ToastLeadingIcon icon={<Icon icon={IconExclamationCircle} size={24} />} />
        ) : null}
        <ToastBody>
          <ToastTitle />
          {toast.description ? <ToastDescription /> : null}
        </ToastBody>
        <ToastClose aria-label="閉じる" />
      </ToastContent>
    </ToastRoot>
  ));
}

function ToastButton() {
  const toastManager = useToastManager();
  const countRef = React.useRef(1);

  const handleClick = (type: 'info' | 'error' | 'primary') => {
    const count = countRef.current;
    countRef.current += 1;
    toastManager.add({
      type,
      title: `通知 ${count}`,
      description: 'これはトースト通知です。',
    });
  };

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button variant="tonal" onClick={() => handleClick('info')}>
        Info
      </Button>
      <Button variant="tonal" onClick={() => handleClick('primary')}>
        Primary
      </Button>
      <Button variant="tonal" onClick={() => handleClick('error')}>
        Error
      </Button>
    </div>
  );
}

export function Example() {
  return (
    <ToastProvider>
      <ToastButton />
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
}

```

Source: dist/components/toast/Toast.d.ts

## Types

```ts
type ToastBodyProps = useRender.ComponentProps<'div'>;

type ToastLeadingIconProps = React.ComponentPropsWithoutRef<'span'> & {
    icon?: React.ReactNode;
};
```

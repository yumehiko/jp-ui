# jp-ui Usage

## Install

```sh
pnpm add @yumehiko/jp-ui @base-ui/react react react-dom
```

## Import styles

```ts
import '@yumehiko/jp-ui/style.css';
```

## Minimal example

```tsx
import { Button } from '@yumehiko/jp-ui';

export function App() {
  return <Button>OK</Button>;
}
```

## Providers

- Use `TooltipProvider` once near the app root when you use Tooltip components.
- Use `ToastProvider` once near the app root when you use Toast components.
- Use `createToastManager` or `useToastManager` to manage toast state.

### Minimal providers example

```tsx
import {
  TooltipProvider,
  ToastProvider,
  ToastViewport,
  createToastManager,
} from '@yumehiko/jp-ui';

const toastManager = createToastManager();

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <ToastProvider manager={toastManager}>
        {children}
        <ToastViewport />
      </ToastProvider>
    </TooltipProvider>
  );
}
```

## Theme

- Default is light tokens.
- Add `theme-dark` to a root element to enable dark tokens.

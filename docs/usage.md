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
- Component-specific examples live in Storybook.

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

- Light tokens are applied by default via `:root`.
- Add `theme-dark` to a root element to enable dark tokens.
- Use `theme-light` to scope the light theme to a subtree if needed.

# jp-ui

## Install

- `pnpm add @yumehiko/jp-ui @base-ui/react react react-dom`

## Usage

```tsx
import '@yumehiko/jp-ui/style.css';
import { Button } from '@yumehiko/jp-ui';

export function App() {
  return <Button>OK</Button>;
}
```

## Providers / Theme

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

To enable dark tokens, add `theme-dark` to a root element.

## Docs

- `docs/usage.md`
- `docs/components.md`
- `docs/tokens.md`

## Codex skill (optional)

Copy the skill into your project so coding agents can load jp-ui usage guidance.

```sh
mkdir -p .codex/skills && cp -R node_modules/@yumehiko/jp-ui/docs/skills/jp-ui-consumer .codex/skills/
```

## Scripts

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm storybook`
- `pnpm build-storybook`
- `pnpm gen:icons`
- `pnpm gen:tones`
- `pnpm gen:roles`
- `pnpm gen:roles-css`

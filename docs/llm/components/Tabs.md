# Tabs

Source: src/components/tabs/Example.tsx

## Example

```tsx
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import { IconFolder, IconNote, IconUser } from '@tabler/icons-react';
import { TabsRoot, TabsList, TabsTab, TabsIndicator, TabsPanel } from '..';

const panelStyle: React.CSSProperties = {
  padding: '16px',
  borderRadius: 'var(--radius-s)',
  backgroundColor: 'var(--surface-container)',
  color: 'var(--on-surface)',
};

export function Example() {
  return (
    <TabsRoot defaultValue="overview">
      <TabsList>
        <TabsTab value="overview" label="概要" icon={<Icon icon={IconNote} size={24} />} />
        <TabsTab value="projects" label="プロジェクト" icon={<Icon icon={IconFolder} size={24} />} />
        <TabsTab value="account" label="アカウント" icon={<Icon icon={IconUser} size={24} />} />
        <TabsIndicator />
      </TabsList>
      <TabsPanel value="overview">
        <div className="typesetting-body" style={panelStyle}>
          概要の内容
        </div>
      </TabsPanel>
      <TabsPanel value="projects">
        <div className="typesetting-body" style={panelStyle}>
          プロジェクトの内容
        </div>
      </TabsPanel>
      <TabsPanel value="account">
        <div className="typesetting-body" style={panelStyle}>
          アカウントの内容
        </div>
      </TabsPanel>
    </TabsRoot>
  );
}

```

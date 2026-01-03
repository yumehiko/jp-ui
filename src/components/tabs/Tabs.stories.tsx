import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../../assets/icons/Icon';
import {
  TabsRoot,
  TabsList,
  TabsTab,
  TabsIndicator,
  TabsPanel,
} from '..';

const meta: Meta = {
  title: 'Components/Tabs',
};

export default meta;

type Story = StoryObj;

const panelStyle: React.CSSProperties = {
  padding: '16px',
  borderRadius: 'var(--radius-s)',
  backgroundColor: 'var(--surface-container)',
  color: 'var(--on-surface)',
};

export const Default: Story = {
  render: () => (
    <TabsRoot defaultValue="overview">
      <TabsList>
        <TabsTab
          value="overview"
          label="概要"
          icon={<Icon name="note" size={24} />}
        />
        <TabsTab
          value="projects"
          label="プロジェクト"
          icon={<Icon name="folder" size={24} />}
        />
        <TabsTab
          value="account"
          label="アカウント"
          icon={<Icon name="user" size={24} />}
        />
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
  ),
};

export const Small: Story = {
  render: () => (
    <TabsRoot defaultValue="overview">
      <TabsList>
        <TabsTab
          value="overview"
          size="small"
          label="概要"
          icon={<Icon name="note" size={16} />}
        />
        <TabsTab
          value="projects"
          size="small"
          label="プロジェクト"
          icon={<Icon name="folder" size={16} />}
        />
        <TabsTab
          value="account"
          size="small"
          label="アカウント"
          icon={<Icon name="user" size={16} />}
        />
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
  ),
};

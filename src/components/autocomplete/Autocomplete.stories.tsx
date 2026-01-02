import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Field } from '../field/Field';
import { InputBox } from '../input-box/InputBox';
import {
  AutocompleteRoot,
  AutocompleteInput,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
} from './Autocomplete';

const meta: Meta = {
  title: 'Components/Autocomplete',
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

const tags = [
  'feature',
  'fix',
  'bug',
  'docs',
  'internal',
  'mobile',
  'component: accordion',
  'component: alert dialog',
  'component: autocomplete',
  'component: avatar',
  'component: checkbox',
  'component: dialog',
];

const DefaultStory = () => {
  const [value, setValue] = React.useState('com');

  return (
    <AutocompleteRoot items={tags} value={value} onValueChange={setValue} defaultOpen>
      <Field label="Search tags">
        <InputBox
          inputComponent={AutocompleteInput}
          value={value}
          onValueChange={setValue}
          placeholder="e.g. feature"
        />
      </Field>
      <AutocompletePortal>
        <AutocompletePositioner sideOffset={8}>
          <AutocompletePopup>
            <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
            <AutocompleteList>
              {(tag: string) => (
                <AutocompleteItem key={tag} value={tag}>
                  {tag}
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompletePopup>
        </AutocompletePositioner>
      </AutocompletePortal>
    </AutocompleteRoot>
  );
};

export const Default: Story = {
  render: () => <DefaultStory />,
};

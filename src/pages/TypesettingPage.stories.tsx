import type { Meta, StoryObj } from '@storybook/react';
import { TypesettingPage } from './TypesettingPage';

const meta: Meta<typeof TypesettingPage> = {
  title: 'Foundations/Typesetting',
  component: TypesettingPage,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    displayText: 'Display: 日本語の視認性を強く押し出す',
    headlineText: 'Headline: セクションの要点を素早く伝える',
    titleText: 'Title: 章やブロックの導線を作る',
    labelText: 'Label: ボタンやラベルに使う',
    editableLabelText: 'EditableLabel: 入力に関連するラベル',
    paragraphs: [
      '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。',
      '新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。',
    ],
  },
  argTypes: {
    displayText: { control: 'text' },
    headlineText: { control: 'text' },
    titleText: { control: 'text' },
    labelText: { control: 'text' },
    editableLabelText: { control: 'text' },
    paragraphs: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof TypesettingPage>;

export const Default: Story = {};

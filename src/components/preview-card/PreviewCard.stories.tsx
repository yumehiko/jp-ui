import type { Meta, StoryObj } from '@storybook/react';
import {
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from '..';
import styles from './PreviewCard.module.css';

const meta: Meta = {
  title: 'Components/PreviewCard',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const DefaultStory = () => (
  <div style={{ padding: 32 }}>
    <PreviewCardRoot>
      <p className={styles.Paragraph}>
        The principles of good{' '}
        <PreviewCardTrigger href="https://en.wikipedia.org/wiki/Typography">
          typography
        </PreviewCardTrigger>{' '}
        remain into the digital age.
      </p>
      <PreviewCardPortal>
        <PreviewCardPositioner sideOffset={12}>
          <PreviewCardPopup>
            <img
              className={styles.Image}
              src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
              alt="Station Hofplein signage in Rotterdam, Netherlands"
              width="448"
              height="300"
            />
            <p className={styles.Summary}>
              <strong>Typography</strong> is the art and science of arranging type
              to make written language clear, visually appealing, and effective in
              communication.
            </p>
          </PreviewCardPopup>
        </PreviewCardPositioner>
      </PreviewCardPortal>
    </PreviewCardRoot>
  </div>
);

export const Default: Story = {
  render: () => <DefaultStory />,
};

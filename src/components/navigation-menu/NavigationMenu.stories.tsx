import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  NavigationMenuArrow,
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '..';
import styles from './NavigationMenu.module.css';

const meta: Meta = {
  title: 'Components/NavigationMenu',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const overviewLinks = [
  {
    href: '/react/overview/quick-start',
    title: 'Quick Start',
    description: 'Install and assemble your first component.',
  },
  {
    href: '/react/overview/accessibility',
    title: 'Accessibility',
    description: 'Learn how we build accessible components.',
  },
  {
    href: '/react/overview/releases',
    title: 'Releases',
    description: 'See what’s new in the latest Base UI versions.',
  },
  {
    href: '/react/overview/about',
    title: 'About',
    description: 'Learn more about Base UI and our mission.',
  },
] as const;

const handbookLinks = [
  {
    href: '/react/handbook/styling',
    title: 'Styling',
    description: 'Style with plain CSS, Tailwind, CSS-in-JS, or CSS Modules.',
  },
  {
    href: '/react/handbook/animation',
    title: 'Animation',
    description: 'Animate with CSS transitions, keyframes, or libraries.',
  },
  {
    href: '/react/handbook/composition',
    title: 'Composition',
    description: 'Compose Base UI with your existing components.',
  },
] as const;

const DefaultStory = () => (
  <div style={{ padding: 32 }}>
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Overview
            <NavigationMenuIcon>
              <ChevronDownIcon />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={styles.GridLinkList}>
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <Link className={styles.LinkCard} href={item.href}>
                    <h3 className={styles.LinkTitle}>{item.title}</h3>
                    <p className={styles.LinkDescription}>{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Handbook
            <NavigationMenuIcon>
              <ChevronDownIcon />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={styles.FlexLinkList}>
              {handbookLinks.map((item) => (
                <li key={item.href}>
                  <Link className={styles.LinkCard} href={item.href}>
                    <h3 className={styles.LinkTitle}>{item.title}</h3>
                    <p className={styles.LinkDescription}>{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link className={styles.Trigger} href="https://github.com/mui/base-ui">
            GitHub
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuPortal>
        <NavigationMenuPositioner
          sideOffset={10}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          collisionAvoidance={{ side: 'none' }}
        >
          <NavigationMenuPopup>
            <NavigationMenuArrow>
              <ArrowSvg />
            </NavigationMenuArrow>
            <NavigationMenuViewport />
          </NavigationMenuPopup>
        </NavigationMenuPositioner>
      </NavigationMenuPortal>
    </NavigationMenuRoot>
  </div>
);

export const Default: Story = {
  render: () => <DefaultStory />,
};

function Link(
  props: React.ComponentPropsWithoutRef<typeof NavigationMenuLink>,
) {
  return <NavigationMenuLink render={<a />} {...props} />;
}

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className={styles.ArrowFill}
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className={styles.ArrowStroke}
      />
    </svg>
  );
}

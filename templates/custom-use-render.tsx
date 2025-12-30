import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import styles from './Text.module.css';

type TextProps = useRender.ComponentProps<'p'>;

export function Text({ render, ...props }: TextProps) {
  const element = useRender({
    defaultTagName: 'p',
    render,
    props: mergeProps<'p'>({ className: styles.Text }, props),
  });

  return element;
}

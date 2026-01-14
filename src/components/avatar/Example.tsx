import avatarImage from '../../assets/images/avator.jpg';
import { AvatarFallback, AvatarImage, AvatarRoot } from '..';

export function Example() {
  return (
    <>
      <AvatarRoot>
        <AvatarImage src={avatarImage} width="96" height="96" alt="" />
        <AvatarFallback>YM</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>YM</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot
        style={{
          ['--avatar-size' as string]: '32px',
          ['--avatar-text-offset' as string]: '0.06em',
        }}
      >
        <AvatarFallback>YM</AvatarFallback>
      </AvatarRoot>
    </>
  );
}

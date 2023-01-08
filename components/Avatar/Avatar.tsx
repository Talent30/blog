import avatarImage from '@/public/images/avatar.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { type ComponentProps } from 'react';

type Properties = Omit<ComponentProps<typeof Link>, 'href'> & {
  isLarge?: boolean;
};

export function AvatarLink({
  isLarge = false,
  className = '',
  ...props
}: Properties) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={`pointer-events-auto ${className}`}
      {...props}
    >
      <Image
        placeholder="blur"
        src={avatarImage}
        alt=""
        sizes={isLarge ? '4rem' : '2.25rem'}
        className={`
          rounded-full bg-zinc-100 object-cover dark:bg-zinc-800
          ${isLarge ? 'h-16 w-16' : 'h-9 w-9'}`}
      />
    </Link>
  );
}

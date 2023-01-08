import type {
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@/components/Social/SocialIcons';
import { type EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { type ComponentProps } from 'react';

type Properties = ComponentProps<typeof Link> & {
  icon: typeof GitHubLogoIcon | typeof LinkedInLogoIcon | typeof EnvelopeIcon;
};

export function SocialLink({ icon: Icon, ...props }: Properties) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-gray-500 transition group-hover:fill-orange-400 dark:fill-zinc-400 dark:group-hover:fill-orange-600" />
    </Link>
  );
}

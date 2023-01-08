import Link from 'next/link';
import { type PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{ href: string }>;

export function MobileNavItem({ href, children }: Properties) {
  return (
    <li>
      <Link href={href} className="block py-2">
        {children}
      </Link>
    </li>
  );
}

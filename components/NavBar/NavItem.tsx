'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{ href: string; layoutId: string }>;

export function NavItem({ href, children, layoutId }: Properties) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={`
          relative block px-3 py-2 leading-6 transition
          ${
            isActive
              ? 'text-orange-400 dark:text-orange-600'
              : 'hover:text-orange-400 dark:hover:text-orange-600'
          }`}
      >
        {children}
        {isActive ? (
          <motion.span
            layoutId={layoutId}
            className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-600/0 dark:via-orange-600/40 dark:to-orange-600/0"
          />
        ) : undefined}
      </Link>
    </li>
  );
}

import { Container } from '@/components/Container';
import Link from 'next/link';
import { type ComponentPropsWithoutRef } from 'react';

function NavLink({ href, children }: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      className="transition hover:text-orange-500 dark:hover:text-orange-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-gray-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-gray-900 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <p className="text-sm text-gray-500 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Jon Sun. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}

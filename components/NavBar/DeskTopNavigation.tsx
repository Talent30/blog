import { useId, type ComponentProps } from 'react';
import { NavItem } from './NavItem';

export function DesktopNavigation(props: ComponentProps<'nav'>) {
  const activeId = useId();
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-gray-900 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem layoutId={activeId} href="/">
          Home
        </NavItem>
        <NavItem layoutId={activeId} href="/articles">
          Articles
        </NavItem>
        <NavItem layoutId={activeId} href="/projects">
          Projects
        </NavItem>
        <NavItem layoutId={activeId} href="/about">
          About
        </NavItem>
        <NavItem layoutId={activeId} href="/uses">
          Uses
        </NavItem>
      </ul>
    </nav>
  );
}

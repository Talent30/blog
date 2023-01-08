'use client';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function toggleMode() {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const isSystemDarkMode = darkModeMediaQuery.matches;
  const isDarkMode = document.documentElement.classList.toggle('dark');

  if (isDarkMode === isSystemDarkMode) {
    delete window.localStorage.isDarkMode;
  } else {
    window.localStorage.isDarkMode = isDarkMode;
  }
}

export function ModeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-orange-300 stroke-gray-500 transition group-hover:fill-orange-400 group-hover:stroke-gray-700 group-active:fill-orange-500 group-active:stroke-gray-800 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-cyan-500" />
    </button>
  );
}

'use client';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { connect, machine } from '@zag-js/popover';
import { normalizeProps, Portal, useMachine } from '@zag-js/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useId, type ComponentProps } from 'react';
import { MobileNavItem } from './MobileNavItem';

export function MobileNavigation({
  className = '',
  ...props
}: ComponentProps<'button'>) {
  const [state, send] = useMachine(
    machine({
      id: useId(),
      modal: true,
    }),
  );

  const api = connect(state, send, normalizeProps);
  const Wrapper = api.portalled ? Portal : Fragment;

  return (
    <div {...api.anchorProps}>
      <button
        className={`group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium leading-6 text-gray-900 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 ${className}`}
        type="button"
        {...api.triggerProps}
        {...props}
      >
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-gray-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </button>
      <Wrapper>
        <AnimatePresence>
          {api.isOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm dark:bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
              }}
            />
          )}
        </AnimatePresence>

        <div {...api.contentProps} className="block">
          <AnimatePresence>
            {api.isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.15,
                  ease: 'easeInOut',
                }}
                className="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-gray-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
              >
                <div className="flex flex-row-reverse items-center justify-between">
                  <button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-50 focus:ring-1  focus:ring-gray-900/5  active:bg-gray-100  active:text-white dark:bg-zinc-900 dark:ring-white/10 dark:hover:bg-zinc-600 dark:hover:ring-white/20 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                    type="button"
                    {...api.closeTriggerProps}
                  >
                    <XMarkIcon className="h-6 w-6 rounded" />
                  </button>

                  <h2 className="text-sm font-medium text-gray-700 dark:text-zinc-400">
                    Navigation
                  </h2>
                </div>

                <nav className="mt-6">
                  <ul className="-my-2 divide-y divide-zinc-100 text-base text-gray-900 dark:divide-zinc-100/5 dark:text-zinc-300">
                    <MobileNavItem href="/about">About</MobileNavItem>
                    <MobileNavItem href="/articles">Articles</MobileNavItem>
                    <MobileNavItem href="/projects">Projects</MobileNavItem>
                    <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                    <MobileNavItem href="/uses">Uses</MobileNavItem>
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Wrapper>
    </div>
  );
}

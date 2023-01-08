import Link, { type LinkProps } from 'next/link';
import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

const variantStyles = {
  primary:
    'bg-gray-900 font-semibold text-gray-100 hover:bg-gray-700 active:bg-gray-800 active:text-gray-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-gray-100 font-medium text-zinc-900 hover:bg-gray-200 active:bg-gray-200 active:text-gray-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
};

type ButtonProperties<T> = PropsWithChildren<
  (T extends LinkProps['href']
    ? LinkProps & {
        href: T;
        type?: never;
      }
    : ComponentPropsWithoutRef<'button'> & {
        href?: never;
        type: 'button' | 'submit' | 'reset';
      }) & { className?: string; variant?: 'primary' | 'secondary' }
>;

export function Button<T>({
  href,
  className = '',
  type,
  children,
  variant = 'primary',
  ...props
}: ButtonProperties<T>) {
  const variantClassName = `inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none ${variantStyles[variant]} ${className}`;
  return href ? (
    <Link className={variantClassName} href={href} {...props}>
      {children}
    </Link>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={variantClassName} {...props}>
      {children}
    </button>
  );
}

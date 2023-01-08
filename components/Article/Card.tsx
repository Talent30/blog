import { type PolymorphicPropertiesWithoutReference } from '@/types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link, { type LinkProps } from 'next/link';
import {
  type ElementType,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

type CardLinkProperties = PropsWithChildren<LinkProps>;

function CardLink({ children, ...props }: CardLinkProperties) {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
}

type CardTitleProperits<T extends ElementType = 'h2'> =
  PolymorphicPropertiesWithoutReference<
    PropsWithChildren<{
      href: string;
    }>,
    T
  >;

function CardTitle<T extends ElementType = 'h2'>({
  as,
  href,
  children,
}: CardTitleProperits<T>) {
  const Component = as ?? 'h2';
  return (
    <Component className="text-base font-semibold tracking-tight text-gray-900 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
}

function CardDescription({ children }: PropsWithChildren) {
  return (
    <p className="relative z-10 mt-2 text-sm text-gray-700 dark:text-zinc-400">
      {children}
    </p>
  );
}

function CardCta({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-orange-400 dark:text-orange-600"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
}

type CardEyebrowProperties<T extends ElementType = 'p'> =
  PolymorphicPropertiesWithoutReference<
    PropsWithChildren<{
      isDecorate: boolean;
      className?: string;
    }>,
    T
  >;

function CardEyebrow<T extends ElementType = 'p'>({
  as,
  className = '',
  isDecorate = false,
  children,
  ...props
}: CardEyebrowProperties<T>) {
  const Component = as ?? 'p';
  return (
    <Component
      className={`${className} ${
        isDecorate ? 'pl-3.5' : ''
      } dark:text-zinc-500' relative z-10 order-first mb-3 flex items-center text-sm text-gray-500`}
      {...props}
    >
      {isDecorate ? (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-zinc-500" />
        </span>
      ) : undefined}
      {children}
    </Component>
  );
}

type CardProperties<T extends ElementType = 'div'> =
  PolymorphicPropertiesWithoutReference<
    PropsWithChildren<{ className?: string }>,
    T
  >;

export const Card = Object.assign(
  <T extends ElementType = 'div'>({
    as,
    className = '',
    children,
  }: CardProperties<T>) => {
    const Component = as ?? 'div';

    return (
      <Component
        className={`group relative flex flex-col items-start ${className}`}
      >
        {children}
      </Component>
    );
  },
  {
    Cta: CardCta,
    Link: CardLink,
    Title: CardTitle,
    Eyebrow: CardEyebrow,
    Description: CardDescription,
  },
);

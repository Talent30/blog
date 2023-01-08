import logoGallagher from '@/public/images/logos/gallagher.svg';
import logoPwc from '@/public/images/logos/pwc.svg';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export function Resume() {
  const resume = [
    {
      company: 'PwC',
      title: 'Front-End Developer',
      logo: logoPwc,
      start: '2023',
      end: 'Present',
    },
    {
      company: 'Gallagher',
      title: 'Customer Experience Developer',
      logo: logoGallagher,
      start: '2020',
      end: '2023',
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-gray-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none fill-gray-100 stroke-gray-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <li key={role.company} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={`${role.company} Logo`}
                className="h-7 w-7"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-gray-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-gray-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-gray-500 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}

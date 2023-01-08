'use client';
import { ArticleCard } from '@/components/Article';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Resume } from '@/components/Resume/Resume';
import { SocialLink } from '@/components/Social';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@/components/Social/SocialIcons';
import { TransitionLayout } from '@/components/TransitionLayout';
import { getArticles } from '@/utils/get-articles';
import {
  ArrowRightIcon,
  AtSymbolIcon,
  BookmarkIcon,
} from '@heroicons/react/24/solid';

const articles = getArticles();

export default function HomePage() {
  return (
    <TransitionLayout>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-5xl">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-gray-700 dark:text-zinc-400">
            I’m Jon, a Web developer based in New Zealand. I’m the founder and
            CEO of Planetaria, where we develop technologies that empower
            regular people to explore space on their own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubLogoIcon}
              target="_blank"
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInLogoIcon}
              target="_blank"
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Contact me via email"
              icon={AtSymbolIcon}
              target="_blank"
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <h2 className="flex text-sm font-semibold text-gray-900 dark:text-zinc-100">
              <BookmarkIcon className="h-6 w-6 flex-none fill-gray-100 stroke-gray-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
              <span className="ml-3">Recent articles</span>
            </h2>
            <div className="flex flex-col gap-16">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            <Button className="group mt-6 w-full" type="button">
              View all articles
              <ArrowRightIcon className="h-4 w-4 stroke-gray-400 transition group-active:stroke-gray-200 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </TransitionLayout>
  );
}

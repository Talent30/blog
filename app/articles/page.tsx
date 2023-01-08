import { ArticleCard } from '@/components/Article';
import { TransitionLayout } from '@/components/TransitionLayout';
import { getArticles } from '@/utils/get-articles';

const articles = getArticles();

export default function ArticlePage() {
  return (
    <TransitionLayout>
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-5xl">
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className="mt-6 text-base text-gray-700 dark:text-zinc-400">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-gray-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </TransitionLayout>
  );
}

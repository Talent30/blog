import { allArticles } from '@/.contentlayer/generated';
import { formatDate } from '@/utils/format-date';
// Import { useMDXComponent } from 'next-contentlayer/hooks';

type ArticlePageProperties = {
  params: {
    slug: string;
  };
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProperties) {
  const article = allArticles.find(
    (article) => article._raw.flattenedPath === params.slug,
  );
  // Const MDXComponent = useMDXComponent(article?.code);

  return (
    <div className="xl:relative">
      <div className="mx-auto max-w-2xl">
        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-5xl">
              {article?.title}
            </h1>
            <time
              dateTime={article?.date}
              className="order-first flex items-center text-base text-gray-500 dark:text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-zinc-500" />
              <span className="ml-3">{formatDate(article?.date ?? '')}</span>
            </time>
          </header>
          <div className="prose mt-8 dark:prose-invert">
            {/* <MDXComponent> </MDXComponent> */}
          </div>
        </article>
      </div>
    </div>
  );
}

import type { Article } from '@/.contentlayer/generated';
import { formatDate } from '@/utils/format-date';
import { Card } from './Card';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow isDecorate as="time" dateTime={article.date}>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

import { allArticles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export function getArticles() {
  return allArticles.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
}

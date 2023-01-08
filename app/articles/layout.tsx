import { Container } from '@/components/Container';
import { type PropsWithChildren } from 'react';

export default function ArticleLayout({ children }: PropsWithChildren) {
  return <Container className="mt-16 sm:mt-32">{children}</Container>;
}

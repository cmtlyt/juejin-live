import 'server-only';

import Link from 'next/link';

import { ArticleList } from './components/ArticleList';

interface PageProps {
  params: {
    tabId?: string;
  };
  searchParams: {
    sort?: 'recommend' | 'newest';
  };
}

export default async function IndexPage({ params, searchParams }: PageProps) {
  const { tabId = 'recommended' } = params;
  const { sort = 'recommend' } = searchParams;

  return (
    <main>
      <section>
        <section>
          <Link href="?sort=recommend">推荐</Link>
          <Link href="?sort=newest">最新</Link>
        </section>
        <ArticleList tabId={tabId} sort={sort} />
      </section>
    </main>
  );
}

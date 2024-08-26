import 'server-only';

import { ArticleList } from './components/ArticleList';

import { LinkList } from '@/components/Navbar/components/LinkList';

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
          <LinkList
            links={[
              {
                path: '?sort=recommend',
                title: '推荐',
                matchQuery: true,
                activeMatch: ['', 'sort=recommend'],
              },
              { path: '?sort=newest', title: '最新', matchQuery: true, activeMatch: 'sort=newest' },
            ]}
          />
        </section>
        <ArticleList tabId={tabId} sort={sort} />
      </section>
    </main>
  );
}

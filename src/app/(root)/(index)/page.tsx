import 'server-only';

import { gc } from '@cmtlyt/base';

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
    <main className="flex-1">
      <section>
        <section className="flex h-[4.9rem] border-b-[.1rem] border-gray-200 border-solid bg-white">
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
            linkClass="mx-[2rem] relative text-gray-400 hover:!text-[#1e80ff]"
            activeClass={gc([
              "!text-black before:content-['']",
              'before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2',
              'before:h-[.3rem] before:w-[55%] before:bg-[#1e80ff]',
            ])}
          />
        </section>
        <ArticleList tabId={tabId} sort={sort} />
      </section>
    </main>
  );
}

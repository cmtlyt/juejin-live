import { getArticleList } from './service';

interface PageProps {
  params: {
    tabId?: string;
  };
}

export default async function IndexPage({ params }: PageProps) {
  const { tabId = 'synthesis' } = params;

  const articleList = await getArticleList(tabId);

  return <main className="h-[400vh]">{JSON.stringify(articleList, null, 2)}</main>;
}

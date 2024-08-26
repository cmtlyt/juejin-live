'use client';

import { useEffect, useRef, useState } from 'react';

import { IArticle, getArticleList } from './service';
import { Article } from '../Article';

import { usePagination } from '@/hooks/usePagination';

interface IProps {
  tabId: string;
  sort: 'recommend' | 'newest';
}

export function ArticleList(props: IProps) {
  const { tabId, sort } = props;

  const [articles, setArticles] = useState<IArticle[]>([]);
  const pageInfo = useRef({ loading: false, page: 1, pageSize: 10 });
  const [fetchNextPage, updatePageInfo] = usePagination(getArticleList);

  const loadArticleList = async (cover?: boolean) => {
    if (cover) {
      updatePageInfo({ page: 1 });
    }

    const articles = await fetchNextPage({
      group: tabId,
      sort,
      page: pageInfo.current.page,
      pageSize: pageInfo.current.pageSize,
    });

    if (cover) {
      setArticles(articles);

      return;
    }

    setArticles((oldList) => [...oldList, ...articles]);
  };

  useEffect(() => {
    loadArticleList();
  }, []);

  useEffect(() => {
    loadArticleList(true);
  }, [sort]);

  return (
    <section>
      {articles.map((article) => (
        <Article key={article.id} articleInfo={article} />
      ))}
    </section>
  );
}

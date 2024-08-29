'use client';

import { useEffect, useRef, useState } from 'react';

import { IArticle, getArticleList } from './service';
import { Article } from '../Article';

import { usePagination } from '@/hooks/usePagination';
import BottomingOut from '@/components/BottomingOut';

interface IProps {
  tabId: string;
  sort: 'recommend' | 'newest';
}

export function ArticleList(props: IProps) {
  const { tabId, sort } = props;

  const doneRef = useRef(false);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [fetchNextPage, updatePageInfo] = usePagination(getArticleList);

  const loadArticleList = async (cover?: boolean) => {
    if (doneRef.current) return;

    if (cover) {
      updatePageInfo({ page: 1 });
    }

    const articles = await fetchNextPage({ group: tabId, sort });

    if (!articles.length) {
      doneRef.current = true;
    }

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
    <section className="px-[2rem] bg-white">
      {articles.map((article) => (
        <Article key={article.id} articleInfo={article} />
      ))}
      {!!articles.length && !doneRef.current && (
        <BottomingOut distance={100} onTrigger={loadArticleList} />
      )}
    </section>
  );
}

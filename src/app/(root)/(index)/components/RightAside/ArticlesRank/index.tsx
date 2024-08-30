'use client';

import { useCallback, useDeferredValue, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

import { RankWrapper } from '../RankWrapper';
import { loadData, RankInfo } from './service';
import { RankItem } from './RankItem';

export function ArticlesRank() {
  const [list, setList] = useState<RankInfo[]>([]);
  const deferedList = useDeferredValue(list);
  const loadDataRef = useRef({ exposeIds: '' });

  const loadMore = useCallback(() => {
    loadData(loadDataRef.current.exposeIds).then((res) => {
      setList(res);

      const oldExposeIds = loadDataRef.current.exposeIds;
      loadDataRef.current.exposeIds = `${oldExposeIds}${oldExposeIds && ','}${res.map((item) => item.id).join(',')}`;
    });
  }, []);

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <RankWrapper
      titleInfo={{
        title: '文章榜',
        icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65d192768e254a768c4391e2b92a4bb6~tplv-k3u1fbpfcp-watermark.image?',
        reloadFunc: loadMore,
      }}
    >
      {deferedList.map((item) => (
        <RankItem key={item.id} title={item.title} path={`/port/${item.id}`} rank={item.rank} />
      ))}
      <Link
        className="flex items-end h-[3.2rem] text-gray-400 text-[1.4rem] border-t-[.1rem] border-gray-200 border-solid"
        href="/hot/articles/1"
      >
        <section className="flex justify-center items-center w-full">
          <span>查看更多</span>
          <IoIosArrowForward />
        </section>
      </Link>
    </RankWrapper>
  );
}

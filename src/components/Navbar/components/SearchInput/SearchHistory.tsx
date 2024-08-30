'use client';

import { gc } from '@cmtlyt/base';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import { clearData, HistoryItem, loadData } from './service';

interface IProps {
  className?: string;
  onClickLink?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function SearchHistory(props: IProps) {
  const { className, onClickLink } = props;

  const [historyList, setHistoryList] = useState<HistoryItem[]>([]);

  const clearHistory = useCallback(() => {
    clearData();
    setHistoryList([]);
  }, []);

  useEffect(() => {
    loadData().then((res) => {
      setHistoryList(res);
    });
  }, []);

  if (!historyList?.length) return null;

  return (
    <section
      className={gc([
        'hidden',
        'absolute left-0 right-0 top-full',
        'text-[1.2rem]',
        'shadow-border bg-white',
        className,
      ])}
    >
      <section
        className={gc([
          'px-[1.2rem]',
          'flex items-center justify-between',
          'h-[3.7rem]',
          'text-gray-400',
          'border-b border-[#dfdfdf] border-solid',
        ])}
      >
        <span>搜索历史</span>
        <button className="text-[#1e80ff]" onClick={clearHistory}>
          清空
        </button>
      </section>
      <section className="flex flex-col">
        {historyList.map((item) => (
          <Link
            className="px-[1.2rem] py-[.6rem] text-gray-500 transition-colors hover:bg-gray-50"
            href={`/search?query=${item.title}`}
            onClick={onClickLink}
          >
            {item.title}
          </Link>
        ))}
      </section>
    </section>
  );
}

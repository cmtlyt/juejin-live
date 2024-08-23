'use client';

import { useRef } from 'react';
import { gc } from '@cmtlyt/base';

import styles from '../../../index.module.scss';
import { tabList } from '../../../constant';
import { LinkList } from '../../LinkList';

export function ClientTabbar({ staticLabel }: { staticLabel: React.ReactNode }) {
  const focusRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <input ref={focusRef} type="text" className="fixed size-0 top-[-1px] left-[-1px]" />
      <section className={gc(['group', 'relative', 'h-full'])}>
        {staticLabel}
        <div
          className={gc([
            styles.shrinkTabbar,
            'hidden',
            'absolute top-full left-[50%] translate-x-[-50%]',
            'flex-col',
            'p-[0.8rem]',
            'bg-white rounded-[0.6rem]',
            'group-focus-within:flex',
          ])}
        >
          <LinkList
            links={tabList}
            linkClass={gc([
              'flex justify-center items-center',
              'w-[14.2rem] h-[4.8rem]',
              'text-slate-600',
              'hover:bg-slate-100 hover:text-black',
            ])}
            onClick={() => {
              focusRef.current?.focus();
            }}
          />
        </div>
      </section>
    </>
  );
}

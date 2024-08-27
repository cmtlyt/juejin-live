'use client';

import { gc } from '@cmtlyt/base';

import { asideList } from './constant';
import styles from './index.module.scss';

import { LinkList } from '@/components/Navbar/components/LinkList';

const sortedAsideList = (() => {
  const tempList = [...asideList];
  const runkIndex = tempList.findIndex((item) => item.id === 'rank');

  if (runkIndex > -1) {
    const runkItem = tempList.splice(runkIndex, 1)[0];
    tempList.push(runkItem);
  }

  return tempList;
})();

interface IProps {
  className?: string;
}

export function Aside(props: IProps) {
  const { className } = props;

  return (
    <aside
      className={gc([
        styles.asideWrapper,
        className,
        'p-[1rem]',
        'sticky top-[2rem]',
        'h-max',
        'bg-white',
      ])}
    >
      <LinkList
        links={sortedAsideList}
        iconClass="mr-[1.2rem] size-[1.6rem]"
        spanClass="flex items-center flex-1"
        linkClass={gc([
          'px-[1.7rem] py-[1rem]',
          'items-center',
          'w-[16.4rem] h-[4.6rem]',
          'text-slate-600 hover:text-[#1e80ff]',
          'hover:bg-slate-50',
        ])}
        activeClass="!text-[#1e80ff] !bg-[#1e80ff22]"
        showIcon
      />
    </aside>
  );
}

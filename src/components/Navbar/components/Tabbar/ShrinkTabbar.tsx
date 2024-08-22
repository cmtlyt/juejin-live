import 'server-only';

import { getRandomString, gc } from '@cmtlyt/base';
import { BiSolidDownArrow } from 'react-icons/bi';

import styles from '../../index.module.scss';
import { tabList } from '../../constant';
import { LinkList } from '../LinkList';

export function ShrinkTabbar() {
  const unfoldId = getRandomString(8);

  return (
    <div className="group relative h-full">
      <label htmlFor={`ShrinkTabbr-${unfoldId}`} className={gc(['flex items-center', 'h-full'])}>
        <span className="text-[#1e80ff]">首页</span>
        <BiSolidDownArrow
          className={gc([
            'ml-[.4rem] size-[.8rem]',
            'transition-transform',
            'group-focus-within:text-[#1e80ff] group-focus-within:rotate-180',
          ])}
        />
      </label>
      <input
        className={gc(['peer', 'fixed size-0 top-[-1px] left-[-1px]', styles.shrinkTabbarCheckbox])}
        id={`ShrinkTabbr-${unfoldId}`}
      />
      <div
        className={gc([
          'hidden',
          'absolute top-full left-[50%] translate-x-[-50%]',
          'flex-col',
          'p-[0.8rem]',
          'bg-white rounded-[0.6rem]',
          'peer-focus:flex',
          styles.shrinkTabbar,
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
        />
      </div>
    </div>
  );
}

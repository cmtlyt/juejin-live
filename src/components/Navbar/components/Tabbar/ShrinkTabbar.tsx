import 'server-only';

import { getRandomString, gc } from '@cmtlyt/base';

import styles from '../../index.module.scss';
import { tabList } from '../../constant';
import { LinkList } from '../LinkList';

export function ShrinkTabbar() {
  const unfoldId = getRandomString(8);

  return (
    <div className="relative">
      <label htmlFor={`ShrinkTabbr-${unfoldId}`}>首页</label>
      <input
        className={gc([
          'peer',
          'fiexd size-0 overflow-hidden top-[-1px] left-[-1px]',
          styles.shrinkTabbarCheckbox,
        ])}
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
            'w-[14.2rem] h-[6rem]',
            'text-slate-600',
            'hover:bg-slate-100 hover:text-black',
          ])}
        />
      </div>
    </div>
  );
}

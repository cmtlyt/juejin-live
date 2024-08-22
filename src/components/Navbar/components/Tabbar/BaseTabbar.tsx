import 'server-only';

import { gc } from '@cmtlyt/base';

import { TabItem } from '../../constant';
import { LinkList } from '../LinkList';

interface IProps {
  tabList: TabItem[];
  activeClass?: string;
  className?: string;
}

export function BaseTabbar(props: IProps) {
  const { tabList, activeClass, className } = props;

  return (
    <div className={gc('flex', className)}>
      <LinkList
        links={tabList}
        linkClass={gc(['group', 'flex', 'px-[1.2rem] h-[6rem]', 'text-[1.4rem] text-slate-600'])}
        spanClass={gc([
          'flex items-center',
          'h-full',
          activeClass || 'group-hover:shadow-[inset_0_-0.2rem_0_#1e80ff] group-hover:text-black',
        ])}
      />
    </div>
  );
}

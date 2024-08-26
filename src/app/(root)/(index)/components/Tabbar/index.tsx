import { gc } from '@cmtlyt/base';

import styles from './index.module.scss';
import { asideList } from '../Aside/constant';

import { LinkList } from '@/components/Navbar/components/LinkList';

export function Tabbar() {
  return (
    <section className={gc([styles.tabbarWrapper, 'sticky top-0 z-10', 'bg-white'])}>
      <section className="mr-[12.4rem] ml-[11.2rem] flex">
        <LinkList
          links={asideList}
          linkClass="h-[4.6rem] px-[1.2rem] text-[1.4rem] text-slate-600"
          showSubTabs
        />
      </section>
    </section>
  );
}

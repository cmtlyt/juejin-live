import 'server-only';

import { gc } from '@cmtlyt/base';

import styles from './index.module.scss';
import { Tabbar } from './components/Tabbar';
import { Aside } from './components/Aside';
import { RightAside } from './components/RightAside';

export default function IndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-slate-50">
      <Tabbar className={styles.tabbarWrapper} />
      <section className={gc([styles.contentWrapper, 'mx-auto mt-[2rem] flex w-[120rem]'])}>
        <Aside className="mr-[2rem]" />
        {children}
        <RightAside className="ml-[2rem]" />
      </section>
    </section>
  );
}

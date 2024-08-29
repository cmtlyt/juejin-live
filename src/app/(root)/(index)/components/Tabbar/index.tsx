import { gc } from '@cmtlyt/base';

import styles from './index.module.scss';
import { asideList } from '../Aside/constant';

import { LinkList } from '@/components/Navbar/components/LinkList';
import { TabItem } from '@/components/Navbar/constant';

interface IProps {
  links?: TabItem[];
  className?: string;
  linkClass?: string;
  tabbarClass?: string;
}

export function Tabbar(props: IProps) {
  const { linkClass, className, links = asideList, tabbarClass } = props;

  return (
    <section
      className={gc([
        className,
        'sticky top-[var(--navbar-height,0)] z-10',
        'bg-white',
        'transition-[top] duration-1000',
      ])}
    >
      <section
        className={gc([tabbarClass, styles.tabbarContent, 'mr-[12.4rem] ml-[11.2rem] flex'])}
      >
        <LinkList
          links={links}
          linkClass={gc([
            linkClass,
            'h-[4.6rem] px-[1.2rem] text-[1.4rem] text-slate-600 hover:text-[#1e80ff]',
          ])}
          showSubTabs
          subTabInfo={{ listClass: styles.subList }}
        />
      </section>
    </section>
  );
}

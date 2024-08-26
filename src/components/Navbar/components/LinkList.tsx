'use client';

import { MouseEventHandler } from 'react';
import Link from 'next/link';
import { gc } from '@cmtlyt/base';
import { usePathname } from 'next/navigation';

import { TabItem } from '../constant';
import styles from '../index.module.scss';

interface ISubLinkInfo {
  linkClass?: string;
  spanClass?: string;
  listClass?: string;
  activeClass?: string;
}
interface IProps {
  links: TabItem[];

  linkClass?: string;
  spanClass?: string;
  activeClass?: string;
  iconClass?: string;

  showSubTabs?: boolean;
  subTabInfo?: ISubLinkInfo;

  showIcon?: boolean;

  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

interface ISubLinkListProps extends ISubLinkInfo {
  links: TabItem[];
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function SubLinkList(props: ISubLinkListProps) {
  const { links, listClass, linkClass, spanClass, activeClass, onClick } = props;
  const pathname = usePathname();

  return (
    <section
      className={gc(
        listClass || [
          'hidden group-hover:flex',
          'absolute top-full left-0',
          'p-[1.5rem]',
          'flex-wrap gap-[1.2rem]',
          'w-[36.5rem]',
          'bg-white shadow-border',
        ],
      )}
    >
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          target={link.target}
          className={gc(
            linkClass || [
              'px-[.7em] py-[.1em]',
              'text-[1.4rem] text-[#999] hover:text-[#1e80ff]',
              'bg-[#eee] rounded-full',
            ],
            ['transition-colors', { [activeClass || styles.activeLink]: link.path === pathname }],
          )}
          onClick={onClick}
        >
          <span className={spanClass}>{link.title}</span>
        </Link>
      ))}
    </section>
  );
}

export function LinkList(props: IProps) {
  const {
    links,

    linkClass,
    spanClass,
    activeClass,
    iconClass,

    showSubTabs,
    subTabInfo,

    showIcon,
    onClick,
  } = props;
  const pathname = usePathname();

  return links.map((link) => (
    <section
      className={gc([
        linkClass,
        'group relative',
        { [activeClass || styles.activeLink]: link.path === pathname },
      ])}
    >
      <Link
        key={link.path}
        href={link.path}
        target={link.target}
        className={gc(['flex items-center justify-center', 'size-full', 'transition-colors'])}
        onClick={onClick}
      >
        {link.Icon && showIcon && <link.Icon className={iconClass} />}
        <span className={spanClass}>{link.title}</span>
      </Link>
      {link.subTabs && showSubTabs && (
        <SubLinkList
          links={link.subTabs}
          {...subTabInfo}
          onClick={(e) => {
            if (onClick) {
              e.stopPropagation();
              onClick(e);
            }
          }}
        />
      )}
    </section>
  ));
}

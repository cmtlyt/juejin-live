'use client';

import { MouseEventHandler } from 'react';
import Link from 'next/link';
import { gc } from '@cmtlyt/base';
import { usePathname } from 'next/navigation';

import { TabItem } from '../constant';
import styles from '../index.module.scss';

interface IProps {
  links: TabItem[];
  linkClass?: string;
  spanClass?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function LinkList(props: IProps) {
  const { links, linkClass, spanClass, onClick } = props;
  const pathname = usePathname();

  return links.map((link) => (
    <Link
      key={link.path}
      href={link.path}
      target={link.target}
      className={gc([
        linkClass,
        'transition-colors',
        { [styles.activeLink]: link.path === pathname },
      ])}
      onClick={onClick}
    >
      <span className={spanClass}>{link.title}</span>
    </Link>
  ));
}

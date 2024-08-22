'use client';

import Link from 'next/link';
import { gc } from '@cmtlyt/base';
import { usePathname } from 'next/navigation';

import { TabItem } from '../constant';

interface IProps {
  links: TabItem[];
  linkClass?: string;
  spanClass?: string;
}

export function LinkList(props: IProps) {
  const { links, linkClass, spanClass } = props;
  const pathname = usePathname();

  return links.map((link) => (
    <Link
      key={link.path}
      href={link.path}
      target={link.target}
      className={gc([linkClass, 'transition-colors', { 'text-[#1e80ff]': link.path === pathname }])}
    >
      <span className={spanClass}>{link.title}</span>
    </Link>
  ));
}

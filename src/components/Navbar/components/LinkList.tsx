'use client';

import { MouseEventHandler } from 'react';
import Link from 'next/link';
import { gc } from '@cmtlyt/base';
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from 'next/navigation';

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
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function matchFunc(linkPath: string | string[], curPath: string, matchQuery?: boolean) {
  if (typeof linkPath === 'string') {
    const queryStart = curPath.indexOf('?');
    linkPath = queryStart > 0 ? linkPath.slice(queryStart) : linkPath;

    if (matchQuery) {
      return curPath.includes(linkPath);
    }

    return curPath === linkPath;
  }

  if (!Array.isArray(linkPath)) return false;

  const _linkPath = linkPath.map((item) => {
    const regIdx = item.indexOf('reg:');

    if (~regIdx) {
      return new RegExp(item.slice(regIdx + 4));
    }

    return item;
  });

  return _linkPath.some((match) => {
    if (typeof match === 'string') {
      if (matchQuery && match) {
        return curPath.includes(match);
      }

      return curPath === match;
    }

    return match.test(curPath);
  });
}

function checkIsActive(
  linkInfo: TabItem,
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
): boolean {
  const { path, matchQuery, activeMatch: matchs = path } = linkInfo;

  return matchFunc(matchs, matchQuery && matchs ? searchParams.toString() : pathname, matchQuery);
}

function SubLinkList(props: ISubLinkListProps) {
  const { links, listClass, linkClass, spanClass, activeClass, pathname, searchParams, onClick } =
    props;

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
            [
              'transition-colors',
              {
                [activeClass || styles.activeLink]: checkIsActive(link, pathname, searchParams),
              },
            ],
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
  const searchParams = useSearchParams();

  return links.map((link) => (
    <section
      className={gc([
        linkClass,
        'group relative',
        {
          [activeClass || styles.activeLink]: checkIsActive(link, pathname, searchParams),
        },
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
          pathname={pathname}
          searchParams={searchParams}
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

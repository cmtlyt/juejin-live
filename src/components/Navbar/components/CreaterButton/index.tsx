import { gc } from '@cmtlyt/base';
import Link from 'next/link';
import { BiSolidDownArrow } from 'react-icons/bi';

import styles from '../../index.module.scss';

export function CreaterButton() {
  return (
    <section
      className={gc([
        'flex items-center',
        'w-full h-[3.6rem]',
        'text-white whitespace-nowrap',
        'overflow-hidden',
        'bg-[#1e80ff] rounded-[.2rem]',
      ])}
    >
      <Link
        href="/creator/home"
        className={gc(['flex items-center justify-center', 'size-full text-[1.4rem]'])}
      >
        创作者中心
      </Link>
      <section
        className={gc([
          styles.createrArrow,
          'peer',
          'flex items-center justify-center',
          'h-full w-[2rem]',
        ])}
      >
        <BiSolidDownArrow className="size-[.8rem]" />
      </section>
      {/* todo: 展开列表 */}
    </section>
  );
}

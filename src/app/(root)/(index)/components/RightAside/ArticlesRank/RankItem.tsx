import { gc } from '@cmtlyt/base';
import Link from 'next/link';

import styles from './index.module.scss';

interface IProps {
  rank: number;
  title: string;
  path: string;
}

function getRankStyle(rank: number) {
  if (rank < 4) {
    return styles[`rank${rank}`];
  }

  return styles.rankOther;
}

export function RankItem(props: IProps) {
  const { rank, title, path } = props;

  return (
    <Link
      href={path}
      className="box-border px-[.8rem] flex items-center w-full h-[3.8rem] text-[1.4rem]"
    >
      <section
        className={gc([
          styles.rank,
          getRankStyle(rank),
          'flex-shrink-0 h-[2.2rem] w-[2.8rem] font-extrabold',
        ])}
      >
        {rank}
      </section>
      <section className="text-nowrap text-ellipsis overflow-hidden">{title}</section>
    </Link>
  );
}

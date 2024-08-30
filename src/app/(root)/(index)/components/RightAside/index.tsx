import { gc } from '@cmtlyt/base';

import { ArticlesRank } from './ArticlesRank';

interface IProps {
  className?: string;
}

export function RightAside(props: IProps) {
  const { className } = props;

  return (
    <aside className={gc(['w-[26rem]', className])}>
      <ArticlesRank />
    </aside>
  );
}

import 'server-only';

import { gc } from '@cmtlyt/base';

interface IProps {
  count: number;
  className?: string;
  max?: number;
}

export function Badge(props: IProps) {
  const { count, className, max = 99 } = props;

  return (
    <span
      className={gc([
        'flex items-center justify-center',
        'px-[0.2rem]',
        'h-[1.4rem] min-w-[1.4rem]',
        'text-white text-[1.2rem]',
        'bg-red-600 rounded-full',
        className,
      ])}
    >
      {count > max ? `${max}+` : count}
    </span>
  );
}

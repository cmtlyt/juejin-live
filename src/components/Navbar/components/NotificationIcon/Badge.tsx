import { gc } from '@cmtlyt/base';

interface IProps {
  count: number;
  className?: string;
}

export function Badge(props: IProps) {
  const { count, className } = props;

  return (
    <span
      className={gc([
        'flex items-center justify-center',
        'size-[1.4rem]',
        'text-white text-[1.2rem]',
        'bg-red-600 rounded-full',
        className,
      ])}
    >
      {count}
    </span>
  );
}

import Link from 'next/link';
import { gc } from '@cmtlyt/base';

interface ILinkTagProps {
  text: string;
  href: string;
  className?: string;
}

export function LinkTag(props: ILinkTagProps) {
  const { text, href, className } = props;

  return (
    <Link
      href={href}
      className={gc([
        'text-ellipsis overflow-hidden',
        'px-[.6rem] ml-[.6rem]',
        'max-w-[6.5rem] h-[1.8rem] leading-[1.8rem]',
        'bg-gray-100',
        'text-[1.2rem]',
        'transition-colors',
        className,
      ])}
    >
      {text}
    </Link>
  );
}

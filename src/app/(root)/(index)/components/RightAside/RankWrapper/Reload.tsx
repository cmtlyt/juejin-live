'use client';

import { IoReload } from 'react-icons/io5';
import { TAnyFunc } from '@cmtlyt/base';

interface IProps {
  text?: string;
  reloadFunc: TAnyFunc;
}

export function Reload(props: IProps) {
  const { text = '换一换', reloadFunc } = props;

  return (
    <section
      className="flex items-center text-[1.2rem] text-slate-500 cursor-pointer hover:text-[#1e80ff]"
      onClick={reloadFunc}
    >
      <IoReload className="mr-[.4rem] text-[1.4rem] font-bold" />
      <span>{text}</span>
    </section>
  );
}

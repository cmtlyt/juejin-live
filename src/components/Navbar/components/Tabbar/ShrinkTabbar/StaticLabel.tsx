import 'server-only';

import { gc } from '@cmtlyt/base';
import { BiSolidDownArrow } from 'react-icons/bi';

export function StaticLabel() {
  return (
    <label className="h-full">
      <input className={gc(['fixed size-0 top-[-1px] left-[-1px]'])} />
      <section className={gc(['flex items-center', 'h-full'])}>
        <span className="flex-shrink-0 text-[#1e80ff]">首页</span>
        <BiSolidDownArrow
          className={gc([
            'ml-[.4rem] size-[.8rem]',
            'transition-transform',
            'group-focus-within:rotate-180 group-focus-within:text-[#1e80ff]',
          ])}
        />
      </section>
    </label>
  );
}

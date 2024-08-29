import { gc } from '@cmtlyt/base';
import { BiSearch } from 'react-icons/bi';

import { SearchHistory } from './SearchHistory';

export function SearchInput() {
  return (
    <form className="group relative my-auto flex items-center h-[3.4rem]" action="/search">
      <section
        className={gc([
          'flex items-center',
          'px-[.1rem] pr-[.2rem] size-full',
          'shadow-border rounded-[.4rem]',
          'overflow-hidden',
          'focus-within:border-[#1e80ff]',
        ])}
      >
        <input
          type="text"
          autoComplete="off"
          placeholder="搜索稀土掘金"
          name="query"
          className="flex-1 pl-[1.2rem] size-full"
        />
        <button
          className={gc([
            'flex items-center justify-center',
            'w-[4.4rem] h-[3rem]',
            'text-[1.8rem] font-bold text-slate-500',
            'rounded-[.2rem] bg-slate-100',
            'transition-colors duration-300',
            'group-focus-within:bg-[#eaf2ff] group-focus-within:text-[#1e80ff]',
          ])}
        >
          <BiSearch />
        </button>
      </section>
      <SearchHistory className="group-focus-within:block" />
    </form>
  );
}

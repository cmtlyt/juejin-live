import Image from 'next/image';
import Link from 'next/link';
import { gc } from '@cmtlyt/base';
import { IoEyeOutline } from 'react-icons/io5';
import { BiLike } from 'react-icons/bi';

import { IArticle } from '../ArticleList/service';

import { LinkTag } from '@/components/Tag';

interface IProps {
  articleInfo: IArticle;
}

export function Article(props: IProps) {
  const { articleInfo } = props;

  const { title, content, tags = [], cover, view, thumbs, path, authorInfo } = articleInfo;

  return (
    <Link href={path}>
      <article
        className={gc([
          'py-[1.2rem]',
          'flex',
          'w-full',
          'text-[1.4rem] text-gray-500 ',
          'bg-white border-b-[.1rem] border-gray-100 border-solid',
        ])}
      >
        <section className={gc(['flex-1 flex flex-col'])}>
          <span className="line-clamp-1 text-black text-[1.6rem] font-bold">中文{title}</span>
          <span className="line-clamp-1 my-[.4rem]">{content}</span>
          <section className="flex justify-between">
            <section className="flex items-center">
              <section className="pr-[1.2rem] mr-[1.2rem] shadow-[.1rem_0_0_#0001]">
                <span className="transition-colors hover:text-[#1e80ff]">{authorInfo.name}</span>
              </section>
              <section className="mr-[2.4rem] flex items-center">
                <IoEyeOutline className="size-[1.6rem]" />
                <span className="ml-[.4rem]">{view}</span>
              </section>
              <form>
                <button className="mr-[2.4rem] flex items-center transition-colors hover:text-[#1e80ff]">
                  <BiLike className="size-[1.6rem]" />
                  <span className="ml-[.4rem]">{thumbs}</span>
                </button>
              </form>
            </section>
            <section className="flex items-center">
              {tags.map((tag) => (
                <LinkTag
                  key={tag.path}
                  href={tag.path}
                  text={tag.title}
                  className="hover:text-[#1e80ff]"
                />
              ))}
            </section>
          </section>
        </section>
        {cover && (
          <section className="flex-shrink-0 ml-[2.4rem] w-[11rem] h-[7.4rem]">
            <Image src={cover} width={110} height={74} className="size-full object-cover" alt="" />
          </section>
        )}
      </article>
    </Link>
  );
}

import { TAnyFunc } from '@cmtlyt/base';
import Image from 'next/image';

import { Reload } from './Reload';

interface TitleProps {
  title: string;
  icon?: string | React.ReactNode;
  reloadFunc?: TAnyFunc;
}

function Title(props: TitleProps) {
  const { title, icon, reloadFunc } = props;

  return (
    <section className="px-[.8rem] pb-[1.2rem] flex items-center justify-between border-b-[.1rem] border-gray-200 border-solid bg-white">
      <section className="flex items-center">
        <section className="mr-[.8rem]">
          {typeof icon === 'string' ? <Image src={icon} width={20} height={20} alt="" /> : icon}
        </section>
        <span className="font-bold">{title}</span>
      </section>
      {reloadFunc && <Reload reloadFunc={reloadFunc} />}
    </section>
  );
}

interface IProps {
  children?: React.ReactNode;
  titleInfo?: TitleProps;
}

export function RankWrapper(props: IProps) {
  const { children, titleInfo } = props;

  return (
    <section className="box-border w-[26rem] bg-white px-[.8rem] py-[1.2rem]">
      {titleInfo && <Title {...titleInfo} />}
      <section>{children}</section>
    </section>
  );
}

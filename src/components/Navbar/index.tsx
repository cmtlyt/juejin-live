import Link from 'next/link';
import Image from 'next/image';
import { gc } from '@cmtlyt/base';

import styles from './index.module.scss';
import { otherTabList } from './constant';
import { Tabbar } from './components/Tabbar';
import { BaseTabbar } from './components/Tabbar/BaseTabbar';
import { SearchInput } from './components/SearchInput';
import { CreaterButton } from './components/CreaterButton';
import { NotificationIcon } from './components/NotificationIcon';
import { Avatar } from './components/Avatar';
import { ScrollHidden } from './ScreenHidden';

function Icon() {
  return (
    <Link href="/" className="flex items-center h-full flex-shrink-0">
      <Image
        className={gc([styles.bigLogo, 'mr-[1.2rem]'])}
        src="https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
        width={107}
        height={22}
        alt=""
      />
      <Image
        className={styles.logo}
        src="https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg"
        width={31}
        height={24}
        alt=""
      />
    </Link>
  );
}

export function Navbar() {
  return (
    <ScrollHidden>
      <section
        className={gc([
          styles.tabbarWrapper,
          'flex items-center justify-between',
          'h-[6rem] w-full mx-auto max-w-[140rem]',
        ])}
      >
        <div className="flex items-center h-full">
          <Icon />
          <Tabbar />
          <BaseTabbar
            className={styles.otherTab}
            tabList={otherTabList}
            activeClass="group-hover:text-black"
          />
        </div>
        <div
          className={gc([
            styles.searchWrapper,
            'grid',
            'h-max',
            'transition-[grid-template-columns] duration-300',
          ])}
        >
          <SearchInput />
          <section
            className={gc([
              styles.createrButton,
              'flex items-center',
              'h-full',
              'ml-[2.4rem] mr-[1.2rem]',
            ])}
          >
            <CreaterButton />
          </section>
          <section className="flex items-center overflow-hidden">
            <section className="ml-[1.2rem] mr-[2.4rem] w-[1.8rem] h-[2.4rem]">
              <NotificationIcon />
            </section>
            <section className="size-[4rem]">
              <Avatar />
            </section>
          </section>
        </div>
      </section>
    </ScrollHidden>
  );
}

// 1220px main left-aside hidden
// 1190px navbar tab shrink
// 1000px main right-aside hidden
// 800px navbar creater button hidden
// 640px navbar logo switch to icon
// 600px main not padding and width is 100vw

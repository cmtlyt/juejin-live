import Link from 'next/link';
import Image from 'next/image';
import { gc } from '@cmtlyt/base';

import styles from './index.module.scss';
import { otherTabList } from './constant';
import { Tabbar } from './components/Tabbar';
import { BaseTabbar } from './components/Tabbar/BaseTabbar';

function Icon() {
  return (
    <Link href="/">
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
    <nav className={styles.navbarWrapper}>
      <div className="flex items-center">
        <Icon />
        <Tabbar />
        <BaseTabbar
          className={styles.otherTab}
          tabList={otherTabList}
          activeClass="group-hover:text-black"
        />
      </div>
    </nav>
  );
}

// 1220px main left-aside hidden
// 1190px navbar tab shrink
// 1000px main right-aside hidden
// 800px navbar creater button hidden
// 640px navbar logo switch to icon
// 600px main not padding and width is 100vw

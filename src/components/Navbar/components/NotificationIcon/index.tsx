import 'server-only';

import { IoNotifications } from 'react-icons/io5';
import { gc } from '@cmtlyt/base';

import { Badge } from './Badge';
import { getNotificationInfo } from './service';

export async function NotificationIcon() {
  const info = await getNotificationInfo();

  const { total } = info;

  return (
    <section className="relative size-full">
      <section className="peer size-full">
        <IoNotifications className={gc(['size-full', 'text-slate-400 hover:text-slate-600'])} />
        <Badge count={total} className="absolute left-[90%] -top-[.5rem]" />
      </section>
      {/* todo: 展开列表 */}
    </section>
  );
}

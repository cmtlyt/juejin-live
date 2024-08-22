import { IoNotifications } from 'react-icons/io5';
import { gc } from '@cmtlyt/base';

import { Badge } from './Badge';

export function NotificationIcon() {
  return (
    <section className="relative size-full">
      <section className="peer size-full">
        <IoNotifications className={gc(['size-full', 'text-slate-400 hover:text-slate-600'])} />
        <Badge count={3} className="absolute left-[90%] -top-[.5rem]" />
      </section>
      {/* todo: 展开列表 */}
    </section>
  );
}

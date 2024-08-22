import 'server-only';

import { TabbarSwitch } from './TabSwitch';
import { BaseTabbar } from './BaseTabbar';
import { ShrinkTabbar } from './ShrinkTabbar';
import { tabList } from '../../constant';

export function Tabbar() {
  return (
    <TabbarSwitch baseTabbar={<BaseTabbar tabList={tabList} />} shrinkTabbar={<ShrinkTabbar />} />
  );
}

export interface TabItem {
  title: string;
  path: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  subTabs?: TabItem[];
}

export const tabList: TabItem[] = [
  { title: '首页', path: '/' },
  { title: 'BOT', path: '/bots' },
  { title: '沸点', path: '/pins' },
  { title: '课程', path: '/course' },
  { title: '直播', path: '/live' },
  { title: '活动', path: '/events/all' },
  { title: '竞赛', path: '/challenge' },
];

export const otherTabList: TabItem[] = [
  {
    title: '商城',
    path: 'https://detail.youzan.com/show/goods/newest?kdt_id=104340304',
    target: '_blank',
  },
  { title: 'APP', path: '/app' },
  { title: '插件', path: '/extension' },
];

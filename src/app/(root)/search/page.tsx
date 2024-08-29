import { Tabbar } from '../(index)/components/Tabbar';

interface PageProps {
  searchParams: {
    query: string;
  };
}

const getSearchTabs = (query: string) => [
  {
    title: '综合',
    path: `?query=${query}&type=0`,
    matchQuery: true,
    activeMatch: ['type=0', 'reg:^(?!.*type=\\d+).*'],
  },
  { title: '文章', path: `?query=${query}&type=2`, matchQuery: true, activeMatch: ['type=2'] },
  { title: '课程', path: `?query=${query}&type=12`, matchQuery: true, activeMatch: ['type=12'] },
  { title: '标签', path: `?query=${query}&type=9`, matchQuery: true, activeMatch: ['type=9'] },
  {
    title: '用户',
    path: `?query=${query}&type=1`,
    matchQuery: true,
    activeMatch: ['reg:type=1(\\D|$)'],
  },
];

export default function Page({ searchParams }: PageProps) {
  const { query } = searchParams;

  return (
    <section>
      <Tabbar
        tabbarClass="max-w-[96rem] !m-auto"
        linkClass="w-[6rem]"
        links={getSearchTabs(query)}
      />
    </section>
  );
}

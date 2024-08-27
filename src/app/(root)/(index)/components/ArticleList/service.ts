'use server';

interface TagInfo {
  title: string;
  path: string;
}

interface AuthorInfo {
  avatar: string;
  name: string;
  firm: string;
  posts: string;
  concern: number;
  fans: number;
}

export interface IArticle {
  id: number;
  path: string;
  title: string;
  content: string;
  view: number;
  thumbs: number;
  tags?: TagInfo[];
  authorInfo: AuthorInfo;
  cover?: string;
}

interface QueryParams {
  group: string;
  page: number;
  pageSize: number;
  sort: string;
}

function mock(source: any[]): IArticle[] {
  return source.map((item) => {
    return {
      ...item,
      path: `/article/${item.id}`,
      content: item.body,
      view: ~~(Math.random() * 100),
      thumbs: ~~(Math.random() * 100),
      tags: [
        {
          title: '标签1',
          path: '/tags/标签1',
        },
        {
          title: '标签2',
          path: '/tags/标签2',
        },
        ...(Math.random() > 0.5
          ? [
              {
                title: 'JavaScript',
                path: '/tags/JavaScript',
              },
            ]
          : []),
      ],
      authorInfo: {
        avatar:
          'https://p9-passport.byteacctimg.com/img/user-avatar/5c3a0a8f4f1b471a9e2c49398609aaf9~80x80.awebp',
        name: '张三',
        firm: '阿里',
        posts: '前端开发',
        concern: ~~(Math.random() * 100),
        fans: ~~(Math.random() * 100),
      },
      cover:
        Math.random() > 0.5
          ? 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d717ccae610432a9eab1e8818b755d4~tplv-k3u1fbpfcp-jj:216:144:0:0:q75.avis#?w=1330&h=630&s=33364&e=jpg&b=feeed5'
          : '',
    };
  });
}

export async function getArticleList(params: QueryParams) {
  const { group, page, pageSize, sort } = params;

  console.log('getArticleList', group, page, pageSize, sort);

  return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`)
    .then<IArticle[]>((res) => res.json())
    .then((res) => {
      return mock(res);
    });
}

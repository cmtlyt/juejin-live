'use server';

interface TagInfo {
  title: string;
  url: string;
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

export async function getArticleList(params: QueryParams) {
  const { group, page, pageSize, sort } = params;

  console.log('getArticleList', group, page, pageSize, sort);

  return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`)
    .then<IArticle[]>((res) => res.json())
    .then((res) => {
      return res;
    });
}

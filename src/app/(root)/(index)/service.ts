export async function getArticleList(group: string, page = 1, pageSize = 10) {
  console.log('getArticleList', group, page, pageSize);

  return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`).then(
    (res) => res.json(),
  );
}

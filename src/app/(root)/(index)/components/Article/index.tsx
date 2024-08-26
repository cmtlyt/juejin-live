import { IArticle } from '../ArticleList/service';

interface IProps {
  articleInfo: IArticle;
}

export function Article(props: IProps) {
  const { articleInfo } = props;

  return (
    <article>
      <pre>{JSON.stringify(articleInfo, null, 2)}</pre>
    </article>
  );
}

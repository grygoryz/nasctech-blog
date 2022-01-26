import { useArticles } from '../../../helpers/hooks';
import s from './Articles.module.css';
import ArticleCard from '../../ArticleCard';

const ArticlesPage = () => {
  const {
    data, loading, error, invertSorting, onCreateArticleClick,
  } = useArticles();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error occurred:
        {error.message}
      </div>
    );
  }

  return (
    <div className={s.wrap}>
      <div className={s.buttons}>
        <button type="button" onClick={invertSorting}>Invert sort</button>
        <button type="button" onClick={onCreateArticleClick}>Create article</button>
      </div>
      {data?.map(({ id, heading, created_at: createdAt }) => (
        <ArticleCard className={s.card} key={id} heading={heading} createdAt={createdAt} />
      ))}
    </div>
  );
};

export default ArticlesPage;

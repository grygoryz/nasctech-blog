import { useParams } from 'react-router-dom';
import s from './Article.module.css';
import { useArticle } from '../../../helpers/hooks';
import ArticleDetails from '../../ArrticleDetails';
import ArticleForm from '../../ArticleForm';

const ArticlePage = () => {
  const { id } = useParams();
  const {
    data, loading, error, onBackClick, onEditClick, onDeleteArticle, isEdit, onEditSubmit,
  } = useArticle(id);

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

  const {
    heading, content, created_at: createdAt, updated_at: updatedAt,
  } = data || {};

  return (
    <div className={s.wrap}>
      {isEdit
        ? <ArticleForm heading={heading} content={content} onSubmit={onEditSubmit} />
        : (
          <>
            <div className={s.buttons}>
              <button type="button" onClick={onBackClick}>Back</button>
              <button type="button" onClick={onDeleteArticle}>Delete</button>
              <button type="button" onClick={onEditClick}>onEditClick</button>
            </div>
            <ArticleDetails
              heading={heading}
              createdAt={createdAt}
              content={content}
              updatedAt={updatedAt}
            />
          </>
        )}
    </div>
  );
};

export default ArticlePage;

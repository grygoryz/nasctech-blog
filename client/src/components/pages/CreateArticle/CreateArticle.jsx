import { useNavigate } from 'react-router-dom';
import s from './CreateArticle.module.css';
import ArticleForm from '../../ArticleForm';
import { Articles } from '../../../api';
import routes from '../../../helpers/routes';

const CreateArticlePage = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    if (!values.heading || !values.content) return;

    Articles.createArticle(values.heading, values.content)
      .then(() => navigate(routes.articles));
  };

  return (
    <div className={s.wrap}>
      <ArticleForm onSubmit={onSubmit} />
    </div>
  );
};

export default CreateArticlePage;

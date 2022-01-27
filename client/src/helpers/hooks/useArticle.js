import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Articles } from '../../api';
import routes from '../routes';

export const useArticle = (id) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Articles.getArticle(id)
      .then((articles) => setData(articles))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  const onDeleteArticle = () => {
    Articles.deleteArticle(id).then(() => {
      navigate(routes.articles);
    });
  };

  const onBackClick = () => {
    navigate(routes.articles);
  };

  const onEditClick = () => {
    setSearchParams({ edit: true });
  };

  const onEditSubmit = (values) => {
    if (!values.heading || !values.content) {
      return;
    }

    Articles.updateArticle(id, values.heading, values.content).then(({ updated_at: updatedAt }) => {
      setData((prev) => ({
        ...prev, heading: values.heading, content: values.content, updated_at: updatedAt,
      }));
      setSearchParams();
    });
  };

  return {
    data,
    loading,
    error,
    isEdit: searchParams.has('edit'),
    onDeleteArticle,
    onBackClick,
    onEditClick,
    onEditSubmit,
  };
};

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Articles } from '../../api';

export const useArticles = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [sortInverted, setSortInverted] = useState(false);

  useEffect(() => {
    setLoading(true);
    Articles.getArticles()
      .then((articles) => setData(articles))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const invertSorting = () => {
    setSortInverted((prev) => !prev);
  };

  const onCreateArticleClick = () => {
    navigate('/articles/create');
  };

  const resultData = useMemo(
    () => (sortInverted ? [...data].sort((a, b) => a.id - b.id) : data),
    [data, sortInverted],
  );

  return {
    data: resultData,
    loading,
    error,
    invertSorting,
    onCreateArticleClick,
  };
};

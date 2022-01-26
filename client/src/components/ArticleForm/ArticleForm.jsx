import { useState } from 'react';
import s from './ArticleForm.module.css';

const ArticleForm = ({ heading = '', content = '', onSubmit }) => {
  const [values, setValues] = useState({ heading, content });

  const onChange = (value, type) => {
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className={s.wrap}>
      <input onChange={(e) => onChange(e.target.value, 'heading')} type="text" value={values.heading} />
      <textarea onChange={(e) => onChange(e.target.value, 'content')} value={values.content} cols="30" rows="10" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;

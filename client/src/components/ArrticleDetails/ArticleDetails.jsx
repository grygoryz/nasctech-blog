import cx from 'clsx';
import s from './ArticleDetails.module.css';

const ArticleDetails = ({
  heading, createdAt, updatedAt, className, content,
}) => (
  <div className={cx(s.wrap, className)}>
    <h1>{heading}</h1>
    <div className={s.content}>{content}</div>
    <div>
      Created at:
      {' '}
      {new Date(createdAt).toLocaleString()}
    </div>
    {updatedAt && (
      <div className={s.updatedAt}>
        Updated at:
        {' '}
        {new Date(updatedAt).toLocaleString()}
      </div>
    )}
  </div>
);

export default ArticleDetails;

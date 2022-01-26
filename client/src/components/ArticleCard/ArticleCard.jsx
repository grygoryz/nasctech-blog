import cx from 'clsx';
import s from './ArticleCard.module.css';

const ArticleCard = ({ heading, createdAt, className }) => (
  <div className={cx(s.wrap, className)}>
    <div className={s.heading}>{heading}</div>
    <div>{createdAt}</div>
  </div>
);

export default ArticleCard;

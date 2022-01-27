import cx from 'clsx';
import { Link } from 'react-router-dom';
import s from './ArticleCard.module.css';

const ArticleCard = ({
  heading, createdAt, className, link,
}) => (
  <div className={cx(s.wrap, className)}>
    <Link className={s.heading} to={link}>{heading}</Link>
    <div>{new Date(createdAt).toLocaleString()}</div>
  </div>
);

export default ArticleCard;

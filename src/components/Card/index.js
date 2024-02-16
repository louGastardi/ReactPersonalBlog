import { Link } from 'react-router-dom';
import './styles.css';

export default function Card({ post }) {
  return (
    <Link to={`${post.link}`}>
      <div className="post">
        <img className="cover-card" src={`/assets/posts/${post.id}/cover.png`} alt="post cover" />
        <h2 className="title-card">{post.title}</h2>
        <p className="p-card">{post.subtitle}</p>
      </div>
    </Link>
  );
}

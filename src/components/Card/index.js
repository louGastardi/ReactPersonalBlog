import { Link } from 'react-router-dom';
import './styles.css';
import BtnMain from 'components/BtnMain';
export default function Card({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <img className="cover-card" src={`/assets/posts/${post.id}/cover.png`} alt="post cover" />
        <h2 className="title-card">{post.title}</h2>
        <BtnMain>Read More</BtnMain>
      </div>
    </Link>
  );
}

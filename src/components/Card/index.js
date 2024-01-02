import './styles.css';
export default function Card({ post }) {
  return (
    <div className="post">
      <img className="cover-card" src={`/assets/posts/${post.id}/cover.png`} alt="post cover" />
      <h2 className="title-card">{post.title}</h2>
      <button className="btn-read-more">Read More</button>
    </div>
  );
}

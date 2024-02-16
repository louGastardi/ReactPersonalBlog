import './styles.css';

export default function Card({ id, title }) {
  return (
    <div className="post">
      <img className="cover-card" src={`/assets/posts/${id}/cover.png`} alt="post cover" />
      <h2 className="title-card">{title}</h2>
    </div>
  );
}

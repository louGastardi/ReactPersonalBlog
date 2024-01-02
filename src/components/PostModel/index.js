import './styles.css';
export default function PostModel({ photoCover, title, children }) {
  return (
    <article className="post-model-container">
      <div className="photo-cover" style={{ backgroundImage: `url(${photoCover})` }}></div>
      <h2 className="title-post">{title}</h2>
      <div className="post-content-container">{children}</div>
    </article>
  );
}

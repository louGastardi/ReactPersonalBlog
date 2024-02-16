import './styles.css';
import posts from 'json/posts.json';
import Card from 'components/Card';

export default function Home() {
  return (
    <>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <Card post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}

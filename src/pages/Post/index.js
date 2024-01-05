import { Route, Routes, useParams } from 'react-router-dom';
import Posts from 'json/posts.json';
import PostModel from 'components/PostModel';
import ReactMarkdown from 'react-markdown';
import './styles.css';
import Error404 from 'pages/Error404';
import MainStructure from 'components/MainStructure';
import Card from 'components/Card';

export default function Post() {
  const params = useParams();
  const post = Posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <Error404 />;
  }

  const recomendedPosts = Posts.filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<MainStructure />}>
        <Route
          index
          element={
            <PostModel photoCover={`/assets/posts/${post.id}/cover.png`} title={post.title}>
              <div className="post-markdown-container">
                <ReactMarkdown>{post.text}</ReactMarkdown>
              </div>

              <h2 className="titleOtherPosts">Other posts you might like</h2>

              <ul className="recomendedPosts">
                {recomendedPosts.map((post) => (
                  <li key={post.id}>
                    <Card post={post} />
                  </li>
                ))}
              </ul>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}

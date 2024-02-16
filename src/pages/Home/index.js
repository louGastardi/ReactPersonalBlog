import './styles.css';
import Card from 'components/Card';

export default function Home() {
  return (
    <>
      <ul className="posts">
        <li>
          <a href="https://vimeo.com/913695583">
            <Card id={1} title={'My Motion Design Showreel'} />
          </a>
        </li>
        <li>
          <a href="https://reframe-4030c.web.app/">
            <Card id={2} title={'ReFrame Gratitude App | React & Node.JS REST API'} />
          </a>
        </li>
        <li>
          <a href="https://magnificent-lamington-765978.netlify.app/">
            <Card id={3} title={'RPG Game | JS Vanilla'} />
          </a>
        </li>
        <li>
          <a href="https://movie-watchers.onrender.com/login">
            <Card id={4} title={'Movies Watchers app | Backend REST API'} />
          </a>
        </li>
      </ul>
    </>
  );
}

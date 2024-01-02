import './styles.css';
import LinkActive from '../LinkActive';

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <LinkActive to="/">Home</LinkActive>
        <LinkActive to="/aboutMe">About Me</LinkActive>
      </nav>
    </>
  );
}

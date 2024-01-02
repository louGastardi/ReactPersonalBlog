import { Link, useLocation } from 'react-router-dom';
import './styles.css';

export default function LinkActive({ children, to }) {
  const location = useLocation();

  return (
    <Link className={`link ${location.pathname === to ? 'linkActive' : ''}`} to={to}>
      {children}
    </Link>
  );
}

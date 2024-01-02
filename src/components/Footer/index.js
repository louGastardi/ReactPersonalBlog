import './styles.css';
import { ReactComponent as RegisteredMark } from 'assets/registered-mark.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <RegisteredMark />
      Developed by Lou Gastardi
    </footer>
  );
}

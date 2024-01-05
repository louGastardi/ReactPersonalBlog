import './styles.css';
export default function BtnMain({ children, styles }) {
  return <button className={`btn-main ${styles}`}>{children}</button>;
}

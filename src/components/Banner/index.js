import './styles.css';
import Logo from 'assets/icon-lougastardi.png';

export default function Banner() {
  return (
    <div className="banner">
      <div className="presentation">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <h1 className="title">Louise Gastardi</h1>
        <p className="paragraph-subtitle">Motion Designer & FullStack Developer</p>
      </div>
    </div>
  );
}

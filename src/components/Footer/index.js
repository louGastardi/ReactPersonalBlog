import './styles.css';
import logoGithub from 'assets/icon_gitHub.png';
import logoLinkedin from 'assets/icon_LinkedIn.png';

export default function Footer() {
  const externalLinkGithub = 'https://github.com/louGastardi';
  const externalLinkLinkedin = 'https://www.linkedin.com/in/louisegastardi/';

  return (
    <footer className="footer">
      <div className="links">
        <a href={externalLinkGithub}>
          <img className="link_icon" src={logoGithub} alt="Github Logo" />
        </a>
        <a href={externalLinkLinkedin}>
          <img className="link_icon" src={logoLinkedin} alt="Linkedin Logo" />
        </a>
      </div>
      <p>Developed by Lou Gastardi © 2024</p>
    </footer>
  );
}

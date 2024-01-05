import BtnMain from 'components/BtnMain';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Error404() {
  const navigate = useNavigate();

  return (
    <>
      <div className="contentContainer">
        <span className="text404">404</span>
        <h1 className="title-error">Ops! Page not found.</h1>
        <p className="paragraph-error">Are you sure this is what you were looking for?</p>
        <p className="paragraph-error">Wait a few moments and reload the page, or go back to the home page.</p>
        <div className="btn-container" onClick={navigate(-1)}>
          <BtnMain styles="lg">Go Back</BtnMain>
        </div>
        <img className="imgDog" src="/assets/error_404.png" alt="Little dog dressed as human" />
      </div>
      <div className="blankSpace"></div>
    </>
  );
}

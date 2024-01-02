import './styles.css';

export default function Banner() {
  return (
    <div className="banner">
      <div className="presentation">
        <h1 className="title">Hello World!</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua.
        </p>

        <p className="paragraph">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="images">
        <img className="element-circle" src="./assets/element-circle.png" aria-hidden={true} alt="colorful circle" />
        <img className="profile-pic" src="./assets/profile-picture.png" alt="Frodo's profile" />
      </div>
    </div>
  );
}

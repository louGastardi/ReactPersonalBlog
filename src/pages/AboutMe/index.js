import PostModel from 'components/PostModel';
import PhotoCover from 'assets/aboutme-cover.jpg';
import PhotoAboutMe from 'assets/aboutme-picture.png';
import VectorAboutMe from 'assets/aboutme-vector.png';
import AniWeb from 'assets/Animation - 1708008588949.json';
import Lottie from 'lottie-react';

import './styles.css';

export default function AboutMe() {
  return (
    <>
      <PostModel photoCover={PhotoCover} title="About Me">
        <h3 className="subtitle">Hey there, I'm Louise!</h3>
        <img src={PhotoAboutMe} alt="Louise Profile" className="aboutme-pic" />
        <p className="paragraph-aboutme">
          Originally from the pulsating culture of Brazil, I've called Germany my home since 2006. My journey through the realms of media production
          has been nothing short of exhilarating. With nearly a decade of experience as a motion designer and content creator, I bring a wealth of
          technical expertise and creative ingenuity to every project I undertake. One of my greatest strengths is my keen eye for design. Whether
          it's creating visually stunning animations or crafting compelling content, I have a knack for creating aesthetically pleasing experiences
          that resonate with audiences. This innate sense of design allows me to bring a unique perspective to each project, ensuring that each piece
          of media is not only functional, but also visually stunning.
        </p>
        <p className="paragraph-aboutme">
          In addition to my technical skills, I have a rich background in various roles within production. I've worked as a director of photography,
          capturing compelling images and bringing stories to life through the lens. My experience as a First Assistant Camera honed my attention to
          detail and ability to anticipate the needs of a production crew. I've also served as a production sound mixer, ensuring that every word is
          captured with clarity and precision. Additionally, my time as a lighting technician has given me a deep understanding of how light can be
          used to evoke emotion and enhance storytelling.
        </p>
        <div className="aboutme-pic">
          <Lottie animationData={AniWeb} />;
        </div>
        <p className="paragraph-aboutme">
          Driven by my love of technology and innovation, I ventured into web development to further expand my skill set and stay ahead of the curve
          in an ever-evolving industry. My web development stack includes HTML/CSS/JS, TypeScript, React, Bootstrap/MUI, Next.JS, REST API, Node.JS,
          Express, MongoDB, and Docker. This diversification has allowed me to explore new avenues of creativity and find innovative solutions to
          complex challenges.
        </p>
        <p className="paragraph-aboutme">
          Beyond my professional activities, I am deeply passionate about music. Both listening to and creating music are integral parts of my life.
          There's something magical about the way music can evoke emotions and tell stories in a way that words alone cannot. Whether I'm jamming with
          friends or composing my own tracks, music is a constant source of inspiration and joy for me. In my free time, I indulge in a variety of
          hobbies that nourish my spirit and feed my creativity. Whether I'm experimenting with new recipes in the kitchen, engaging in friendly
          competition over board games, or exploring the vibrant coffee culture of my adopted home, I approach each experience with an open heart and
          curious mind. And when I'm not immersed in my hobbies, you can often find me exploring the streets of my city on my trusty longboard.
        </p>
        <img src={VectorAboutMe} alt="Louise as vector" className="aboutme-vector" />
        <p className="paragraph-aboutme">
          As I continue to chart my course in the world of media production and web development, I remain committed to pushing the boundaries of
          creativity and innovation. With my unique blend of technical expertise, creative flair, and passion for collaboration, I'm excited to see
          where this journey takes me next. Whether it's creating compelling animation, designing immersive web experiences, or exploring new avenues
          of creative expression, I'm ready for any challenge that comes my way.
        </p>
      </PostModel>
    </>
  );
}

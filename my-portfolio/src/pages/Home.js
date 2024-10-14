import { Link } from "react-router-dom";
import ProfilePicture from "../images/myProfilePic.png";

const HomePage = () => {
  return (
    <>
      <main className="main-home">
        <div>
          <img
            id="profile-picture"
            src={ProfilePicture}
            alt="Elhadj Abdoul Diallo"
          ></img>
        </div>
        <div className="profile-description">
          <h2 id="title">Full Stack Engineer | Speaker | Mentor</h2>
          <h1 id="name">Elhadj Abdoul Diallo</h1>
          <p>
            I'm a Full Stack Engineer who builds websites and web apps. I work
            with both the front and back end to create smooth and responsive
            user experiences. I enjoy solving problems and creating practical
            solutions using the latest tools and technologies
          </p>

          <div className="port-contact-btn">
              <Link className="portfolio" to="/portfolio">
                Portfolio
              </Link>
              <Link className="contact" to="/contact">
                Contact
              </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;

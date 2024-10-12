import { Link } from "react-router-dom";

const IntroToDigital = () => {
  return (
    <div className="intro-to-digital">
      <h1>Intro to Digital Projects</h1>
      <div className="itd-grid-list">
        <div className="itd-grid-item">
          <h1>Personal Site</h1>
          <Link
            to="https://elhadjdiallo.netlify.app/personal-site/"
            target="blank "
          >
            Learn More
          </Link>
        </div>

        <div className="itd-grid-item">
          <h1>Google Clone</h1>
          <Link
            to="https://elhadjdiallo.netlify.app/google-com/"
            target="blank"
          >
            Learn More
          </Link>
        </div>

        <div className="itd-grid-item">
          <h1> Digital Business Card</h1>
          <Link
            to="https://elhadji-digital-business-card.netlify.app/"
            target="blank"
          >
            Learn More
          </Link>
        </div>

        <div className="itd-grid-item">
          <h1> Birthday Gift</h1>
          <Link to="https://elhadj-birthday-gift.netlify.app/" target="blank">
            Learn More
          </Link>
        </div>

        <div className="itd-grid-item">
          <h1> Space Exploration</h1>
          <Link
            to="https://elhadjdiallo.netlify.app/space-exploration/"
            target="blank"
          >
            Learn More
          </Link>
        </div>

        <div className="itd-grid-item">
          <h1> Home Town Home Page</h1>
          <Link
            to="https://elhadjdiallo.netlify.app/hometown-homepage/"
            target="blank"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroToDigital;

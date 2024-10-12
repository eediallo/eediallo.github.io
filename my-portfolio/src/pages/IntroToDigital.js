import { Link } from "react-router-dom";

const IntroToDigital = () => {
  return (
    <div className="intro-to-digital">
      <h1>Intro to Digital Projects</h1>
      <ul className="itd-grid-list">
        <li>
          <Link to="https://elhadjdiallo.netlify.app/personal-site/">Personal Site</Link>
        </li>
        <li>
          <Link to="https://elhadjdiallo.netlify.app/google-com/">Google Clone</Link>
        </li>
        <li>
          <a
            href="https://elhadji-digital-business-card.netlify.app/"
            target="blank"
          >
            Digital Business Card
          </a>
        </li>

        <li><a href="https://elhadj-birthday-gift.netlify.app/" target="blank">Birthday Gift</a></li>

        <li><Link to="https://elhadjdiallo.netlify.app/space-exploration/">Space Exploration</Link></li>
        <li><Link to="https://elhadjdiallo.netlify.app/hometown-homepage/">Home Town Home Page</Link></li>
      </ul>
    </div>
  );
};

export default IntroToDigital;

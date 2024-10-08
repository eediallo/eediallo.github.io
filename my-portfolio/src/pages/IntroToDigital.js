import { Link } from "react-router-dom";

const IntroToDigital = () => {
  return (
    <>
      <h1>This is the ITD page</h1>
      <p>Welcome</p>
      <ul>
        <li>
          <Link to="/personal-site">Personal Site</Link>
        </li>
        <li>
          <Link to="/google-clone">Google Clone</Link>
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

        <li><Link to="/space-exploration">Space Exploration</Link></li>
      </ul>
    </>
  );
};

export default IntroToDigital;

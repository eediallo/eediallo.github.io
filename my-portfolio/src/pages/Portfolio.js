import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className="portfolio-section">
      <h1>This is the portfolio page</h1>
      <ul>
        <li>
          <Link to="/intro-to-digital">Intro to Digital</Link>
        </li>
        <li>
          <Link to="/intro-to-programming">Intro to Programming</Link>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioPage;

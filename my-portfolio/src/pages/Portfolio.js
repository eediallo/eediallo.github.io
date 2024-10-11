import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className="portfolio-section">
      <h1>Portfolio</h1>
      <ul className="portfolio-grid-list">
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

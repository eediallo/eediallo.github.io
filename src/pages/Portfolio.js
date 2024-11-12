const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <h1>Portfolio</h1>
      <div className="portfolio-grid-list">
        <div className="portfolio-grid-item">
          <h2>Groupie Tracker</h2>
          <div className="a-wrap">
            <a
              href="https://groupie-tracker-jq1b.onrender.com/"
              target="blank "
            >
              Demo
            </a>
          </div>
        </div>

        <div className="portfolio-grid-item">
          <h2>Ascii Art Web</h2>

          <div className="a-wrap">
            <a
              href="https://ascii-art-web-dockerize.onrender.com/"
              target="blank"
            >
              Demo
            </a>
          </div>
        </div>

        <div className="portfolio-grid-item">
          <h2>Forum</h2>

          <div className="a-wrap">
            <a href="https://forum-atb0.onrender.com/" target="blank">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

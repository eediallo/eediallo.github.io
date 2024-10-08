import { Link } from "react-router-dom";
import GoogleLogo from "./Google.png";
import "./Google.css";

const GoogleClone = () => {
  return (
    <>
      <div className="main google-clone-project-section">
        <img
          className="google-logo"
          src={GoogleLogo}
          alt="Google clone"
          height="auto"
          width="300px"
        />
        <input className="search-field" type="text" />

        <div className="btns">
          <button className="btn">Google Search</button>
          <button className="btn">I am Feeling Lucky</button>
        </div>
        <p>
          We protect your privacy. <a href="blog.html">Learn more.</a>
        </p>

        <p>
          Return to <Link to="/">Home page</Link>
        </p>
      </div>
    </>
  );
};

export default GoogleClone;

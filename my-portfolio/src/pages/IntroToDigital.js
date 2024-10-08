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
      </ul>
    </>
  );
};

export default IntroToDigital;
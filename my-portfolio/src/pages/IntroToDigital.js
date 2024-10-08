import { Link } from "react-router-dom";

const IntroToDigital = () => {
  return (
    <>
      <h1>This is the ITD page</h1>
      <p>Welcome</p>
      <ul>
        <li><Link to="/personal-site">Personal site</Link></li>
      </ul>
    </>
  );
};

export default IntroToDigital;

import { Link } from "react-router-dom";

const IntroToProgramming = () => {
  return (
    <>
      <h1>This is the ITP page</h1>
      <p>Welcome</p>
      <ul>
        <li>
          <Link to="https://deploy-preview-109--cyf-ufd.netlify.app/my-wireframe/" target="blank">Wireframe</Link>
        </li>
        <li>
          <Link to="https://deploy-preview-121--cyf-ufd.netlify.app/form-controls/" target="blank">Form controls</Link>
        </li>
      </ul>
    </>
  );
};

export default IntroToProgramming;

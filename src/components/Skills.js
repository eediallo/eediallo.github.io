import htmlLogo from "../images/html-5-logo.svg"
import cssLogo from "../images/css-logo.svg"
// import jsLogo from "../images/javascript-logo.svg"
import reactLogo from "../images/react-logo2.svg"
import golangLogo from "../images/golang-logo.png"
import nodejsLogo from "../images/node-js-logo.svg"

const Skills = () => {
  return (
    <div className="skills">
    <h1 className="skill-package-name">Front-end Skills</h1>
      <div className="front-end-skills">
        <div className="html skills-item">
            <img src={htmlLogo} alt="html logo" />
        </div>

        <div className="css skills-item">
            <img src={cssLogo} alt="css logo" />
        </div>
        <div className="react skills-item">
            <img src={reactLogo} alt="react logo" />
        </div>
      </div>

      <h1 className="skill-package-name">Back-end Skills</h1>
      <div className="back-end-skills">
        <div className="go skills-item">
            <img src={golangLogo} alt="golang logo" />
        </div>
        <div className="nodejs skills-item">
            <img src={nodejsLogo} alt="nodejs logo" />
        </div>
      </div>

      <h1>Other Skills</h1>
    </div>
  );
};

export default Skills;

import { Link } from "react-router-dom";
import ProfilePicture from "../images/myProfilePic.png";

import htmlLogo from "../images/html-5-logo.svg";
import cssLogo from "../images/css-logo.svg";
// import jsLogo from "../images/javascript-logo.svg"
import reactLogo from "../images/react-logo2.svg";
import golangLogo from "../images/golang-logo.png";
import nodejsLogo from "../images/node-js-logo.svg";

import phoneLogo from "../images/phone-logo.svg";
import emailLogo from "../images/email-logo.svg";
import locationLogo from "../images/location.svg";

const HomePage = () => {
  return (
    <>
      <main className="main-home">
        <div>
          <img
            id="profile-picture"
            src={ProfilePicture}
            alt="Elhadj Abdoul Diallo"
            width={300}
            height={300}
          ></img>
        </div>
        <div className="profile-description" id="about">
          <h2 id="title">Full Stack Engineer</h2>
          <h1 id="name">Elhadj Abdoul Diallo</h1>
          <p>
            I'm a Full Stack Engineer who builds websites and web apps. I work
            with both the front and back end to create smooth and responsive
            user experiences. I enjoy solving problems and creating practical
            solutions using the latest tools and technologies
          </p>

          <div className="port-contact-btn">
            <Link className="portfolio" to="/portfolio">
              Portfolio
            </Link>
            <Link className="contact" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </main>

      <hr></hr>

      <section id="skills">
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
      </section>

      <hr></hr>
      <section id="portfolio">
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
      </section>

      <hr></hr>

      <section id="contact">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-wrapper">
          <div>
            <div className="contact-box">
              <img src={phoneLogo} alt="phone logo" />
              <p>
                <important>+44 9939 99393939</important>
              </p>
            </div>
            <div className="contact-box">
              <img src={emailLogo} alt="phone logo" />
              <p>
                <import>elhhabdouldiallo@gmail.com</import>
              </p>
            </div>
            <div className="contact-box">
              <img src={locationLogo} alt="phone logo" />
              <p>
                <important>London, UK</important>
              </p>
            </div>
          </div>

          <div className="contact-form">
            <form>
              {/* main form input */}
              <div>
                <div>
                  <label for="full-name"></label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <br></br>
                <div>
                  <label for="email"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <br></br>

                <div>
                  <label for="enquiry"></label>
                  <select id="enquiry" name="enquiry">
                    <option value="EDA Academy">EDA Academy</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
              </div>

              {/* text area */}
              <div>
                <label for="message"></label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  cols={50}
                  placeholder="write your message here"
                ></textarea>
              </div>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

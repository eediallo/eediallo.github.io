import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerIcon from "../images/hamburger.png";
import CloseIcon from "../images/close.png";
import logo from "../images/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-left">
          <li>
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </li>
        </ul>

        {/* Navigation bar for large screens */}
        <ul className="nav-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div>
            {menuOpen ? (
              <img src={CloseIcon} alt="close" />
            ) : (
              <img src={HamburgerIcon} alt="hamburger" />
            )}
          </div>
        </div>

        {/* Full-screen menu */}
        {menuOpen && (
          <div className="menu-small">
            <div className="menu-ul-small-overlay">
              <div className="menu-ul-small-overlay-logo">
                <div>
                  <Link to="/" onClick={toggleMenu}>
                    <span className="e">𝖊</span>DIALLO
                  </Link>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                  <div>
                    {menuOpen ? (
                      <img src={CloseIcon} alt="close" />
                    ) : (
                      <img src={HamburgerIcon} alt="hamburger" />
                    )}
                  </div>
                </div>
              </div>

              <div className="menu-ul-small-overlay-box">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
                <a href="#about" onClick={toggleMenu}>
                  About
                </a>
                <a href="#skills" onClick={toggleMenu}>
                  Skills
                </a>
                <a href="#portfolio" onClick={toggleMenu}>
                  Portfolio
                </a>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

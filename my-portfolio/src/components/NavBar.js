import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerIcon from "../images/hamburger.png";
import CloseIcon from "../images/close.png";

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
              <span className="e">𝖊</span>DIALLO
            </Link>
          </li>
        </ul>

        {/* Navigation bar for large screens */}
        <ul className="nav-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
                <Link to="/" onClick={toggleMenu}>
                  <span className="e">𝖊</span>DIALLO
                </Link>
              </div>

              <div className="menu-ul-small-overlay-box">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
                <Link to="/skills" onClick={toggleMenu}>
                  Skills
                </Link>
                <Link to="/portfolio" onClick={toggleMenu}>
                  Portfolio
                </Link>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

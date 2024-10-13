import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerIcon from "../images/hamburger.png";
import CloseIcon from "../images/close.png";

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);
  }


  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-left">
          <li>
            <Link to="/"><span className="e">𝖊</span>DIALLO</Link>
          </li>
        </ul>

        {/* Hamburger icon */}
        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div>
            {menuOpen ? <img src={CloseIcon} alt="close" /> : <img src={HamburgerIcon} alt="hamburger" />}
            </div>
        </div>

      
        <ul className={`nav-right ${menuOpen ? 'open' : ''}`}>
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
      </nav>
    </header>
  );
};

export default NavBar;

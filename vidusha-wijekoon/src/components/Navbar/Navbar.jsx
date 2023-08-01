import React, { useState } from "react";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <span>Vidusha</span>
      </div>
      <ul className="app_navbar-links">
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#skills">Skills</a>
        </li>
        <li className="p__opensans">
          <a href="#resume">Resume</a>
        </li>
        <li className="p__opensans">
          <a href="#projects">Projects</a>
        </li>
        <li className="p__opensans">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#resume" onClick={() => setToggleMenu(false)}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setToggleMenu(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setToggleMenu(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#ontact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

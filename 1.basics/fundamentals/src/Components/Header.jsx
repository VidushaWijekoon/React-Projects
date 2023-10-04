import React, { useState } from "react";
import "../App.css";

import CloseIcon from "@mui/icons-material/Close";
import WindowIcon from "@mui/icons-material/Window";

import { IconButton } from "@mui/material";

const Header = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <header className="header__container">
      <h1>
        Vidusha
        <span>React Developement</span>
      </h1>
      <nav>
        <ol>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Projects</li>
        </ol>
        <IconButton
          onClick={() => {
            setIsShown(false);
          }}
          className="header_menuClick"
        >
          <WindowIcon />
        </IconButton>
        <ul
          style={{
            display: isShown ? "none" : "block",
          }}
        >
          <div className="header_menuClose">
            <IconButton onClick={handleClick}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="header__menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { IconButton } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Footer = () => {
  return (
    <footer
      className="w-full py-3 px-2 bg-my-background flex z-[100] items-center justify-between 
		fixed bottom-0 left-0 drop-shadow-header-shadow"
    >
      <IconButton>
        <HomeOutlinedIcon />
        <p>Home</p>
      </IconButton>
      <IconButton>
        <AppsOutlinedIcon />
        <p>Category</p>
      </IconButton>
      <IconButton>
        <AccountCircleOutlinedIcon />
        <p>Profile</p>
      </IconButton>
    </footer>
  );
};

export default Footer;

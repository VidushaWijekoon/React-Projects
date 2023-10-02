import React from "react";
import { IconButton } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Footer = () => {
  return (
    <footer
      className="w-full p-3 bg-my-background flex z-[100] items-center justify-between 
		fixed bottom-0 left-0 drop-shadow-header-shadow"
    >
      <FooterIcon Icon={HomeOutlinedIcon} IconText="Home" />
      <FooterIcon Icon={AppsOutlinedIcon} IconText="Category" />
      <FooterIcon Icon={AccountCircleOutlinedIcon} IconText="Profile" />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, IconText }) => {
  return (
    <IconButton
      sx={{
        padding: "4px",
        paddingTop: "0",
        borderRadius: "5px",
        color: "red",
      }}
    >
      <div className="text-gray-700 hover:text-[#c82196] transition-all duration-500">
        <Icon />
        <p className="text-xs font-semibold">{IconText}</p>
      </div>
    </IconButton>
  );
};

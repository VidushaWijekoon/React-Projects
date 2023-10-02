import React, { useState } from "react";
import { IconButton } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Footer = () => {
  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false,
  });

  return (
    <footer
      className="w-full p-3 bg-my-background flex z-[100] items-center justify-between 
		fixed bottom-0 left-0 drop-shadow-header-shadow"
    >
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={HomeOutlinedIcon}
        IconText="Home"
      />
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AppsOutlinedIcon}
        IconText="Category"
      />
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AccountCircleOutlinedIcon}
        IconText="Profile"
      />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, IconText, clickFun }) => {
  const clickHandle = () => {
    const obj = {
      Home: true,
      Category: false,
      Profile: false,
    };
    if (IconText === "Category") {
      obj.Category = true;
      obj.Home = false;
      obj.Profile = false;
    } else if (IconText === "Profile") {
      obj.Profile = true;
      obj.Home = false;
      obj.Category = false;
    }
    clickFun.setWhoIsClick(obj);
  };

  return (
    <Link to={IconText === "Home" ? "/" : `/${String(IconText).toLowerCase()}`}>
      <IconButton
        sx={{
          padding: "4px",
          paddingTop: "0",
          borderRadius: "5px",
          color: "red",
        }}
        onClick={clickHandle}
      >
        <div
          style={{
            borderBottom: clickFun.whoIsClick[IconText] && "2px solid red",
            color: clickFun.whoIsClick[IconText] && "#c82196",
          }}
          className="text-gray-700 hover:text-[#c82196] transition-all duration-500"
        >
          <Icon />
          <p className="text-xs font-semibold">{IconText}</p>
        </div>
      </IconButton>
    </Link>
  );
};

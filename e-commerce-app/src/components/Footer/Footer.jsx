import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false,
  });

  return (
    <footer className="fixed bottom-0 left-0 w-full z-[100] py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={HomeOutlinedIcon}
        iconText="Home"
      />
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AppsOutlinedIcon}
        iconText="Category"
      />
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AccountCircleOutlinedIcon}
        iconText="Profile"
      />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText, clickFun }) => {
  const clickHandle = () => {
    const obj = {
      Home: true,
      Category: false,
      Profile: false,
    };

    if (iconText === "Category") {
      obj.Home = false;
      obj.Category = true;
      obj.Profile = false;
    } else if (iconText === "Profile") {
      obj.Category = false;
      obj.Home = false;
      obj.Profile = true;
    }

    clickFun.setWhoIsClick(obj);
  };

  return (
    <Link to={iconText === "Home" ? "/" : `/${String(iconText).toLowerCase()}`}>
      <IconButton
        sx={{
          padding: "4px",
          borderRadius: "5px",
          color: "red",
        }}
        onClick={clickHandle}
      >
        <div
          style={{
            color: clickFun.whoIsClick[iconText] && "#c82196",
          }}
          className="text-gray-700 hover:text-[#c82196] transition-all duration-300"
        >
          <Icon />
          <p className="text-xs">{iconText}</p>
        </div>
      </IconButton>
    </Link>
  );
};

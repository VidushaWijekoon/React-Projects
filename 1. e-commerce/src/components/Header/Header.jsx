import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header
      className="w-full py-5 px-2 bg-my-background flex z-[100] items-center justify-between 
		fixed top-0 left-0 drop-shadow-header-shadow"
    >
      {/* header left */}
      <div className="flex items-center">
        {/* <img
          src={menu}
          alt="menu"
          className="w-6 h-6 object-contain cursor-pointer"
        /> */}
        <IconButton sx={{ color: "red" }}>
          <MenuIcon
            sx={{
              color: "#c82196",
            }}
          />
        </IconButton>
        <h1 className="text-sm font-bold ml-2">
          Vidusha <span className="text-[#c82196]">E-Commerce</span>
        </h1>
        <div className="flex items-center rounded-full bg-[#fdf3f3] ml-2 overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="p-2 outline-none font-semibold text-sm w-[200px] bg-inherit ml-1"
          />
          {/* <img
            src={search}
            alt="search"
            className="w-6 h-6 object-contain cursor-pointer mr-2"
          /> */}
          <IconButton>
            <SearchIcon className="text-gray-400 mx-3" />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      {/* <img
        src={cart}
        alt="cart"
        className="w-6 h-6 object-contain cursor-pointer"
      /> */}
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </header>
  );
};

export default Header;

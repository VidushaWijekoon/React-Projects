import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <header
      className="w-full py-3 px-2 bg-my-background flex z-[100] items-center justify-between 
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
        <h1
          style={{
            display:
              window.innerWidth < 640
                ? isSearch
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className="text-sm font-bold ml-2"
        >
          Vidusha <span className="text-[#c82196]">E-Commerce</span>
        </h1>
        <div
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? isSearch
                  ? "#fdf3f3"
                  : "inherit"
                : "#fdf3f3",
          }}
          className="flex items-center rounded-full bg-[#fdf3f3] ml-2 overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              display:
                window.innerWidth < 640
                  ? isSearch
                    ? "inline-block"
                    : "none"
                  : "inline-block",
              transition: "all 1000ms ease-in-out",
            }}
            className="p-2 outline-none font-semibold text-sm w-[200px] bg-inherit ml-1 hidden sm:inline-block"
          />
          {/* <img
            src={search}
            alt="search"
            className="w-6 h-6 object-contain cursor-pointer mr-2"
          /> */}
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                setIsSearch(!isSearch);
              }
            }}
          >
            <SearchIcon
              sx={{
                color:
                  window.innerWidth < 640
                    ? isSearch
                      ? "rgb(156, 163, 175)"
                      : "black"
                    : "rgb(156, 163, 175)",
              }}
            />
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
        <div className="relative p-1">
          <ShoppingCartOutlinedIcon className="text-black" />
          <div className="text-[7px] bg-black rounded-full text-white p-[2px] m-0 absolute top-[2px] flex w-[12px] h-3 items-center justify-center right-0 font-semibold">
            2
          </div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;

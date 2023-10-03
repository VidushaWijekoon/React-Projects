import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <header className="flex w-full py-5 px-2 bg-my-background items-center justify-between fixed top-0 left-0 z-[100] drop-shadow-header-shadow">
      {/* left */}
      <div className="flex items-center">
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
          Vidusha <span className="text-[#c82196]">My Store</span>
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
            className="hidden sm:inline-block outline-none p-2 font-semibold text-sm w-[200px] bg-inherit ml-1"
          />
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
              className="text-gray-400"
            />
          </IconButton>
        </div>
      </div>
      {/* end left */}

      {/* right */}
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
      {/* end right */}
    </header>
  );
};

export default Header;

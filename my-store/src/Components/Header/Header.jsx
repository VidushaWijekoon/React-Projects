import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
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
        <h1 className="text-sm font-bold ml-2">
          Vidusha <span className="text-[#c82196]">My Store</span>
        </h1>
        <div className="flex items-center rounded-full bg-[#fdf3f3] ml-2 overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="hidden sm:inline-block outline-none p-2 font-semibold text-sm w-[200px] bg-inherit ml-1"
          />
          <IconButton>
            <SearchIcon className="text-gray-400" />
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

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] py-3 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* Header Left */}
      <div className="flex items-center">
        <IconButton>
          <MenuIcon sx={{ color: "#c82196" }} />
        </IconButton>
        <h1
          className="text-sm font-bold"
          style={{
            display:
              window.innerWidth < 640
                ? isSearch
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
        >
          Vidusha <span className="text-[#c82196]">App</span>
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
          className="overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]"
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
              transition: "all 400ms ease-in-out",
            }}
            className="hidden sm:inline-block outline-none p-2 font-semibold text-sm w-[200px] bg-inherit ml-4"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                setIsSearch(!isSearch);
              }
            }}
          >
            <SearchOutlinedIcon
              sx={{
                color:
                  window.innerWidth < 640
                    ? isSearch
                      ? "rga(156 163 175)"
                      : "black"
                    : "rga(156 163 175)",
              }}
            />
          </IconButton>
        </div>
      </div>

      {/* Header Right */}
      <IconButton>
        <div className="relative p-1">
          <ShoppingCartOutlinedIcon className="text-black" />
          <div className="absolute top-[2px] right-0 text-[7px] font-semibold bg-black rounded-full text-white m-0 p-[2px] flex w-3 h-3 items-center justify-center">
            2
          </div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;

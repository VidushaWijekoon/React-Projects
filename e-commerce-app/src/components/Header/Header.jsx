import { useRef } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

let clicked = false;

const Header = () => {
  const logoRef = useRef();
  const searchBoxRef = useRef();
  const searchBoxContainer = useRef();

  const searchButonClickHandle = () => {
    if (clicked) {
      logoRef.current.style = "display: none";
      searchBoxRef.current.style = "display: inline-block";
      searchBoxContainer.current.style.backgroundColor = "#fdf3f3";
    } else {
      logoRef.current.style = "display: inline-block";
      searchBoxRef.current.style = "display: none";
      searchBoxContainer.current.style.backgroundColor = "inherit";
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] py-3 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* Header Left */}
      <div className="flex items-center">
        <IconButton>
          <MenuIcon sx={{ color: "#c82196" }} />
        </IconButton>
        <h1
          ref={logoRef}
          style={{
            display:
              window.innerWidth < 640
                ? clicked
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className="text-sm font-bold ml-2"
        >
          Vidusha <span className="text-[#c82196]">App</span>
        </h1>
        <div
          ref={searchBoxContainer}
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? clicked
                  ? "#fdf3f3"
                  : "inherit"
                : "#fdf3f3",
          }}
          className="overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]"
        >
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="Search"
            style={{
              display:
                window.innerWidth < 640
                  ? clicked
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
                clicked = !clicked;
                searchButonClickHandle();
              }
            }}
          >
            <SearchOutlinedIcon
              sx={{
                color:
                  window.innerWidth < 640
                    ? clicked
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

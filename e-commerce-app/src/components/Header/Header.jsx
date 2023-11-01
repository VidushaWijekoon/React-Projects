import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* Header Left */}
      <div className="flex items-center">
        <IconButton>
          <MenuIcon sx={{ color: "#c82196" }} />
        </IconButton>
        <h1 className="text-sm font-bold">
          Vidusha <span className="text-[#c82196]">App</span>
        </h1>
        <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]">
          <input
            type="text"
            placeholder="Search"
            className="hidden sm:inline-block outline-none p-2 font-semibold text-sm w-[200px] bg-inherit ml-4"
          />
          <IconButton>
            <SearchOutlinedIcon className="text-gray-400" />
          </IconButton>
        </div>
      </div>
      {/* Header Right */}
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </header>
  );
};

export default Header;

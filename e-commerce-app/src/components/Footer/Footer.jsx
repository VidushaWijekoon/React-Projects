import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-[100] py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      <FooterIcon Icon={HomeOutlinedIcon} iconText="Home" />
      <FooterIcon Icon={AppsOutlinedIcon} iconText="Category" />
      <FooterIcon Icon={AccountCircleOutlinedIcon} iconText="Profile" />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
      color: "red",
    }}
  >
    <div className="text-gray-700 hover:text-[#c82196] transition-all duration-300">
      <Icon />
      <p className="text-xs">{iconText}</p>
    </div>
  </IconButton>
);

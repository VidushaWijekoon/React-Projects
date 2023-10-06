import { IconButton } from "@mui/material";
import "./header.css";
import DialpadIcon from "@mui/icons-material/Dialpad";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Skills", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

const Header = () => {
  return (
    <header
      id="header"
      className="fixed-top d-flex justify-content-center align-items-center header-transparent"
    >
      <nav id="navbar" className="navbar">
        {navigation.map((links) => (
          <a key={links.name} href={links.href} className="mx-3 nav-link">
            {links.name}
          </a>
        ))}
      </nav>

      <IconButton className="text-danger responsive-btn">
        <DialpadIcon />
      </IconButton>
    </header>
  );
};

export default Header;

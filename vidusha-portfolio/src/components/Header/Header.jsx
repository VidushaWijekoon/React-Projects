import { IconButton } from "@mui/material";
import "./header.css";
import DialpadIcon from "@mui/icons-material/Dialpad";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Resume", href: "#resume", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Contact", href: "#contact", current: false },
];

const Header = () => {
  return (
    <header
      id="header"
      className="fixed-top d-flex justify-content-center align-items-center header-transparent page-header"
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

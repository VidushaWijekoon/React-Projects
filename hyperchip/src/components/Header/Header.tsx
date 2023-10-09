import "./header.css";
import logo from "../../assets/images/logo/logo1-2.png";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link to="/">
            <img src={logo} alt="" className="img-fluid" />
          </Link>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li className="dropdown">
              <Link to="#">
                <span>Information Technology</span>
                <KeyboardArrowDownIcon />
              </Link>
              <ul>
                <li>
                  <Link to="/web-development">Web Development</Link>
                </li>
                <li>
                  <Link to="/e-commerce-development">
                    E-Commerce Development
                  </Link>
                </li>
                <li>
                  <Link to="/software-development">Software Development</Link>
                </li>
                <li>
                  <Link to="/mobile-app-development">
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link to="/ai-application-development">AI Development</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

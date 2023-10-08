import "./footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Vidusha Wijekoon</h3>
        <div className="social-links">
          <a href="#" className="twitter">
            <FacebookIcon />
          </a>
          <a href="#" className="facebook">
            <InstagramIcon />
          </a>
          <a href="#" className="instagram">
            <LinkedInIcon />
          </a>
          <a href="#" className="google-plus">
            <GitHubIcon />
          </a>
          <a href="#" className="linkedin">
            <WhatsAppIcon />
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright Designed by{" "}
          <strong>
            <span>Vidusha Wijekoon</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

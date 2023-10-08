import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./socialmedia.css";

const SocialMedia = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.facebook.com/vwijekoon0511/"
        target="_blank"
        className="twitter"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.instagram.com/vidusha.wijekoon/"
        target="_blank"
        className="instagram"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/vidusha-wijekoon-959254190/"
        target="_blank"
        className="linkedin"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/VidushaWijekoon"
        target="_blank"
        className="github"
      >
        <GitHubIcon />
      </a>
      <a href="https://wa.me/971588250962" target="_blank" className="whatsapp">
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default SocialMedia;

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./socialmedia.css";

const media = [
  {
    id: 1,
    icon: <FacebookIcon />,
    name: "facebook",
    link: "https://www.facebook.com/vwijekoon0511/",
  },
  {
    id: 2,
    icon: <InstagramIcon />,
    name: "instagram",
    link: "https://www.instagram.com/vidusha.wijekoon/",
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
    name: "linkedin",
    link: "https://www.linkedin.com/in/vidusha-wijekoon-959254190/",
  },
  {
    id: 1,
    icon: <GitHubIcon />,
    name: "github",
    link: "https://github.com/VidushaWijekoon",
  },
  {
    id: 1,
    icon: <WhatsAppIcon />,
    name: "whatsapp",
    link: "https://wa.me/971588250962",
  },
];

const SocialMedia = () => {
  return (
    <div className="social-links">
      {media.map(({ icon, name, link }, index) => (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={name}
          key={index}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;

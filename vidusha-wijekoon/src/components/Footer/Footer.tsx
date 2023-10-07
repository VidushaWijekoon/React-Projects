import "./footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Vidusha Wijekoon</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        <div className="social-links">
          <a href="#" className="twitter">
            <FacebookIcon />
          </a>
          <a href="#" className="facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="instagram">
            <FacebookIcon />
          </a>
          <a href="#" className="google-plus">
            <FacebookIcon />
          </a>
          <a href="#" className="linkedin">
            <FacebookIcon />
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

import SocialMedia from "../SocialMedia/SocialMedia";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <h3>Vidusha Wijekoon</h3>
        <SocialMedia />
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

import "./hero.css";
import heroImage from "../../assets/images/hero-img.png";
import DownloadResume from "../../components/DownloadResume/DownloadResume";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center h-100">
          <div className="col-md-6">
            <div className="name-typing d-flex">
              <h1>I'm</h1>&nbsp; &nbsp;{" "}
              <h1 className="typing">Vidusha Wijekoon</h1>
            </div>
            <h3 className="mb-3 lh-base">
              B.Eng Engineering in Software Engineer &amp; <br /> Full-Stack
              Developer
            </h3>
            <p className="lh-base">
              I graduated as a software engineer from Sichuan University in 2019
              with over 4 years of experience in software engineering and web
              development.
            </p>
            <SocialMedia />
            <DownloadResume />
          </div>
          <div className="col-md-6">
            <div className="hero-img">
              <img
                src={heroImage}
                alt="vidusha wijekoon hero image"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

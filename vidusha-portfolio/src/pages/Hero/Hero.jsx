import "./hero.css";
import heroImage from "../../assets/images/hero-img.png";
import DownloadResume from "../../components/DownloadResume/DownloadResume";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Hero = () => {
  return (
    <section id="hero" class="d-flex align-items-center">
      <div class="container-fluid" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <div className="name-typing d-flex">
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
            <div>
              <SocialMedia />
              <DownloadResume />
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img src={heroImage} class="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

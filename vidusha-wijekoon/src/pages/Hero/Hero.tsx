import "./hero.css";
import heroImage from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center h-100">
          <div className="col-md-6">
            <div className=" ">
              <div className="">
                <h1>I'm Vidusha Wijekoon </h1>
                <h4>
                  B.Eng Engineering in Software Engineer & Full-Stack Developer
                </h4>
                <p>
                  I graduated as a software engineer from Sichuan University in
                  2019 with over 4 years of experience in software engineering
                  and web development.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" ">
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

import React from "react";
import robot from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">Vidusha Wijekoon</h1>
        <h2 className="gradient__text">
          Professional Software Engineer With 5 Years Industrial Experience
        </h2>
        <p>
          I am being ambitious about continuing to learn and explore new
          technologies to improve my depth of knowledge and my inspiration now
          is to pursue my professional carrier at a high level. Highly
          organized, developing innovative projects with efficiency
          effectiveness, and analysis I used my technical knowledge in producing
          market-leading software for their extremely demanding international
          client base over my eight years of work with many multinational
          software firms (Sri Lanka, China, USA, UAE). Some of the important
          traits that I have displayed during my career are commitment,
          perseverance, rapid learning of new technologies, attention to detail,
          being result-driven and productive, and always being a good team
          member. That loves development perfect solution and various methods.
          Clean code and the newest technologies create and maintain websites.
        </p>
      </div>

      <div className="header-image">
        <img src={robot} />
      </div>
    </div>
  );
};

export default Hero;

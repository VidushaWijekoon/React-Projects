import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about section__margin" id="about">
      <div className="about-heading">
        <h1 className="gradient__text">About Vidusha Wijekoon</h1>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">asdad</div>
        <div className="col-md-8">
          <div className="text-center">
            <h2>Software Engineer & Full Stack Developer</h2>
          </div>
          <div className="row my-4">
            <div className="col-md-6">Full Name: Vidusha Wijekoon</div>
            <div className="col-md-6">Email: vidusha.wijekoon11@gmail.com</div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">Birthday: 11/05/1990</div>
            <div className="col-md-6">Age: 33</div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">UAE Number: +971 58 825 0962</div>
            <div className="col-md-6">Other Number: +94 76 887 1747</div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">
              Highest Educatiion: Bachelor of Software Engineering
            </div>
            <div className="col-md-6">
              Institute: Sichaun University, Sichuan, China
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">
              Current Address: Block 29, Abu Shagara, Al Sharjah, UAE
            </div>
            <div className="col-md-6">
              Permanant Address: 52/A, Mariywatte, Gampola, Kandy, Sri Lanka
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

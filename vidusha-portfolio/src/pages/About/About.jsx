import "./about.css";

import BlurOnIcon from "@mui/icons-material/BlurOn";

const About = () => {
  return (
    <section id="about" className="about mb-5">
      <div className="about-me container">
        <div className="section-title mb-5">
          <h1 className="text-uppercase">Learn more about Vidusha Wijekoon</h1>
        </div>

        <div className="row">
          <div
            className="col-lg-4 d-flex align-items-center"
            data-aos="fade-right"
          >
            <img
              src="https://media.licdn.com/dms/image/C4D03AQFi9JzMaWCMqg/profile-displayphoto-shrink_800_800/0/1656307798136?e=2147483647&v=beta&t=MYM8_pa2ZxqIUfme-LW-Bj0FfLUBVG9IZyft72Gu4ds"
              className="img-fluid img-thumbnail w-75 d-flex m-auto"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>B.Eng in Software Engineering &amp; Full-Stack Developer</h3>
            <p className="fst-italic">
              Software engineering and full-stack development with 4+ years of
              experience in web development, e-commerce, CRM, and ERP
              development. I have displayed during my career commitment,
              perseverance, rapid learning of new technologies, attention to
              detail, being result-driven and productive, and always being a
              good team member. That loves development, perfect solutions, and
              various methods. Clean code and the newest technologies create and
              maintain websites
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <BlurOnIcon className="mr-2 button-icons" />
                    <strong>Birthday:</strong> <span>11 May 1990</span>
                  </li>
                  <li>
                    <BlurOnIcon className="mr-2 button-icons" />
                    <strong>UAE Phone:</strong> <span>(+971) 58 825 0962</span>
                  </li>
                  <li>
                    <BlurOnIcon className="mr-2 button-icons" />
                    <strong>Local Phone:</strong> <span>(+94) 76 887 1747</span>
                  </li>
                  <li>
                    <BlurOnIcon className="mr-2 button-icons" />
                    <strong>City:</strong>{" "}
                    <span>Abu Shagara, Al Sharjah, UAE</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <BlurOnIcon className="mr-2 button-icons" />
                    <strong>Age:</strong> <span>33</span>
                  </li>
                  <li>
                    <BlurOnIcon className="mr-2 button-icons" />
                    <strong>Degree:</strong> <span>Bachelor of Engineer</span>
                  </li>
                  <li>
                    <BlurOnIcon className="mr-2 button-icons" />
                    <strong>Email:</strong>{" "}
                    <span>vidusha.wijekoon11@gmail.com</span>
                  </li>
                  <li>
                    <BlurOnIcon className="mr-2 button-icons" />
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              I am ambitious about continuing to learn and explore new
              technologies to improve my depth of knowledge, and my inspiration
              now is to pursue my professional career at a high level. Highly
              organized, developing innovative projects with efficiency
              effectiveness, and analysis I used my technical knowledge to
              produce market-leading software for their extremely demanding
              international client base over my eight years of work with many
              multinational software firms (Sri Lanka, China, USA, UAE). Some of
              the important traits that I have displayed during my career are
              commitment, perseverance, rapid learning of new technologies,
              attention to detail, being result-driven and productive, and
              always being a good team member. That loves development, perfect
              solutions, and various methods. Clean code and the newest
              technologies create and maintain websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

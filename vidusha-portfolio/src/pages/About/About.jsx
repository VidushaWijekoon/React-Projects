import "./about.css";
import BlurOnIcon from "@mui/icons-material/BlurOn";

const personalInfomation = [
  {
    id: 1,
    title: "Birthday:",
    description: "11 May 1990",
  },
  {
    id: 2,
    title: "UAE Phone:",
    description: "(+971) 58 825 0962",
  },
  {
    id: 3,
    title: "Local Phone:",
    description: "(+94) 76 887 1747",
  },
  {
    id: 4,
    title: "City:",
    description: "Abu Shagara, Al Sharjah, UAE",
  },
  {
    id: 5,
    title: "Age:",
    description: "33",
  },
  {
    id: 6,
    title: "Degree:",
    description: "B.Eng in Software Engineering",
  },
  {
    id: 7,
    title: "Email:",
    description: "vidusha.wijekoon11@gmail.com",
  },
  {
    id: 7,
    title: "Freelance:",
    description: "Available",
  },
];

const About = ({ fullname }) => {
  return (
    <section id="about" className="about mb-5">
      <div className="about-me container">
        <div className="section-title mb-5">
          <h1 className="text-uppercase">Learn more about {fullname}</h1>
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
              {personalInfomation.map(({ title, description }, index) => (
                <div className="col-lg-6" key={index}>
                  <ul>
                    <li>
                      <BlurOnIcon className="mr-2 button-icons" />
                      <strong>{title}</strong> <span>{description}</span>
                    </li>
                  </ul>
                </div>
              ))}
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

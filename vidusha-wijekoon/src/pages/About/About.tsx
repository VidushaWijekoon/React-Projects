import "./about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-me container">
        <div className="section-title">
          <h2 className="text-uppercase">Learn more about </h2>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/me.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>B.Eng in Software Engineering &amp; Full-Stack Developer</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>30</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>PhEmailone:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

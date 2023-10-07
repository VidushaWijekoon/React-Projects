import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
            <div
              className="icon-box mt-5 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </p>
            </div>
          </div>
          <div
            className="image col-lg-6 order-1 order-lg-2 "
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img src="assets/img/features.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

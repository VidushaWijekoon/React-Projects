import "./services.css";

const servicesProvide = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We provide comprehensive web development services that encompass everything from website design to e-commerce solutions.",
  },
  {
    id: 1,
    title: "CRM Development",
    description:
      "Contact us today to explore how our CRM development services can empower your business to better connect with and serve your customers.",
  },
  {
    id: 1,
    title: "ERP Development",
    description:
      "ERP development services play a vital role in aligning your business processes and driving growth and profitability.",
  },
  {
    id: 1,
    title: "E-Commerce Development",
    description:
      "Whether you need a new e-commerce website or want to enhance an existing one, our e-commerce development services can meet your needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row no-gutters">
          <div
            className="content col-xl-5 d-flex align-items-stretch"
            data-aos="fade-right"
          >
            <div className="content">
              <h3>Services Provide By Vidusha Wijekoon</h3>
              <p>
                The services provided by vidusha wijekoon technology division
                have played a pivotal role in driving innovation within the
                industry. My goal is to exceed your expectations with the
                quality and efficiency of the services provided.
              </p>
            </div>
          </div>
          <div
            className="col-xl-7 d-flex align-items-stretch"
            data-aos="fade-left"
          >
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                {servicesProvide.map(({ title, description }, index) => (
                  <div className="col-md-6 icon-box" key={index}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

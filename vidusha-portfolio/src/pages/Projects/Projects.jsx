import "./projects.css";
import Image from "../../assets/images/1.png";

const InvolvedProjects = [
  {
    id: 1,
    title: "R-Tech International Website + CRM",
    description:
      "Used technologies for the development, Bootstrap, JavaScript,Laravel, Livewire, MySQL.",
  },
  {
    id: 2,
    title: "Al Sakb Computers ERP + Warehouse Inventory Management System",
    description:
      "Used technologies for the development, Bootstrap, JavaScript, Ajax, PHP, MySQL.",
  },
  {
    id: 3,
    title: "NYL Shipping Website + CRM",
    description:
      "Used technologies for the development, Bootstrap, JavaScript, Laravel, Livewire, MySQL",
  },
  {
    id: 4,
    title: "Hyperchip Website",
    description:
      "Used technologies for the development, Bootstrap, Vanilla JavaScript",
  },
  {
    id: 5,
    title: "N-Soft ERP System",
    description:
      "Used technologies for the development, Bootstrap, Vanilla JavaScript",
  },
  {
    id: 6,
    title: "JN Real State",
    description: "JN Real State Real State Project for Austalian Client",
  },
  {
    id: 7,
    title: "Taste of Rome",
    description:
      "The projects that vidusha wijekoon involved in software development",
  },
  {
    id: 8,
    title: "Nitmark.com",
    description:
      "The projects that vidusha wijekoon involved in software development",
  },
  {
    id: 1,
    title: "Aussie Paper Collection",
    description:
      "The projects that vidusha wijekoon involved in software development",
  },
  {
    id: 1,
    title: "The Riverston Grand Hotel",
    description:
      "The projects that vidusha wijekoon involved in software development",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h1>Projects</h1>
          <p className="mb-5">
            The projects that vidusha wijekoon involved in software development
            and web developement encompass a range of tasks, from coding and
            testing to user interface design and database management
          </p>
        </div>

        <div className="row justify-content-center">
          {InvolvedProjects.map(({ title, description }, index) => (
            <div
              className="col-lg-6 d-flex flex-column align-items-lg-center"
              key={index}
            >
              <div className="icon-box mt-5 mt-lg-0 mb-4">
                <div className="row" id="icon-box-card">
                  <div className="col-md-3">
                    <img src={Image} alt="" />
                  </div>
                  <div className="col-md-9">
                    <h6 className="text-capitalize">{title}</h6>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

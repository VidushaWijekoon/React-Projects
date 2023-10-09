import { education, experience } from "./experience";
import "./resume.css";
const Resume = ({ fullname }) => {
  return (
    <section id="resume" className="resume mb-5">
      <div className="container">
        <div className="section-title">
          <h1 className="text-uppercase">Check {fullname} Resume</h1>
        </div>
        <div className="row">
          <h3 className="resume-title">Professional Experience</h3>
          {experience.map((events) => (
            <div className="col-lg-6">
              <div className="resume-item mt-5">
                <h4>{events.position}</h4>
                <h5>{events.duration}</h5>
                <p>
                  <em>{events.company}</em>
                </p>
                {events.duty.map((link) => (
                  <p>
                    <ul>
                      {!link.item1 ? (
                        ``
                      ) : (
                        <li>{!link.item1 ? "" : `${link.item1}`}</li>
                      )}
                      {!link.item2 ? (
                        ``
                      ) : (
                        <li>{!link.item2 ? "" : `${link.item2}`}</li>
                      )}
                      {!link.item3 ? (
                        ``
                      ) : (
                        <li>{!link.item3 ? "" : `${link.item3}`}</li>
                      )}
                    </ul>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <h3 className="resume-title">Education</h3>
          <div className="col-lg-11">
            <div className="resume-item mt-5">
              {education.map(({ course, duration, intitute }, index) => (
                <>
                  <h4>{course}</h4>
                  <h5>{duration}</h5>
                  <p>
                    <em>{intitute}</em>
                  </p>
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

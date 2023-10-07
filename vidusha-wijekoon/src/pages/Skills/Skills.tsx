import "./skills.css";

const Skills = () => {
  return (
    <div className="skills container" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row skills-content">
        <div className="col-sm-6">
          <div className="progress">
            <span className="skill">
              HTML <i className="val">100%</i>
            </span>
            <div className="progress-bar-wrap"></div>
          </div>

          <div className="progress">
            <span className="skill">
              CSS <i className="val">90%</i>
            </span>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="progress">
          <span className="skill">
            PHP <i className="val">80%</i>
          </span>
          <div className="progress-bar-wrap"></div>
        </div>

        <div className="progress">
          <span className="skill">
            WordPress/CMS <i className="val">90%</i>
          </span>
          <div className="progress-bar-wrap"></div>
        </div>

        <div className="progress">
          <span className="skill">
            Photoshop <i className="val">55%</i>
          </span>
          <div className="progress-bar-wrap"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

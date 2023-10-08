import Slider from "../../components/Slider/Slider";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills container mb-5" id="skills">
      <div className="section-title">
        <h1>Skills</h1>
      </div>

      <div className="row skills-content mb-5">
        <div className="col-sm-6">
          <div className="progress">
            <span className="skill">
              HTML / CSS <i className="val">65%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              JavaScript / Typescript / OOP <i className="val">70%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              PHP / OOP / MVC <i className="val">75%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              Database / MySQL / RDBMS<i className="val">65%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="progress">
            <span className="skill">
              Bootstrap / TailwindCSS <i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              ReactJS / Livewire <i className="val">60%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              Laravel <i className="val">75%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              Wordpress <i className="val">60%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default Skills;

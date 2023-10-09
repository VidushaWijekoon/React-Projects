import Slider from "../../components/Slider/Slider";
import "./skills.css";

const skills = [
  {
    id: 1,
    name: "HTML / CSS",
    percentage: 65,
  },
  {
    id: 2,
    name: "Bootstrap / TailwindCSS",
    percentage: 80,
  },
  {
    id: 3,
    name: "JavaScript / Typescript / OOP",
    percentage: 70,
  },
  {
    id: 4,
    name: "ReactJS / Livewire",
    percentage: 60,
  },
  {
    id: 5,
    name: "PHP / OOP / MVC",
    percentage: 75,
  },
  {
    id: 6,
    name: "Laravel",
    percentage: 75,
  },
  {
    id: 7,
    name: "DATABASE / MYSQL / RDBMS",
    percentage: 75,
  },
  {
    id: 8,
    name: "Wordpress",
    percentage: 70,
  },
];

const Skills = () => {
  return (
    <div className="skills container mb-5" id="skills">
      <div className="section-title">
        <h1>Skills</h1>
      </div>

      <div className="row skills-content mb-5">
        {skills.map(({ name, percentage }, index) => (
          <div className="col-sm-6">
            <div className="progress">
              <span className="skill text-uppercase">
                {name} <i className="val">{percentage}%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Slider />
    </div>
  );
};

export default Skills;

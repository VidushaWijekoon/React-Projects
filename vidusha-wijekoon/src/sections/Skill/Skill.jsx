import React from "react";
import "./skill.css";

const skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-heading">
        <h1 className="gradient__text">Skills of Vidusha Wijekoon</h1>
      </div>
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-6">
            <label class="form-label">HTML</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
          <div className="col-md-6">
            <label class="form-label">CSS</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label class="form-label">Bootstrap</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
          <div className="col-md-6">
            <label class="form-label">Tailwind CSS</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label class="form-label">Javascript</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
          <div className="col-md-6">
            <label class="form-label">ReactJS</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label class="form-label">PHP</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
          <div className="col-md-6">
            <label class="form-label">Laravel</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <label class="form-label">Ajax</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
          <div className="col-md-6">
            <label class="form-label">OOP/MVC</label>
            <div
              class="progress"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar progress-bar-striped progress-bar-animated w-75"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;

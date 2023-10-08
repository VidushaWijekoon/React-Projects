import Resume from "../../assets/resume/vidusha_wijekoon_cv_2023_oct_modified.pdf";
import "./downloadresume.css";

const DownloadResume = () => {
  return (
    <a href={Resume} download className="btn btn-sm download-resume-btn">
      <span>Download Resume</span>
    </a>
  );
};

export default DownloadResume;

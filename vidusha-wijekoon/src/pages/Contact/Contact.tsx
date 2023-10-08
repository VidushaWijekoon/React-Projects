import "./contact.css";

import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const Contact = () => {
  return (
    <section id="contact" className="contact section-bg mb-5">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h1 className="mb-5">Contact Vidusha Wijekoon</h1>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box mt-4">
                  <MyLocationIcon className="mui-icon" />
                  <h3>Email Us</h3>
                  <p>
                    info@example.com
                    <br />
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-md-0">
            <div className="row">
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <AttachEmailIcon className="mui-icon" />
                  <h3>Email Us</h3>
                  <p>
                    info@example.com
                    <br />
                    contact@example.com
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <PermPhoneMsgIcon className="mui-icon" />
                  <h3>Call Us</h3>
                  <p>
                    +1 5589 55488 55
                    <br />
                    +1 6678 254445 41
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

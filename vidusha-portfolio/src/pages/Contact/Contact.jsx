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
                  <h3>Living Information</h3>
                  <p>
                    <strong>
                      Current:{" "}
                      <span>
                        1st Floor, 29 Baladiya Building, Abu Shagara, Al
                        Sharjah, UAE
                      </span>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Permanant:{" "}
                      <span>52/A Mariyawaththe, Gampola, Kandy, Sri Lanka</span>
                    </strong>
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
                    <a href="mailto:vidusha.wijekoon11@gmail.com">
                      <p>vidusha.wijekoon11@gmail.com</p>
                    </a>
                  </p>
                  <p>
                    <a href="mailto:vidusha.wijekoon11@outlook.com">
                      <p>vidusha.wijekoon11@outlook.com</p>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <PermPhoneMsgIcon className="mui-icon" />
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:+971588250962">
                      <p>(+971) 58 825 0962</p>
                    </a>
                  </p>
                  <p>
                    <a href="tel:+94768871747">
                      <p>(+94) 76 887 1747</p>
                    </a>
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

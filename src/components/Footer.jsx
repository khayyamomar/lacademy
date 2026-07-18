import Logo from "../assets/logo/logo.svg";
import LinkedinLogo from "../assets/logo/linkedin.svg?react";
import InstagramLogo from "../assets/logo/instagram.svg?react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <div className="footer-all-container">
          <div className="footer-top">
            <div className="address-container">
              <div className="address-header">
                <h6>Ünvan</h6>
              </div>
              <div className="address-title">
                <h6>İçərişəhər, Bakı, Azərbaycan</h6>
              </div>
            </div>
            <div className="contact-container">
              <div className="address-header">
                <h6>Əlaqə</h6>
              </div>
              <div className="address-title">
                <h6>test@gmail.com</h6>
                <h6>+994 99 393 08 04</h6>
                <h6>+994 70 991 08 04</h6>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=İçərişəhər,%20Baku&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="İçərişəhər, Bakı"
              />
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo-container">
              <div className="logo-container">
                <img src={Logo} alt="" />
                <h6>
                  L.A. <br />
                  AGENCY
                </h6>
              </div>
              <div className="social-media-container">
                <a
                  href="https://www.linkedin.com/company/your-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo />
                </a>

                <a
                style={{marginLeft:"10px"}}
                  href="https://www.instagram.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  aria-label="Instagram"
                >
                  <InstagramLogo />
                </a>
              </div>
            </div>
            <p>© {new Date().getFullYear()} LA Agency. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

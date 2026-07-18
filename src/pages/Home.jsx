import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";
import WhiteArrow from "../assets/icons/white-arrow.svg?react";
import BlueArrow from "../assets/icons/blue-arrow.svg?react";
import WpLogo from "../assets/icons/wp.svg?react";

import Services from "../components/home/Services";

const Home = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/994709910804", "_blank");
  };
  return (
    <div className="home-page">
      <div className="main-container">
        <div className="home-context">
          <div className="page-container">
            <h1>
              Biznesinizə özəl dayanıqlı <strong>marketing</strong>
              <br />
              sistemləri və makro-strategiyalar <br />
              qururuq.
            </h1>
            <div className="home-page-btns-container">
              <button
                className="services-btn"
                onClick={() => navigate("/services")}
              >
                Xidmətlərimiz
                <WhiteArrow className="arrow-icon" />
              </button>
              <button
                className="academy-btn"
                onClick={() => navigate("/academy")}
              >
                LAcademy
                <BlueArrow className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="services-container">
            <h3>Xidmətlərimiz</h3>
            <Services />
          </div>
        </div>
        <div className="contact-us-container" onClick={handleWhatsAppClick}>
          <h4>Bizə müraciət edin</h4>
          <div className="contact-wp-container">
            <h6>Whatsapp-a yazın</h6>
            <WpLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

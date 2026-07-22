import { useNavigate } from "react-router-dom";
import RightArrow from "../../assets/icons/right-arrow.svg?react";
import WhiteArrow from "../../assets/icons/white-arrow.svg?react";

import "./style.css";
const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      key: "creative-services",
      name: "Kreativ Xidmətlər",
    },
    {
      id: 2,
      key: "marketing-systems",
      name: "Marketing Sistemləri",
    },
    {
      id: 3,
      key: "personal-branding",
      name: "Şəxsi Brending",
    },
    {
      id: 4,
      key: "advertising-management",
      name: "Reklam İdarəçiliyi",
    },
    {
      id: 5,
      key: "podcast-services",
      name: "Podkast Xidməti",
    },
    {
      id: 6,
      key: "lacademy",
      name: "LAcademy",
    },
  ];
  return (
    <div className="services-container" style={{marginTop:"40px"}} >
       <h3>Xidmətlərimiz</h3>
    <div className="services-cards">
      {services?.map((service) => (
        <div className="service-card" key={service.id}  >
          <div className="name-container">
            <h4>{service.name}</h4>
          </div>

          <div
            className="service-route-container"
            onClick={() => {
              if(service.key==="lacademy"){
                navigate(`/lacademy`)
              }
              else {
                navigate(`/services/${service.key}`)
              }
            }}
          >
            <span className="route-text">Ətraflı <WhiteArrow/>  </span>
            <RightArrow className="arrow-icon" />
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default Services;

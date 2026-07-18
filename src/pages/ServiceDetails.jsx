import { useParams } from "react-router-dom";
import{ servicesData} from "../data/serviceData"
// import "./service-details.css";

const ServiceDetails = () => {
  const { name } = useParams();
  const service = servicesData[name];

  if (!service) {
    return (
      <div className="service-details">
        <div className="page-container">
          <p>Xidmət tapılmadı.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service-details">
      <div className="page-container">
        <h1 className="service-title">{service.title}</h1>

        {service.packages.map((pkg, pkgIndex) => (
          <div className="service-package" key={pkgIndex}>
            {pkg.subtitle && <h2 className="package-subtitle">{pkg.subtitle}</h2>}

            <div className="package-items">
              {pkg.items.map((item, itemIndex) => (
                <div className="package-item" key={itemIndex}>
                  {item.label && <span className="item-label">{item.label}</span>}
                  <p className="item-text">{item.text}</p>
                </div>
              ))}
            </div>

            {pkg.price && (
              <p className="package-price">Qiymət: {pkg.price}</p>
            )}

            <p className="package-contact">
              Ətraflı məlumat və müraciət üçün whatsapp-a keçid edin:{" "}
              
               <a  href={`https://wa.me/994${pkg.phone.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-phone"
              >
                {pkg.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
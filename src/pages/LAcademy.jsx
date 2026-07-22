import  { useEffect } from "react";
import { servicesData } from "../data/serviceData";
import "../assets/styles/details.css"
const LAcademy = () => {
  const service = servicesData["lacademy"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="service-details">
      <div className="main-container">
        <div className="page-container">
          <h1 className="service-title">{service.title}</h1>

          {service.packages.length === 0 && (
            <p className="no-content">
              Bu xidmət haqqında məlumat tezliklə əlavə olunacaq.
            </p>
          )}

          {service.packages.map((pkg, pkgIndex) => (
            <div className="service-package" key={pkgIndex}>
              {pkg.subtitle && (
                <h2 className="package-subtitle">{pkg.subtitle}</h2>
              )}

              <div className="package-items">
                {pkg.items.map((item, itemIndex) => (
                  <div className="package-item" key={itemIndex}>
                    {item.label && (
                      <span className="item-label">{item.label}</span>
                    )}
                    <p className="item-text">{item.text}</p>
                  </div>
                ))}
              </div>

              {pkg.price && (
                <p className="package-price">Qiymət: {pkg.price}</p>
              )}

              {pkg.note && (
                <p className="package-note">
                  <span>Qeyd:</span> {pkg.note}
                </p>
              )}

              <p className="package-contact">
                Ətraflı məlumat və müraciət üçün whatsapp-a keçid edin:{" "}
                <a
                  href={`https://wa.me/994${pkg.phone.replace(/\s/g, "")}`}
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
    </div>
  );
};

export default LAcademy;

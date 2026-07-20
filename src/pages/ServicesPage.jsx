import { useEffect } from "react";
import "../assets/styles/details.css"
import Services from "../components/home/Services"

const ServicesPage = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className='services-page' >
      <div className="main-container">
        <Services/>
      </div>
    </div>
  )
}

export default ServicesPage
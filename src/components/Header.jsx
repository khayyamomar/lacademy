import "./style.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";

const Header = () => {
  // const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="main-container">
        <div className="header-content-container">


      <div className="logo-container">
        <img src={Logo} alt="" />
        <h6>L.A. <br/>AGENCY</h6>
      </div>
      <nav className="navbar-list-container">
        <ul>
          <li>
            <NavLink to="/"  className={({ isActive }) => (isActive ? "active" : "")} >  Ana səhifə</NavLink>
          </li>
          <li>
            <NavLink to="/about"  className={({ isActive }) => (isActive ? "active" : "")}>Ləman Abdulla kimdir?</NavLink>
          </li>
          <li
            className="service-list"
            // onMouseEnter={() => setOpen(true)}
            // onMouseLeave={() => setOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Xidmətlərimiz
            </NavLink>

          </li>
          <li>
            <NavLink to="/lacademy">LAcademy</NavLink>
          </li>
        </ul>
      </nav>
        </div>

      </div>

    </header>
  );
};

export default Header;

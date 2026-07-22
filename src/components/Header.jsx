import { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/close.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="main-container">
        <div className="header-content-container">
          <div className="logo-container">
            <img src={Logo} alt="" />
            <h6>
              L.A. <br />
              AGENCY
            </h6>
          </div>

          <nav className="navbar-list-container">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {" "}
                  Ana səhifə
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Ləman Abdulla kimdir?
                </NavLink>
              </li>
              <li className="service-list">
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

          <img
            src={open ? CloseIcon : MenuIcon}
            alt=""
            className="menu-icon"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* Mobil açılan menyu */}
      <nav className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ana səhifə
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ləman Abdulla kimdir?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Xidmətlərimiz
            </NavLink>
          </li>
          <li>
            <NavLink to="/lacademy" onClick={closeMenu}>
              LAcademy
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
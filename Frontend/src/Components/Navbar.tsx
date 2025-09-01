import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar shadow-lg">
      <div className="navbar-container">
        <NavLink to="/">
          <div className="logo">Candidatu 888 Sparkware</div>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/casino-games"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Casino Games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/promotions"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Promotions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              News
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

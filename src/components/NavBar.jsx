import React from "react";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import "./NavBarStyles.css";

const NavBar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">Capstone I</NavLink>
      </div>

      <div className="nav-links">
        {user ? (
          <div className="user-section">
            <span className="username">Welcome, {user.username}!</span>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-links">
            <NavLink to="/simulation" className="nav-link">
              Simulation
            </NavLink>
            <Dropdown></Dropdown>
            <Link to="/simulations" className="nav-link">
              Simulations
            </Link>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

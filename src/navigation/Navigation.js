import React from 'react';
import { Link, withRouter } from "react-router-dom";

import StyleChanger from '../components/theme/styleChanger';

// Simple navigation bar

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
              <Link className="nav-link" to="/login">Login</Link></li>
              <li className={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
              <Link className="nav-link" to="/register">Register</Link></li>
              <li className={`nav-item  ${props.location.pathname === "/rate" ? "active" : ""}`}>
              <Link className="nav-link" to="/create">Create Post</Link></li>
              <li className={`nav-item  ${props.location.pathname === "/profile" ? "active" : ""}`}>
              <Link className="nav-link" to="/profile">Profile</Link></li>
            </ul>
            <StyleChanger />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
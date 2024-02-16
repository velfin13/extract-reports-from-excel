import React from "react";
import { Dropzone } from "./components/Dropzone/Dropzone";
import { NavLink } from "react-router-dom";
import "./App.css"

export const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            JAVA - REPORTS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <NavLink className="text-white nav-link active-nav" to="/reporte-bgu-1-a-2">Reporte BGU 1 a 2</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-white nav-link" to="/reporte">reporte</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Dropzone />
      </div>
    </>
  );
};

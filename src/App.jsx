import React, { useState } from "react";
import { Dropzone } from "./components/Dropzone/Dropzone";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import { reporte_bgu_1_a_2, matriz_8_a_9, matriz_10, matriz_2_a_3, matriz_4, matriz_5_a_6, matriz_7 } from "./utils/routes";

export const App = () => {
  let location = useLocation();
  const [routeCurrent, setRouteCurrent] = useState("");

  React.useEffect(() => {
    setRouteCurrent(location.pathname);
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">
            REPORTS
          </NavLink>
          <button
            className="navbar-toggler bg-white"
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
                <NavLink
                  className={({ isActive, isPending }) => {
                    if (isActive) {
                      return "text-white nav-link active-nav";
                    }
                    return "text-white nav-link";
                  }}
                  to={matriz_2_a_3}
                >
                  Reporte 2 a 3
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) => {
                    if (isActive) {
                      return "text-white nav-link active-nav";
                    }
                    return "text-white nav-link";
                  }}
                  to={matriz_4}
                >
                  Reporte 4
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) => {
                    if (isActive) {
                      return "text-white nav-link active-nav";
                    }
                    return "text-white nav-link";
                  }}
                  to={matriz_5_a_6}
                >
                  Reporte 5 a 6
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) => {
                    if (isActive) {
                      return "text-white nav-link active-nav";
                    }
                    return "text-white nav-link";
                  }}
                  to={matriz_7}
                >
                  Reporte 7
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) => {
                    if (isActive) {
                      return "text-white nav-link active-nav";
                    }
                    return "text-white nav-link";
                  }}
                  to={matriz_8_a_9}
                >
                  Reporte 8 a 9
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) => {
                    if (isActive) {
                      return "text-white nav-link active-nav";
                    }
                    return "text-white nav-link";
                  }}
                  to={matriz_10}
                >
                  Reporte 10
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) => {
                    if (isActive) {
                      return "text-white nav-link active-nav";
                    }
                    return "text-white nav-link";
                  }}
                  to={reporte_bgu_1_a_2}
                >
                  Reporte BGU 1 a 2
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Dropzone routeCurrent={routeCurrent} />
      </div>
    </>
  );
};

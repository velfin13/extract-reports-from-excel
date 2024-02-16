import React from "react";
import {Dropzone} from "./components/Dropzone/Dropzone"
export const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>
        </div>
      </nav>
      <div className="container">
        <Dropzone/>
      </div>
    </>
  );
};

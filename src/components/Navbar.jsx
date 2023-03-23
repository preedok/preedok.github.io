import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid container fixed-top mt-3">
          <a class="navbar-brand" href="#">
            <img src={require("../assets/logo.png")} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div  class="navbar-nav ms-auto">
              <a
                style={{ color: "#ff7686", fontWeight: "600" }}
                class="nav-link active"
                aria-current="page"
                href="#about"
              >
                About
              </a>
              <a
                style={{ color: "#ff7686", fontWeight: "600" }}
                class="nav-link"
                href="#experience"
              >
                Experience
              </a>
              <a
                style={{ color: "#ff7686", fontWeight: "600" }}
                class="nav-link"
                href="#project"
              >
                Project
              </a>
              <a
                style={{ color: "#ff7686", fontWeight: "600" }}
                class="nav-link"
                href="#connect"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

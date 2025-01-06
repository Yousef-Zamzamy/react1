import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-myColor fixed-top p-3">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="mb-0 py-2">
            <Link
              className="text-white text-decoration-none text-uppercase fw-bolder fs-2"
              to=""
            >
              Start Framework
            </Link>
          </div>
          <ul className="d-none d-lg-flex gap-4 list-unstyled mb-0 py-2 display-md">
            <li>
              <NavLink
                className="text-white text-decoration-none text-uppercase fw-bold"
                to="about"
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white text-decoration-none text-uppercase fw-bold"
                to="portfolio"
              >
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white text-decoration-none text-uppercase fw-bold "
                to="contact"
              >
                contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex d-lg-none">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars fs-1 text-white"></i>
            </button>
          </div>
          <div className="w-100 d-lg-none collapse navbar-collapse" id="navbarNav">
            <ul className="d-flex flex-column gap-4 list-unstyled mb-0 py-2 display-md">
              <li>
                <NavLink
                  className="text-white text-decoration-none text-uppercase fw-bold"
                  to="about"
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white text-decoration-none text-uppercase fw-bold"
                  to="portfolio"
                >
                  portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white text-decoration-none text-uppercase fw-bold "
                  to="contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

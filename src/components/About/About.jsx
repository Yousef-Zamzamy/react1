import React from "react";
// import img from "../../assets/avataaars.svg";

export default function About() {
  return (
    <>
      <div className="bg-myColor3 py-5 mt-5">
        <div className="w-75 py-5 mt-5 mx-auto d-flex flex-column align-items-center">
          <h2 className="mt-5 pt-5 text-white fs-1 text-uppercase fw-bold">
            about component
          </h2>
          <div className="my-2 d-flex justify-content-between gap-3 align-items-center">
            <div className="line"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="line"></div>
          </div>
          <div className="d-flex justify-content-between gap-3 text-white">
            <p className="mb-5 mt-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="mb-5 mt-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

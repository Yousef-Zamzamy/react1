import React from "react";

export default function Footer() {
  return (
    <>
      <div className="">
        <div className="bg-myColor ">
          <div className="container text-white py-5 ">
            <div className="row align-items-center my-4">
              <div className="col-md-4 text-center">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4 text-center">
                <h2>AROUND THE WEB</h2>
                <div className="d-flex justify-content-center gap-3">
                  <i className="fa-brands fs-5 fa-facebook border border-white rounded-circle p-2"></i>
                  <i className="fa-brands fs-5 fa-twitter border border-white rounded-circle p-2"></i>
                  <i className="fa-brands fs-5 fa-linkedin border border-white rounded-circle p-2"></i>
                  <i className="fa-brands fs-5 fa-google border border-white rounded-circle p-2"></i>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-myColor2">
          <p className="text-white m-0 p-3 text-center">
            Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </>
  );
}

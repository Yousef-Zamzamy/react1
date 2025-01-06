import React from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import style from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <div className="pt-5 my-5">
        <h1 className="my-3  text-center text-myColor text-uppercase fw-bolder">
          portfolio component
        </h1>
        <div className="my-2 d-flex justify-content-center align-items-center w-25 mx-auto">
          <div className="line2 mx-3"></div>
          <i className="fa-solid fa-star text-myColor"></i>
          <div className="line2 mx-3"></div>
        </div>
        <div className="container my-3 py-4">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className={`${style.item} position-relative`}>
                <img src={img1} alt="" className="w-100 rounded-3" />
                <div
                  className={`${style.layer} position-absolute bg-myColor3 top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center`}
                >
                  <i className="text-white fa-solid fa-plus fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${style.item} position-relative`}>
                <img src={img2} alt="" className="w-100 rounded-3" />
                <div
                  className={`${style.layer} position-absolute bg-myColor3 top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center`}
                >
                  <i className="text-white fa-solid fa-plus fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${style.item} position-relative`}>
                <img src={img3} alt="" className="w-100 rounded-3" />
                <div
                  className={`${style.layer} position-absolute bg-myColor3 top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center`}
                >
                  <i className="text-white fa-solid fa-plus fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${style.item} position-relative`}>
                <img src={img1} alt="" className="w-100 rounded-3" />
                <div
                  className={`${style.layer} position-absolute bg-myColor3 top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center`}
                >
                  <i className="text-white fa-solid fa-plus fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${style.item} position-relative`}>
                <img src={img2} alt="" className="w-100 rounded-3" />
                <div
                  className={`${style.layer} position-absolute bg-myColor3 top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center`}
                >
                  <i className="text-white fa-solid fa-plus fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${style.item} position-relative`}>
                <img src={img3} alt="" className="w-100 rounded-3" />
                <div
                  className={`${style.layer} position-absolute bg-myColor3 top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center`}
                >
                  <i className="text-white fa-solid fa-plus fa-7x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-primary position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-opacity-25">
          <div className="w-50 text-center">
            <img className="w-75" src={img3} alt="" />
          </div>
        </div> */}
      </div>
    </>
  );
}

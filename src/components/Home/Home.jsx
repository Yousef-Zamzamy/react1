import React from "react";
import img from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="bg-myColor3 py-5 mt-5">
        <div className="w-75 py-5 mx-auto d-flex flex-column align-items-center">
          <img className="my-4 w-25 mx-auto" src={img} alt="" />
          <h2 className="my-3 text-white fs-1 text-uppercase fw-bold">
            start Framework
          </h2>
          <div className="my-2 d-flex justify-content-between gap-3 align-items-center">
            <div className="line"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="line"></div>
          </div>
          <p className="text-white my-2">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}

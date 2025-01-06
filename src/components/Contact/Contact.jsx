import React, { useState } from "react";
import style from "./Contact.module.css";

export default function Contact() {
  const [inputValue, setInputValue] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValue({
      [id]: value,
    });
  };

  return (
    <>
      <div className="pt-5 my-5">
        <h1 className="my-3 text-center text-myColor text-uppercase fw-bolder">
          conatct section
        </h1>
        <div className="my-2 d-flex justify-content-center align-items-center w-25 mx-auto">
          <div className="line2 mx-3"></div>
          <i className="fa-solid fa-star text-myColor"></i>
          <div className="line2 mx-3"></div>
        </div>
        <div className="container my-4 py-4 ">
          <div className="item d-flex flex-column align-items-start w-75 mx-auto">
            <label
              className={
                inputValue.userName ? style.labelStyle1 : style.labelStyle2
              }
              htmlFor="userName"
            >
              userName :
            </label>
            <input
              onChange={handleInputChange}
              value={inputValue.userName}
              className={`${style.formControl} mx-auto my-2 form-control border-0 border-bottom py-2 z-2`}
              id="userName"
              type="text"
              placeholder="userName"
            />
            <label
              className={
                inputValue.userAge ? style.labelStyle1 : style.labelStyle2
              }
              htmlFor="userAge"
            >
              userAge :
            </label>
            <input
              id="userAge"
              type="text"
              onChange={handleInputChange}
              value={inputValue.userAge}
              className={`${style.formControl} mx-auto my-2 form-control border-0 border-bottom py-2 z-2`}
              placeholder="userAge"
            />
            <label
              className={
                inputValue.userEmail ? style.labelStyle1 : style.labelStyle2
              }
              htmlFor="userEmail"
            >
              userEmail :
            </label>
            <input
              id="userEmail"
              type="email"
              onChange={handleInputChange}
              value={inputValue.userEmail}
              className={`${style.formControl} mx-auto my-2 form-control border-0 border-bottom py-2 z-2`}
              placeholder="userEmail"
            />
            <label
              className={
                inputValue.userPassword ? style.labelStyle1 : style.labelStyle2
              }
              htmlFor="userPassword"
            >
              userPassword :
            </label>
            <input
              id="userPassword"
              type="password"
              onChange={handleInputChange}
              value={inputValue.userPassword}
              className={`${style.formControl} mx-auto my-2 form-control border-0 border-bottom py-2 z-2`}
              placeholder="userPassword"
            />
            <button className="text-white my-2 py-2 px-3 bg-myColor3 rounded-3 border-0 ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

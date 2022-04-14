import React from "react";
import "./modal-form.css";
import validator from "validator";
import { useState } from "react";

const Modal = ({ closeModal }) => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = e => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <a href="#aboutMe" className="" onClick={() => closeModal(false)}>
            X
          </a>
        </div>
        <div className="title">
          <h2>CONTACT FORM</h2>
        </div>
        <div className="body form">
          <input type="text" placeholder="Name"></input>
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => validateEmail(e)}
          ></input>{" "}
          <br />
          <span
            style={{
              color: "white",
            }}
          >
            {emailError}
          </span>
          <input type="tel" placeholder="Phone Number"></input>
          <input type="textarea" placeholder="Comments"></input>
        </div>
        <div className="footer">
          <div className="modalButtons">
            <a href="#contact" className="btn">
              Submit
            </a>
            <a
              href="#aboutMe"
              className="btn"
              onClick={() => closeModal(false)}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

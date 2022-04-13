import React from "react";
import "./modal-form.css";

const Modal = ({ closeModal }) => {
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
          <input type="text" placeholder="E-mail"></input>
          <input type="text" placeholder="Phone Number"></input>
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

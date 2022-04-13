import React from "react";
import Resume from "../../assets/Joseph_Dugan_resume.pdf";
import { useState } from "react";
import Modal from "../modal/Modal-Form.js";

const HeaderButtons = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="aboutMeButtons">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a
        // href="#contact"
        className="btn btn-secondary"
        onClick={() => {
          setOpenForm(true);
        }}
      >
        Connect With Me
      </a>
      {openForm && <Modal closeModal={setOpenForm} />}
    </div>
  );
};

export default HeaderButtons;

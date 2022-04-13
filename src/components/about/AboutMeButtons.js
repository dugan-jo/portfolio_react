import React from "react";
import Resume from "../../assets/Joseph_Dugan_resume.pdf";

const HeaderButtons = () => {
  return (
    <div className="aboutMeButtons">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-secondary">
        Let's Connect
      </a>
    </div>
  );
};

export default HeaderButtons;

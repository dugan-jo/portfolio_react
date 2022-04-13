import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const HeaderSocial = () => {
  return (
    <div className="headerSocial">
      <a href="https://www.linkedin.com/in/dugan-jo/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/dugan-jo/" target="_blank">
        <BsGithub />
      </a>
      <a href="https://github.com/dugan-jo/" target="_blank">
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default HeaderSocial;

import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        {" "}
        <AiFillHome />
      </a>
      <a href="#projects">
        {" "}
        <GrProjects />
      </a>
      <a href="#aboutMe">
        {" "}
        <AiOutlineUser />
      </a>
      <a href="#contact">
        {" "}
        <MdPermContactCalendar />
      </a>
    </nav>
  );
};

export default Nav;

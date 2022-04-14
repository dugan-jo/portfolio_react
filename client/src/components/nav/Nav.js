import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <Link
        to="/"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiFillHome />
      </Link>
      <Link
        to="/projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <GrProjects />
      </Link>
      <Link
        to="/about"
        onClick={() => setActiveNav("#aboutMe")}
        className={activeNav === "#aboutMe" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="/contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdPermContactCalendar />
      </Link>
    </nav>
  );
};

export default Nav;

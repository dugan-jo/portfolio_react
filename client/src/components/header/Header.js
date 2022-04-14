import React from "react";
import "./header.css";
// import HeaderButtons from "./HeaderButtons";
import ME from "../../assets/JosephDugan.PNG";

const Header = () => {
  return (
    <>
      <header>
        <div id="home" className="container headerContainer">
          <h5>HELLO I AM</h5>
          <h1>JOSEPH DUGAN</h1>
          <h5 className="text-light">Full Stack Developer</h5>
          {/* <HeaderButtons /> */}
          <div className="me">
            <img src={ME} alt="" />
          </div>
          <div className="quote">
            <h3>
              "First, solve the problem. Then, write the code." John Johnson
            </h3>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

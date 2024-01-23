import { Fragment } from "react";

import "./MobileNavbar.css";
const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <Fragment>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1>Time To Code</h1>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;

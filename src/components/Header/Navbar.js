import { Fragment, useState } from "react";

import "./Navbar.css";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => {
      return !prevState;
    });
  };
  return (
    <Fragment>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />
      <div className="navbar">
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
        <button onClick={toggleMenu}>
          {openMenu ? (
            <i
              className="fas fa-times close-icon"
              style={{ padding: "0 0.5vmax" }}
            ></i>
          ) : (
            <i className="bx bx-menu-alt-right"></i>
          )}
        </button>
      </div>
    </Fragment>
  );
};

export default Navbar;

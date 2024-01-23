import { Fragment } from "react";

import "./Home.css";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
const Home = () => {
  return (
    <Fragment>
      <div id="home" className="container">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Fragment>
  );
};

export default Home;

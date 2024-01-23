import { Fragment, useRef } from "react";
import { PROJECTS } from "../../../utils/data";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";

import "./Projects.css";

const Projects = () => {
  const slideRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };
  const slideLeft = () => {
    slideRef.current.slickPrev();
  };

  return (
    <Fragment>
      <section id="projects" className="projects-container">
        <h5>Projects</h5>
        <div className="projects-content">
          <div className="arrow-right" onClick={slideRight}>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="arrow-left" onClick={slideLeft}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <Slider ref={slideRef} {...settings}>
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Slider>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;

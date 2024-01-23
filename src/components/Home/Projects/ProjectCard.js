import { Fragment } from "react";

import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <Fragment>
      <div className="project-card">
        <h6>{project.title}</h6>
        <div className="project-duration">{project.date}</div>
        <ul>
          {project.description.map((des, index) => (
            <li key={index}>{des}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ProjectCard;

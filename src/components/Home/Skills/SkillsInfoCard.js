import { Fragment } from "react";

import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <Fragment>
      <div className="skills-info-card">
        <h6>{heading}</h6>
        <div className="skills-info-content">
          {skills.map((skill, index) => (
            <Fragment key={index}>
              <div className="skill-info">
                <p>{skill.skill}</p>
                <p className="percentage">{skill.percentage}</p>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SkillsInfoCard;

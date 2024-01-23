import { Fragment } from "react";

import "./SkillsCard.css";

const SkillsCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <Fragment>
      <div className={`skills-card ${isActive && "active"}`} onClick={onClick}>
        <div className="skill-icon">
          <img src={iconUrl} alt={title} />
        </div>
        <span>{title}</span>
      </div>
    </Fragment>
  );
};

export default SkillsCard;

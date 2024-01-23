import { Fragment, useState } from "react";
import { SKILLS } from "../../../utils/data";
import SkillsCard from "./SkillsCard";

import "./Skills.css";
import SkillsInfoCard from "./SkillsInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const SkillChangeHandler = (data) => {
    setSelectedSkill(data);
  };
  return (
    <Fragment>
      <div id="skills" className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((skill, index) => (
              <SkillsCard
                key={index}
                title={skill.title}
                iconUrl={skill.icon}
                isActive={selectedSkill.title === skill.title}
                onClick={() => {
                  SkillChangeHandler(skill);
                }}
              />
            ))}
          </div>
          <div className="skills-info">
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;

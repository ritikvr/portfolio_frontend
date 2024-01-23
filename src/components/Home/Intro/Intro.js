import { Fragment } from "react";
import { useTypewriter } from "react-simple-typewriter";
import ReactImg from "../../../images/react.jpg";
import DataStructureImg from "../../../images/data_structure.jpg";
import ExpressImg from "../../../images/expressjs.png";
import JavaImg from "../../../images/java.jpg";
import MongoImg from "../../../images/mongodb.jpg";
import ProfileImg from "../../../images/Ritik.png";

import "./Intro.css";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Problem Solver"],
    loop: 0,
  });
  return (
    <Fragment>
      <section className="intro-container">
        <div className="intro-content">
          <h1>Hii I'm Ritik</h1>
          <div>
            <h3>And I'm</h3>
            <span style={{color:'black',fontWeight:600}}>{text}</span>
            <span style={{ color: "#fbeec1", fontWeight:400}}>|</span>
          </div>
          <p>
            I am a passionate MERN (MongoDB, Express.js, React.js, Node.js)
            Stack Developer with six months of hands-on experience. Proficient
            in problem-solving, I bring a strong analytical mindset to tackle
            complex challenges. My dedication to continuous learning and
            adaptability allows me to thrive in a collaborative team
            environment. I am committed to delivering high-quality solutions
            that meet both client and user expectations.
          </p>
        </div>

        <div className="intro-img">
          <div>
            <div className="tech-icon">
              <img src={ReactImg} alt="react" />
            </div>
            <img src={ProfileImg} alt="profile" />
          </div>
          <div>
            <div className="tech-icon">
              <img src={ExpressImg} alt="expressjs" />
            </div>
            <div className="tech-icon">
              <img src={MongoImg} alt="mongodb" />
            </div>
            <div className="tech-icon">
              <img src={DataStructureImg} alt="dataStructure" />
            </div>
            <div className="tech-icon">
              <img src={JavaImg} alt="java" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;

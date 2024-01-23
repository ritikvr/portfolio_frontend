import { Fragment } from "react";

import "./ContactInfoCard.css";

const ContactInfoCard = ({ icon, text, isEmail, isResume }) => {
  return (
    <Fragment>
      <div className="contact-info-card">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        {isEmail && (
          <a href={text} target="_blank" rel="noreferrer">
            ritik11oct2003@gmail.com
          </a>
        )}
        {isResume && (
          <a href={text} target="_blank" rel="noreferrer">
            Resume
          </a>
        )}
        {!isEmail && !isResume && (
          <a href={text} target="_blank" rel="noreferrer">
            {text}
          </a>
        )}
      </div>
    </Fragment>
  );
};

export default ContactInfoCard;

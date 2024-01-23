import { Fragment } from "react";
import ContactInfoCard from "./ContactInfoCard";
import EmailIcon from "../../../images/email_icon.png";
import LinkedinIcon from "../../../images/linkedin_icon.png";
import GithubIcon from "../../../images/github_icon.png";
import ResumeIcon from "../../../images/resume_icon.png";

import "./Contact.css";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <Fragment>
      <section id="contact" className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
          <div>
            <ContactInfoCard
              icon={EmailIcon}
              text="https://mailto:ritik11oct2003@gmail.com"
              isEmail={true}
              isResume={false}
            />
            <ContactInfoCard
              icon={LinkedinIcon}
              text="https://linkedin.com/in/ritik-agarwal-04986a257"
              isEmail={false}
              isResume={false}
            />
            <ContactInfoCard
              icon={GithubIcon}
              text="https://github.com/ritikvr"
              isEmail={false}
              isResume={false}
            />
            <ContactInfoCard
              icon={ResumeIcon}
              text="https://drive.google.com/file/d/1xtLoUQ3WYTYkLpwQZo6YKC2KwoaSYA5u/view?usp=sharing"
              isEmail={false}
              isResume={true}
            />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;

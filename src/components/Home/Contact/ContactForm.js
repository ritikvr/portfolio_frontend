import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      if (
        name.replace(/[^\w\s]/gi, "").replace(/\s+/g, "") === "" ||
        email.replace(/[^\w\s]/gi, "").replace(/\s+/g, "") === "" ||
        message.replace(/[^\w\s]/gi, "").replace(/\s+/g, "") === ""
      ) {
        toast.error("please provide the valid fields");
        return;
      }
      const visitorData = {
        name,
        email,
        message,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/v1/send", visitorData, config);
      toast.success(data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Fragment>
      <form className="contact-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          placeholder="Message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </Fragment>
  );
};

export default ContactForm;

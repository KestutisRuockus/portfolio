import { Form } from "react-router-dom";
import "./contactUs.css";
import React, { useState } from "react";

type EmailStatusProps = "" | "success" | "error";

const ContactUs = () => {
  const [message, setMessage] = useState<string>("message");
  const [emailStatus, setEmailStatus] = useState<EmailStatusProps>("");
  const [email, setEmail] = useState<string>("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setMessage("We will contact you soon.");
      setEmailStatus("success");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address");
      setEmailStatus("error");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateEmail(email);
  };

  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <div className="form-title">Contact Us</div>
        <Form onSubmit={handleSubmit} className="form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <button type="submit">Send</button>
        </Form>
        <div
          className={`message cooking-contact-us-${emailStatus}`}
          style={
            emailStatus === ""
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
        >
          {emailStatus === "" ? "" : message}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

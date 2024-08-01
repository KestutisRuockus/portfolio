import React from "react";
import "./footer.css";
import logo from "../../assets/images/cookingLogo.png";
import ContactUs from "../ContactUs/ContactUs";

const Footer = () => {
  return (
    <div className="cooking-footer">
      <div className="logo">
        <img src={logo} alt="cooking together" />
      </div>
      <div className="follow-us">
        <div className="text">Follow us</div>
        <div className="icons">
          <i className="fa-brands fa-facebook icon-facebook"></i>
          <i className="fa-brands fa-x-twitter icon-twitter"></i>
          <i className="fa-brands fa-square-instagram icon-instagram"></i>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Footer;

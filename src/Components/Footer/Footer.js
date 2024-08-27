import React from "react";
import logo from "../../assets/newlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Copyright Section */}
      <div className="footer-cpyright">
        <p>© All Rights Reserved</p>
      </div>

      {/* Social Media Links */}
      <ul className="footer-social-media">
        <li>
          <a href="">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

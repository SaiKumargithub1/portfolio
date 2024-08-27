import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hello, I'm</h1>
        <h2 className="fullname">Saikumar</h2>
        <h2>
          I'm a{" "}
          <Typical
            steps={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Front End Developer",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          I'm a skilled Full Stack Developer with experience in building and
          maintaining web applications. I specialize in both frontend and
          backend development, ensuring seamless integration and functionality.
        </p>
        <div className="header-payment-container">
          <button>Hire me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      <div className="profile-img-container">
        <img src={profileImg} alt="Profile" />
        <div className="circle"></div>
        <div className="circle-1"></div>
      </div>
    </div>
  );
};

export default Header;

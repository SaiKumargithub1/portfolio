import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* Description Container */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            As a Fullstack Developer, I offer comprehensive web development
            services, managing both frontend (UI/UX) and backend (server,
            database) aspects. I ensure seamless integration, optimal
            functionality, and responsive design for fully integrated digital
            solutions.
          </p>
          <button>Hire me</button>
        </div>

        {/* Service Items Container */}
        <div className="service-item-container">
          {/* Web Development Service */}
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-dec">
              <h3>Web Development</h3>
              <p>
                I create responsive, efficient websites with a focus on seamless
                user experiences, robust backend functionality, and scalability.
              </p>
            </div>
          </div>

          {/* Desktop Development Service */}
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-dec">
              <h3>Desktop Development</h3>
              <p>
                I develop high-performance desktop applications, emphasizing
                user-friendly interfaces, scalability, and efficient integration
                with existing systems.
              </p>
            </div>
          </div>

          {/* UX Design Service */}
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-dec">
              <h3>U/X Design</h3>
              <p>
                I design intuitive, visually appealing interfaces that enhance
                user experience, engagement, and accessibility across various
                platforms and devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

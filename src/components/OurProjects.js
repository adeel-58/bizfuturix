// OurProjects.js
import React from "react";
import "../styles/OurProjects.css";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";

const OurProjects = () => {
  const imagesTop = [img1, img2, img3, img4];
  const imagesBottom = [img5, img6, img7, img8];

  return (
    <section className="our-projects-container">
      

      <div className="projects-row">
        {imagesTop.map((img, index) => (
          <div className="project-card" key={`top-${index}`}>
            <img src={img} alt={`Project ${index + 1}`} className="project-image" />
          </div>
        ))}
      </div>

      <div className="projects-row bottom-row">
        {imagesBottom.map((img, index) => (
          <div className="project-card" key={`bottom-${index}`}>
            <img src={img} alt={`Project ${index + 5}`} className="project-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;

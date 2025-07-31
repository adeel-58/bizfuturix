// OurProjects.js
import React from "react";
import "../styles/OurProjects.css";

import img1 from "../assets/images/projects/img1.jpg";
import img2 from "../assets/images/projects/img2.jpg";
import img3 from "../assets/images/projects/img3.jpg";
import img4 from "../assets/images/projects/img4.jpg";
import img5 from "../assets/images/projects/img5.jpg";
import img6 from "../assets/images/projects/img6.jpg";
import img7 from "../assets/images/projects/img7.jpg";
import img8 from "../assets/images/projects/img8.jpg";

const OurProjects = () => {
  const imagesTop = [
    { image: img1, link: "/nailova" },
    { image: img2, link: "/nailova" },
    { image: img3, link: "/nailova" },
    { image: img4, link: "/nailova" },
  ];

  const imagesBottom = [
    { image: img5, link: "/nailova" },
    { image: img6, link: "/nailova" },
    { image: img7, link: "/nailova" },
    { image: img8, link: "/nailova" },
  ];

  return (
    <section className="our-projects-container">
      <div className="projects-row">
        {imagesTop.map((item, index) => (
          <div className="project-card" key={`top-${index}`}>
            <a href={item.link} rel="noopener noreferrer">
              <img src={item.image} alt={`Project ${index + 1}`} className="project-image" />
            </a>
          </div>
        ))}
      </div>

      <div className="projects-row bottom-row">
        {imagesBottom.map((item, index) => (
          <div className="project-card" key={`bottom-${index}`}>
            <a href={item.link} rel="noopener noreferrer">
              <img src={item.image} alt={`Project ${index + 5}`} className="project-image" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;

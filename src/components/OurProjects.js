// OurProjects.js
import React from "react";
import "../styles/OurProjects.css";

import img1 from "../assets/images/projects/img1.jpg";
import img2 from "../assets/images/projects/img2.jpg";
import img3 from "../assets/images/projects/cs.png";
import img4 from "../assets/images/projects/cs.png";
import img5 from "../assets/images/projects/cs.png";
import img6 from "../assets/images/projects/cs.png";
import img7 from "../assets/images/projects/cs.png";
import img8 from "../assets/images/projects/cs.png";

const OurProjects = () => {
  const imagesTop = [
    { image: img1, link: "/nailova" },
    { image: img2, link: "/nooky" },
    { image: img3, link: "#" },
    { image: img4, link: "#" },
  ];

  const imagesBottom = [
    { image: img5, link: "#" },
    { image: img6, link: "#" },
    { image: img7, link: "#" },
    { image: img8, link: "#" },
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

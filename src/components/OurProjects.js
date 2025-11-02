import React from "react";
import "../styles/OurProjects.css";

import img1 from "../assets/images/projects/img1.jpg";
import img2 from "../assets/images/projects/img2.jpg";
import img3 from "../assets/images/projects/storensupply.png";
import img4 from "../assets/images/projects/ecom.webp";
import img5 from "../assets/images/projects/cs.png";
import img6 from "../assets/images/projects/cs.png";
import img7 from "../assets/images/projects/cs.png";
import img8 from "../assets/images/projects/cs.png";

const OurProjects = () => {
  const imagesTop = [
    { image: img1, link: "/nailova", name: "Nailova", services: ["Branding", "Website Design", "Web Development"] },
    { image: img2, link: "/nooky", name: "Nooky", services: ["Branding"] },
    { image: img3, link: "https://www.storensupply.com", name: "Store N Supply", services: ["SaaS", "Web Design", "Web App Dev"] },
    { image: img4, link: "/ecommerce", name: "Ecommerce Account Management", services: ["Account Setup","Product Listing","Order Fulfillment","Store Management"] },
  ];

  const imagesBottom = [
    { image: img5, link: "#", name: "Coming Soon", services: ["Coming Soon"] },
    { image: img6, link: "#", name: "Coming Soon", services: ["Coming Soon"] },
    { image: img7, link: "#", name: "Coming Soon", services: ["Coming Soon"] },
    { image: img8, link: "#", name: "Coming Soon", services: ["Coming Soon"] },
  ];

  const renderCard = (item, index, keyPrefix) => {
    const isExternal = item.link.startsWith("http");
    const linkProps = isExternal
      ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
      : { href: item.link };

    return (
      <div className="project-card" key={`${keyPrefix}-${index}`}>
        <a {...linkProps}>
          <img src={item.image} alt={item.name} className="project-image" />
          <div className="project-overlay">
            <h3 className="project-overlay-title">{item.name}</h3>
            <ul className="project-services">
              {item.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    );
  };

  return (
    <section className="our-projects-container">
      <div className="projects-row">
        {imagesTop.map((item, index) => renderCard(item, index, "top"))}
      </div>

      <div className="projects-row bottom-row">
        {imagesBottom.map((item, index) => renderCard(item, index, "bottom"))}
      </div>
    </section>
  );
};

export default OurProjects;

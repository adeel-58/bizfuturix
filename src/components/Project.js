import React, { useRef } from 'react';
import './Project.css';

import { ReactComponent as ArrowRight } from '../icons/arrow.svg';

const Project = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -360 : 360,
                behavior: 'smooth'
            });
        }
    };

    const projects = [
        {
            id: 1,
            name: "Project Alpha",
            services: ["Website Development", "Design", "Marketing"],
            image: "https://placehold.co/400x350/E0E0E0/333333?text=Project+Alpha"
        },
        {
            id: 2,
            name: "E-commerce Platform",
            services: ["Frontend Dev", "Backend Integration", "Payments"],
            image: "https://placehold.co/400x350/D0D0D0/333333?text=E-commerce"
        },
        {
            id: 3,
            name: "Social Media Campaign",
            services: ["Strategy", "Design", "Ads Management"],
            image: "https://placehold.co/400x350/C0C0C0/333333?text=Social+Media"
        },
        {
            id: 4,
            name: "Mobile App UI/UX",
            services: ["Wireframing", "Prototyping", "User Testing"],
            image: "https://placehold.co/400x350/B0B0B0/333333?text=Mobile+App"
        },
        {
            id: 5,
            name: "Content Management System",
            services: ["Custom CMS", "API Integration", "User Roles"],
            image: "https://placehold.co/400x350/A0A0A0/333333?text=CMS"
        },
        {
            id: 6,
            name: "SEO & Analytics Dashboard",
            services: ["SEO", "Analytics", "Reporting"],
            image: "https://placehold.co/400x350/909090/333333?text=Analytics"
        },
    ];

    return (
        <div className="projects-container1">
            <h1 className="agency-title1">Our projects</h1>
            <p className="agency-description1">
                Explore a selection of our recent projects, showcasing our expertise in design, web development, and marketing. Each project reflects our commitment to delivering innovative and effective digital solutions.
            </p>

            <div className="carousel-wrapper">
                <button className="scroll-button left" onClick={() => scroll('left')}>
                    <ArrowRight />
                </button>

                <div className="cards-carousel" ref={scrollRef}>
                    {projects.map(project => (
                        <div className="project-card1" key={project.id}>
                            <img src={project.image} alt={project.name} className="project-image1" />
                            <div className="project-overlay1">
                                <h3 className="project-overlay-title1">{project.name}</h3>
                                <ul className="project-services1">
                                    {project.services.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>


                <button className="scroll-button right rotated" onClick={() => scroll('right')}>
  <ArrowRight />
</button>
            </div>

            <button className="start-project-button1">
                View all projects
            </button>
        </div>
    );
};

export default Project;

import React, { useRef } from 'react';
import '../styles/Project.css';
import { Link } from 'react-router-dom';
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
            name: "Nailova",
            services: ["Branding","Website Design", "Web Development"],
            image: require('../assets/images/nailovamockup.jpg'),
            link: "/nailova"
        },
        {
            id: 2,
            name: "Nooky",
            services: ["Branding"],
            image: require('../assets/images/nookymockup.jpg'),
            link: "/nooky"
        },
        {
            id: 3,
            name: "Coming Soon",
            services: ["Coming Soon"],
            image: require('../assets/images/cs.png'),
            link: "#"
        },
        {
            id: 4,
            name: "Coming Soon",
            services: ["Coming Soon"],
            image: require('../assets/images/cs.png'),
            link: "#"
        },
        {
            id: 5,
           name: "Coming Soon",
            services: ["Coming Soon"],
            image: require('../assets/images/cs.png'),
            link: "#"
        },
        {
            id: 6,
           name: "Coming Soon",
            services: ["Coming Soon"],
            image: require('../assets/images/cs.png'),
            link: "#"
        },
    ];

    return (
        <div className="projects-container1">
            <h1 className="agency-title1">Our projects</h1>
            <p className="agency-description1">
                We don’t just deliver projects, we build bold, scroll-stopping brands.
                From standout logos to high-performing websites, our work drives results.
                Take a look at how we turn big ideas into powerful visuals.
            </p>

            <div className="carousel-wrapper">
                <button className="scroll-button left" onClick={() => scroll('left')}>
                    <ArrowRight />
                </button>

                <div className="cards-carousel" ref={scrollRef}>
                    {projects.map(project => (
                        <a
                            href={project.link}
                            
                            rel="noopener noreferrer"
                            className="project-card1"
                            key={project.id}
                        >
                            <img src={project.image} alt={project.name} className="project-image1" />
                            <div className="project-overlay1">
                                <h3 className="project-overlay-title1">{project.name}</h3>
                                <ul className="project-services1">
                                    {project.services.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    ))}
                </div>

                <button className="scroll-button right rotated" onClick={() => scroll('right')}>
                    <ArrowRight />
                </button>
            </div>

            <Link to="/our-projects" className="start-project-button1">
                View all projects
            </Link>
        </div>
    );
};

export default Project;

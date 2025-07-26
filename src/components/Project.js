import React from 'react';
import './Project.css'; // Import the raw CSS file for Project component

const Project = () => {
    const projects = [
        {
            id: 1,
            name: "Project Alpha",
            description: "A comprehensive brand identity and website redesign for a tech startup, focusing on modern aesthetics and intuitive user experience.",
            image: "https://placehold.co/400x350/E0E0E0/333333?text=Project+Alpha" // Placeholder image
        },
        {
            id: 2,
            name: "E-commerce Platform",
            description: "Developed a scalable e-commerce solution with custom features and seamless payment gateway integrations for a retail client.",
            image: "https://placehold.co/400x350/D0D0D0/333333?text=E-commerce" // Placeholder image
        },
        {
            id: 3,
            name: "Social Media Campaign",
            description: "Executed a successful Instagram campaign that significantly boosted engagement and follower count for a lifestyle brand.",
            image: "https://placehold.co/400x350/C0C0C0/333333?text=Social+Media" // Placeholder image
        },
        {
            id: 4,
            name: "Mobile App UI/UX",
            description: "Designed an intuitive and user-friendly interface for a new mobile application, enhancing accessibility and visual appeal.",
            image: "https://placehold.co/400x350/B0B0B0/333333?text=Mobile+App" // Placeholder image
        },
        {
            id: 5,
            name: "Content Management System",
            description: "Built a custom CMS for a media company, enabling efficient content creation, publishing, and audience management.",
            image: "https://placehold.co/400x350/A0A0A0/333333?text=CMS" // Placeholder image
        },
        {
            id: 6,
            name: "SEO & Analytics Dashboard",
            description: "Implemented advanced SEO strategies and developed a custom analytics dashboard to track website performance and conversions.",
            image: "https://placehold.co/400x350/909090/333333?text=Analytics" // Placeholder image
        },
    ];

    return (
        <div className="projects-container1">
            <h1 className="agency-title1">Our projects</h1> {/* Changed heading */}
            <p className="agency-description1">
                Explore a selection of our recent projects, showcasing our expertise in design, web development, and marketing. Each project reflects our commitment to delivering innovative and effective digital solutions.
            </p>

            <div className="cards-grid1">
                {projects.map(project => (
                    <div className="project-card1" key={project.id}>
                        <img src={project.image} alt={project.name} className="project-image1" />
                        <div className="project-overlay1">
                            <h3 className="project-overlay-title1">{project.name}</h3>
                            {/* You can add project description here if you want it to appear on hover too */}
                            {/* <p className="project-overlay-description">{project.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>

            <button className="start-project-button1">
                View all projects
            </button>
        </div>
    );
};

export default Project;
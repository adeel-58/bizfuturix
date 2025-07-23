import React from 'react';
import './Project.css'; // Import the raw CSS file for Project component

const Project = () => {
    return (
        <div className="projects-container">
            <h1 className="agency-title">Our projects</h1> {/* Changed heading */}
            <p className="agency-description">
                Explore a selection of our recent projects, showcasing our expertise in design, web development, and marketing. Each project reflects our commitment to delivering innovative and effective digital solutions.
            </p>

            <div className="cards-grid">
                {/* Project Card 1 */}
                <div className="project-card">
                    
                    <h3 className="card-title">Project Alpha</h3>
                    <p className="card-description">
                        A comprehensive brand identity and website redesign for a tech startup, focusing on modern aesthetics and intuitive user experience.
                    </p>
                </div>

                {/* Project Card 2 */}
                <div className="project-card">
                    
                    <h3 className="card-title">E-commerce Platform</h3>
                    <p className="card-description">
                        Developed a scalable e-commerce solution with custom features and seamless payment gateway integrations for a retail client.
                    </p>
                </div>

                {/* Project Card 3 */}
                

                {/* Project Card 4 */}
                <div className="project-card">
                    
                    <h3 className="card-title">Mobile App UI/UX</h3>
                    <p className="card-description">
                        Designed an intuitive and user-friendly interface for a new mobile application, enhancing accessibility and visual appeal.
                    </p>
                </div>

                {/* Project Card 5 */}
                <div className="project-card">
                    
                    <h3 className="card-title">Content Management System</h3>
                    <p className="card-description">
                        Built a custom CMS for a media company, enabling efficient content creation, publishing, and audience management.
                    </p>
                </div>

                {/* Project Card 6 */}
                <div className="project-card">
                    
                    <h3 className="card-title">SEO & Analytics Dashboard</h3>
                    <p className="card-description">
                        Implemented advanced SEO strategies and developed a custom analytics dashboard to track website performance and conversions.
                    </p>
                </div>
            </div>

            <button className="start-project-button">
                VIEW ALL PROJECTS
            </button>
        </div>
    );
};

export default Project;

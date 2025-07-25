import React from 'react';
import './Services.css'; // Import the raw CSS file

const Services = () => {
    return (
        <div className="services-container">
            <p className="welcome-text">Welcome to BIZFUTURIX</p>
            <h1 className="agency-title">Digital Creative Agency</h1>
            <p className="agency-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <div className="cards-grid">
                {/* Service Card 1 */}
                <div className="service-card">
                    <div className="icon-circle">
                        {/* Icon placeholder */}
                    </div>
                    <h3 className="card-title1">Design</h3>
                    <p className="card-description">
                        We craft compelling visual identities through logo design, brand assets, and marketing materials. From social media content to posters and packaging, we deliver consistent, high-quality visuals that elevate your brand.
                    </p>
                </div>

                {/* Service Card 2 */}
                <div className="service-card">
                    <div className="icon-circle">
                        {/* Icon placeholder */}
                    </div>
                    <h3 className="card-title2">Web Development</h3>
                    <p className="card-description">
                        We build modern, scalable web applications using Django and React. From custom platforms to WordPress sites, we also integrate AI-powered chatbots and intelligent agents to automate support and enhance user experience.
                    </p>
                </div>

                {/* Service Card 3 */}
                <div className="service-card">
                    <div className="icon-circle">
                        {/* Icon placeholder */}
                    </div>
                    <h3 className="card-title3">Marketing</h3>
                    <p className="card-description">
                        We help brands grow through targeted digital strategies, including Instagram campaigns, paid advertising, and conversion optimization. Our approach is data-driven and focused on generating real business results.
                    </p>
                </div>
            </div>

            <button className="start-project-button">
                START A PROJECT
            </button>
        </div>
    );
};

export default Services; 
import React from 'react';
import './Services.css';

// ✅ Import SVGs
import DesignIcon from '../icons/design.svg';
import DevelopmentIcon from '../icons/development.svg';
import CodingIcon from '../icons/marketing.svg';

const Services = () => {
    return (
        <div className="services-container">
            <p className="welcome-text">Welcome to BIZFUTURIX</p>
            <h1 className="agency-title">Design & Advertising Agency</h1>
            <p className="agency-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <div className="cards-grid">
                {/* Design Card */}
                <div className="service-card">
                    <div className="icon-circle">
                        <img src={DesignIcon} alt="Design" className="icon-svg" />
                    </div>
                    <h3 className="card-title1">Design</h3>
                    <ul className="card-description">
                        <li>Logo design and brand identity</li>
                        <li>Social media graphics and posters</li>
                        <li>Marketing material and packaging</li>
                    </ul>
                </div>

                {/* Web Development Card */}
                <div className="service-card">
                    <div className="icon-circle">
                        <img src={DevelopmentIcon} alt="Development" className="icon-svg" />
                    </div>
                    <h3 className="card-title2">Web Development</h3>
                    <ul className="card-description2">
                        <li>Custom Django and React apps</li>
                        <li>WordPress and CMS solutions</li>
                        <li>AI-powered chatbot integration</li>
                    </ul>
                </div>

                {/* Marketing Card */}
                <div className="service-card">
                    <div className="icon-circle">
                        <img src={CodingIcon} alt="Marketing" className="icon-svg" />
                    </div>
                    <h3 className="card-title3">Marketing</h3>
                    <ul className="card-description">
                        <li>Instagram and paid ad campaigns</li>
                        <li>Conversion rate optimization</li>
                        <li>Analytics and insights</li>
                    </ul>
                </div>
            </div>

            <button className="start-project-button">
                Start a project
            </button>
        </div>
    );
};

export default Services;

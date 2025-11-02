import React from 'react';
import '../styles/Services.css';
import { Link } from 'react-router-dom';

import DesignIcon from '../icons/design.svg';
import DevelopmentIcon from '../icons/development.svg';
import CodingIcon from '../icons/marketing.svg';
import SaaSIcon from '../icons/saas.svg';
import EcommIcon from '../icons/purchase.svg';

import { useMediaQuery } from 'react-responsive';

const Services = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className="services-container">
            <p className="welcome-text">Welcome to BIZFUTURIX</p>
            <h1 className="agency-title">Design & Advertising <br /> Agency</h1>
            <p className="agency-description">
                Your creative partner for impactful design, branding, and advertising solutions.
            </p>

            {/* DESKTOP VIEW (3 cards) */}
            {!isMobile && (
                <div className="cards-grid">
                    <div className="service-card">
                        <div className="icon-circle">
                            <img src={DesignIcon} alt="Design" className="icon-svg" />
                        </div>
                        <h3 className="card-title1">Design</h3>
                        <ul className="card-description">
                            <li>Logo Design & Brand Identity</li>
                            <li>Social Media Graphics & Posters</li>
                            <li>Marketing Materials & Packaging</li>
                            <li>Visual Design for Digital & Print</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <div className="icon-circle">
                            <img src={DevelopmentIcon} alt="Development" className="icon-svg" />
                        </div>
                        <h3 className="card-title2">Web Development</h3>
                        <ul className="card-description2">
                            <li>Mobile-Friendly Website Design</li>
                            <li>Business Web Solutions</li>
                            <li>WordPress & CMS Solutions</li>
                            <li>AI-powered Chatbot Integration</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <div className="icon-circle">
                            <img src={CodingIcon} alt="Marketing" className="icon-svg" />
                        </div>
                        <h3 className="card-title3">Digital Marketing</h3>
                        <ul className="card-description">
                            <li>Instagram & Paid Ad Campaigns</li>
                            <li>Social Media Strategy & Growth</li>
                            <li>Conversion Rate Optimization</li>
                            <li>Analytics and Insights</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="icon-circle">
                            <img src={SaaSIcon} alt="Marketing" className="icon-svg" />
                        </div>
                        <h3 className="card-title4">SaaS App Development</h3>
                        <ul className="card-description4">
                            <li>Cloud-based SaaS solutions</li>
                            <li>Business automation tools</li>
                            <li>Secure API integrations</li>
                            <li>Subscription management</li>

                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="icon-circle">
                            <img src={EcommIcon} alt="Marketing" className="icon-svg" />
                        </div>
                        <h3 className="card-title5">E-commerce Solutions</h3>
                        <ul className="card-description4">
                            <li>Amazon, Walmart, eBay, Etsy</li>
                            <li>Inventory Management</li>
                            <li>Order Fulfillment</li>
                            <li>Listings & VA Support</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="icon-circle">
                            <img src={DevelopmentIcon} alt="Marketing" className="icon-svg" />
                        </div>
                        <h3 className="card-title6">3D Web Development</h3>
                        <ul className="card-description4">
                            <li>3D interactive websites</li>
                            <li>Virtual tour experiences</li>
                            <li>Custom 3D integration</li>
                            <li>Architectural 3D Visuals</li>
                        </ul>
                    </div>
                </div>
            )}

            {/* MOBILE VIEW (1 merged card) */}
            {isMobile && (
                <div className="single-service-card">
                    <h3 className="single-card-title">Our Services</h3>
                    <div className="single-icon-list">
                        <p className="sub-heading">Design</p>
                        <ul className="single-description">
                            <li>Logo Design & Brand Identity</li>
                            <li>Social Media Graphics & Posters</li>
                            <li>Marketing Materials & Packaging</li>
                            <li>Visual Design for Digital & Print</li>
                        </ul>

                        <p className="sub-heading">Web Development</p>
                        <ul className="single-description">
                            <li>Mobile-Friendly Website Design</li>
                            <li>Business Web Solutions</li>
                            <li>WordPress & CMS Solutions</li>
                            <li>AI-powered Chatbot Integration</li>
                        </ul>

                        <p className="sub-heading">Digital Marketing</p>
                        <ul className="single-description">
                            <li>Instagram & Paid Ad Campaigns</li>
                            <li>Social Media Strategy & Growth</li>
                            <li>Conversion Rate Optimization</li>
                            <li>Analytics and Insights</li>
                        </ul>
                        <p className="sub-heading">SaaS App Development</p>
                        <ul className="single-description">
                            <li>Cloud-based SaaS solutions</li>
                            <li>Business automation tools</li>
                            <li>Secure API integrations</li>
                            <li>Subscription management</li>
                        </ul>

                        <p className="sub-heading">E-commerce Solutions</p>
                        <ul className="single-description">
                            <li>Amazon, Walmart, eBay, Etsy</li>
                            <li>Inventory Management</li>
                            <li>Order Fulfillment</li>
                            <li>Listings & VA Support</li>

                            
                        </ul>

                        <p className="sub-heading">3D Web Development</p>
                        <ul className="single-description">
                            <li>3D interactive websites</li>
                            <li>Virtual tour experiences</li>
                            <li>Custom 3D integration</li>
                            <li>Architectural 3D Visuals</li>
                        </ul>

                    </div>
                </div>
            )}

            <Link to="/contact-us" className="start-project-button">
                Start a project
            </Link>
        </div>
    );
};

export default Services;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import facebookIcon from '../icons/fb.svg';
import instagramIcon from '../icons/insta.svg';
import pinterestIcon from '../icons/tw.svg';
import logo from '../icons/logo.svg';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

                {/* Left Section */}
                <div className="footer-section footer-left">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="contact-details">
                        <p><strong>Email:</strong> info@example.com</p>
                        <p><strong>Phone:</strong> +92 300 1234567</p>
                        <p><strong>Location:</strong> Lahore, Pakistan</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                            <img src={facebookIcon} alt="Facebook" className="social-icon-img-1" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                            <img src={instagramIcon} alt="Instagram" className="social-icon-img-1" />
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                            <img src={pinterestIcon} alt="Pinterest" className="social-icon-img-1" />
                        </a>
                    </div>
                </div>

                {/* Right Section - All in One */}
                <div className="footer-section footer-right">
    <div className="footer-card">
        <h3 className="section-title">Services</h3>
        <ul className="footer-links">
            <li><Link to="/">Manicure</Link></li>
            <li><Link to="/">Pedicure</Link></li>
            <li><Link to="/">Nail Art</Link></li>
            <li><Link to="/">Nail Extensions</Link></li>
            <li><Link to="/">Spa Treatments</Link></li>
        </ul>
    </div>

    <div className="footer-card">
        <h3 className="section-title">Learn</h3>
        <ul className="footer-links">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Reviews</Link></li>
        </ul>
    </div>

    <div className="footer-card">
        <h3 className="section-title help-support-title">Help & Support</h3>
        <ul className="footer-links">
            <li><Link to="/">30 Day Guarantee</Link></li>
            <li><Link to="/">Contact Us</Link></li>
        </ul>
    </div>
</div>


            </div>
        </footer>
    );
};

export default Footer;

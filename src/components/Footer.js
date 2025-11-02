import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

import facebookIcon from '../icons/fb.svg';
import instagramIcon from '../icons/insta.svg';
import pinterestIcon from '../icons/linkdin.svg';
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
                        <p><strong>Email:</strong> bizfuturix@gmail.com</p>
                        <p><strong>Phone:</strong> +40 758 577 624</p>
                        <p><strong>Location:</strong> Arad, Romania</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61575166431210" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                            <img src={facebookIcon} alt="Facebook" className="social-icon-img-1" />
                        </a>
                        <a href="https://www.instagram.com/bizfuturix/" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                            <img src={instagramIcon} alt="Instagram" className="social-icon-img-1" />
                        </a>
                        <a href="https://www.linkedin.com/company/bizfuturix" target="_blank" rel="noopener noreferrer" className="social-icon-1">
                            <img src={pinterestIcon} alt="Pinterest" className="social-icon-img-1" />
                        </a>
                    </div>
                </div>

                {/* Right Section - All in One */}
                <div className="footer-section footer-right">
    <div className="footer-card">
        <h3 className="section-title">Services</h3>
        <ul className="footer-links">
            <li><Link to="/">Design</Link></li>
            <li><Link to="/">Branding</Link></li>
            <li><Link to="/">Web Development</Link></li>
            <li><Link to="/">Social Media Marketing</Link></li>
            <li><Link to="/">AI Integration</Link></li>
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
            
            <li><Link to="/">Contact Us</Link></li>
        </ul>
    </div>
</div>


            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './ContactUs.css'; // Import the raw CSS file

// Import the background image for the left section
import contactUsBackground from '../assets/images/contactusbackground.png';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <div className="contact-content-wrapper">
                {/* Left Container: Image */}
                <div className="contact-left-section">
                    <img src={contactUsBackground} alt="Contact Phone" className="contact-background-image" />
                </div>

                {/* Right Container: Contact Form */}
                <div className="contact-right-section">
                    <h2 className="contact-heading">Need support?</h2>
                    <p className="contact-subtext">Contact us if you need further assistance</p>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name and surname</label>
                            <input type="text" id="name" name="name" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" id="email" name="email" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Please enter the details of you request</label>
                            <textarea id="message" name="message" className="form-input textarea"></textarea>
                        </div>
                        <button type="submit" className="contact-us-start-project-button">START A PROJECT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

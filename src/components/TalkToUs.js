import React from 'react';
import './TalkToUs.css'; // Import the raw CSS file

// Import the specific image for the heading
import talkToUsHeadingImage from '../assets/images/talktous.png'; 

const TalkToUs = () => {
    return (
        <div className="talk-to-us-container">
            <div className="talk-to-us-header">
                {/* Image for the "Talk to Us!" heading */}
                <img src={talkToUsHeadingImage} alt="Talk to Us!" className="talk-to-us-heading-image" />
            </div>
            <p className="talk-to-us-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" id="email" name="email" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" className="form-input textarea"></textarea>
                </div>
                <button type="submit" className="send-message-button">SEND MESSAGE</button>
            </form>
        </div>
    );
};

export default TalkToUs;

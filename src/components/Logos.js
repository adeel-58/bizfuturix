import React from 'react';
import '../styles/Logos.css'; // Import the raw CSS file

// Import the specific logo group image
import logoGroup from '../assets/images/Group 27@2x.png'; 

const Logos = () => {
    return (
        <div className="logos-section-container">
            <img src={logoGroup} alt="Client Logos Group" className="client-logos-image" />
        </div>
    );
};

export default Logos;

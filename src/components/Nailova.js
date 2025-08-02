// src/components/Nailova.js
import React from 'react';
import '../styles/Nailova.css';
import nailovaImage from '../assets/images/nailova.webp';

const Nailova = () => {
    return (
        <div className="nailova-container">
            <img src={nailovaImage} alt="Nailova project" className="nailova-image" />
        </div>
    );
};

export default Nailova;

// src/components/Nailova.js
import React from 'react';
import '../styles/Nooky.css';
import Nookyimage from '../assets/images/nooky.webp';

const NookyImage = () => {
    return (
        <div className="nailova-container">
            <img src={Nookyimage} alt="Nailova project" className="nailova-image" />
        </div>
    );
};

export default NookyImage;

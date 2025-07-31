// src/components/Nailova.js
import React from 'react';

import '../styles/Nailova.css';
import nailovaImage from '../assets/images/nailova.png';

const Nailova = () => {
    return (
        <div className="nailova-container">
            <img src={nailovaImage} alt="Nailova project preview" className="nailova-image" />
        </div>
    );
};

export default Nailova;

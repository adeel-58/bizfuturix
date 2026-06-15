// src/components/Nailova.js
import React from 'react';
import '../styles/TexasAC.css';
import TexasACimage from '../assets/images/texascentralac.webp';

const NookyImage = () => {
    return (
        <div className="texasAC-container">
            <img src={TexasACimage} alt="Nailova project" className="texasAC-image" />
        </div>
    );
};

export default NookyImage;

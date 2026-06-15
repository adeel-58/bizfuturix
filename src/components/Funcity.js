// src/components/Nailova.js
import React from 'react';
import '../styles/Nailova.css';
import funcityImage from '../assets/images/funcity.webp';

const Funcity = () => {
    return (
        <div className="nailova-container">
            <img src={funcityImage} alt="funcity project" className="nailova-image" />
        </div>
    );
};

export default Funcity;

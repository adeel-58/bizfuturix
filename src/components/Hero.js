import React from 'react';
import './Hero.css';
import backgroundImage from '../assets/images/herobackground.png';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="hero-content">
        <div class="orange-line-wrapper">
          <span className="orange-dot">●</span>
          <span className="orange-text">Hey there,</span><br />
          
        </div>
        <h1>
          looking for bold design<br />
          that works?
        </h1>
        <p>WE DESIGN. WE ADVERTISE. YOU GROW</p>
        <button className="read-more-btn">Read more</button>
      </div>
    </section>
  );
};

export default Hero;

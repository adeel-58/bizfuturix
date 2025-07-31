import React from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';

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
  <div className="orange-line-wrapper animated-text animate-delay-1">
    <span className="orange-text">Hey there,</span>
  </div>

  <h1 className="hero-heading animated-text animate-delay-2">
    looking for bold design that
  </h1>
  <h1 className="hero-heading animated-text animate-delay-3">
    works?
  </h1>

  <p className="hero-subtext animated-text animate-delay-4">
  WE DESIGN. WE ADVERTISE. YOU GROW
</p>
      
 <Link to="/about-us" className="read-more-btn animated-text animate-delay-5">
  Read more
</Link>

</div>
    </section>
  );
};

export default Hero;

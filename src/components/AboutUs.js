import React from 'react';
import './AboutUs.css';
import aboutUsBackground from '../assets/images/aboutusbackground.png';

const AboutUs = () => {
  return (
    <section className="aboutus-container">
      {/* Right-side background image */}
      <img src={aboutUsBackground} alt="About Us" className="aboutus-background" />

      {/* Left-aligned content */}
      <div className="aboutus-content">
        <h3 className="aboutus-subheading">Every brand has a story...</h3>
        <h1 className="aboutus-heading">We bring yours<br />to life.</h1>
        <p className="aboutus-paragraph">
          At Bizzfuturix, we craft smart, creative advertising that makes brands stand out and connect with people.
          We're a team of strategists, designers, and storytellers driven by one goal: to turn ideas into results.
          From branding to digital campaigns, we help businesses grow through clear vision, bold creativity, and
          future-ready strategies.
        </p>
        <p className="aboutus-cta">
          Let’s build the future of your brand — <span>together.</span>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

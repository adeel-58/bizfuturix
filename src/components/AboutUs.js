import React from 'react';
import '../styles/AboutUs.css';
import aboutUsBackground from '../assets/images/aboutusbackground.png';

const AboutUs = () => {
  return (
    <section className="aboutus-container">
      {/* Right-side background image */}
      <img src={aboutUsBackground} alt="About Us" className="aboutus-background" />

      {/* Left-aligned content */}
      <div className="aboutus-content">
        <h3 className="aboutus-subheading">Every brand has a story...</h3>
        <h1 className="aboutus-heading">We bring yours to life.</h1>
        <p className="aboutus-paragraph">
         At BizFuturix, we’re a design and advertising agency that helps brands stand out. We specialize in logo design, branding, web development, social media, packaging, and marketing campaigns that connect with your audience. We also build AI-powered agents and chatbots to elevate customer experience and automate engagement. Whether you're starting fresh or scaling up, we bring creative ideas and smart strategies to life, turning your vision into powerful visuals and real results.
        </p>
        <p className="aboutus-cta">
          Let’s shape the future of your brand <span>together.</span>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

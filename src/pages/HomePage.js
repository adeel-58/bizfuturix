// src/pages/HomePage.js
import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Hero';
import Services from '../components/Services';
import Project from '../components/Project';
import ClientLove from '../components/ClientLove';
import Logos from '../components/Logos';
import TalkToUs from '../components/TalkToUs';

const HomePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const servicesRef = useRef(null);
  const location = useLocation();

  // Scroll to services section if URL is /services
  useEffect(() => {
    if (location.pathname === '/services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>BizFuturix — Design & Advertising Agency</title>
        <meta name="description" content="BizFuturix is a Design and Advertising Agency offering professional web development, branding, and design services." />
        <meta name="keywords" content="BizFuturix, biz futurix,bizfuturix, Biz Futurix, digital agency, web development, design, branding, software company" />
        <meta name="author" content="BizFuturix Team" />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="BizFuturix — We Design. We Advertise. You Grow." />
        <meta property="og:description" content="Helping Brands Look Premium Online — Through Websites, Social Content & AI Agents That Convert" />
        <meta property="og:image" content="https://bizfuturix.com/og-image.png" />
        <meta property="og:url" content="https://bizfuturix.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BizFuturix | Design & Advertising Agency" />
        <meta name="twitter:description" content="We Help Brands Look Premium Online — Through Websites, Social Content & AI Agents That Convert." />
        <meta name="twitter:image" content="https://bizfuturix.com/og-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://bizfuturix.com/" />
      </Helmet>

      <Hero />
      <div ref={servicesRef}>
        <Services />
      </div>
      <Project />
      <ClientLove />
      {!isMobile && <Logos />}
      <TalkToUs />
    </>
  );
};

export default HomePage;

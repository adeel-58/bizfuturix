import React, { useState, useEffect } from 'react';
import './Header.css';

import logoWhite from '../icons/logo.svg';
import logoBlack from '../icons/blacklogo.svg';

import phoneIcon from '../icons/phone.svg';
import emailIcon from '../icons/email.svg';

import fbIcon from '../icons/fb.svg';
import instaIcon from '../icons/insta.svg';
import twIcon from '../icons/tw.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      {!scrolled && (
        <div className="header-top">
          <div className="contact-info">
            <img src={phoneIcon} alt="Phone" />
            <span>+40 758 577 624</span>
            <img src={emailIcon} alt="Email" />
            <span>bizfuturix@gmail.com</span>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={fbIcon} alt="Facebook" className="social-icon" />
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={instaIcon} alt="Instagram" className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={twIcon} alt="Twitter" className="social-icon" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      )}

      <div className="header-bottom">
        <img
          src={scrolled ? logoBlack : logoWhite}
          alt="Bizfuturix Logo"
          className="logo"
        />
        <div className="right-controls">
          <button className="project-btn">START A PROJECT</button>

          {/* Hamburger icon with animation */}
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>


      {menuOpen && (
        <div className="fullscreen-menu">
          <ul className="menu-list">
            <li><a href="http://localhost:3000/">HOME</a></li>
            <li><a href="/">PORTFOLIO</a></li>
            <li><a href="/">SERVICES</a></li>
            <li><a href="/">ABOUT US</a></li>
            <li><a href="/">BLOG</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;

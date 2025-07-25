import React, { useState, useEffect } from 'react';
import './Header.css';

import logoWhite from '../icons/logo.svg';
import logoBlack from '../icons/blacklogo.svg';

import phoneIcon from '../icons/phone.svg';
import emailIcon from '../icons/email.svg';

import hamburgerWhite from '../icons/hamburger.svg';
import hamburgerBlack from '../icons/blackhamburger.svg';
import fbIcon from '../icons/fb.svg';
import instaIcon from '../icons/insta.svg';
import twIcon from '../icons/tw.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
          <img
            src={scrolled ? hamburgerBlack : hamburgerWhite}
            alt="Menu"
            className="hamburger"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

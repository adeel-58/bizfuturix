import React, { useState, useEffect } from 'react';
import './Header.css';

import logoWhite from '../icons/logo.svg';
import logoBlack from '../icons/blacklogo.svg';
import menubackground from '../icons/menubackground.svg';

import phoneIcon from '../icons/phone.svg';
import emailIcon from '../icons/email.svg';

import fbIcon from '../icons/fb.svg';
import instaIcon from '../icons/insta.svg';
import twIcon from '../icons/tw.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'OUR PROJECTS', href: '/p' },
    { label: 'SERVICES', href: '/' },
    { label: 'ABOUT US', href: '/' },
    { label: 'CONTACT', href: '/' },
  ];

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
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className={activeItem === item.label ? 'active' : ''}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Add this logo image */}
          <img src={menubackground} alt="Logo" className="fullscreen-menu-logo" />
        </div>

      )}
    </header>
  );
};

export default Header;

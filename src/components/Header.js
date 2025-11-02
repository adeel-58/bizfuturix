import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

import logoWhite from '../icons/logo.svg';
import logoBlack from '../icons/blacklogo.svg';
import menubackground from '../icons/menubackground.svg';

import phoneIcon from '../icons/phone.svg';
import emailIcon from '../icons/email.svg';

import fbIcon from '../icons/fb.svg';
import instaIcon from '../icons/insta.svg';
import twIcon from '../icons/linkdin.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 🔄 Track active route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'PROJECTS', href: '/our-projects' },
    { label: 'SERVICES', href: '/services' },
    { label: 'ABOUT US', href: '/about-us' },
    { label: 'CONTACT', href: '/contact-us' },
  ];

  return (
    <header
      className={`header-container ${location.pathname === '/' ? (scrolled ? 'scrolled' : '') : 'scrolled'
        }`}
    >

      {location.pathname === '/' && !scrolled && (
        <div className="header-top">
          <div className="contact-info">
            <img src={phoneIcon} alt="Phone" />
            <span>+40 758 577 624</span>
            <img src={emailIcon} alt="Email" />
            <span>bizfuturix@gmail.com</span>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61575166431210" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={fbIcon} alt="Facebook" className="social-icon" />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/bizfuturix/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={instaIcon} alt="Instagram" className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/bizfuturix" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={twIcon} alt="Twitter" className="social-icon" />
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      )}

      <div className="header-bottom">
        <Link to="/">
          <img
            src={
              location.pathname === '/' && !scrolled
                ? logoWhite
                : logoBlack
            }
            alt="Bizfuturix Logo"
            className="logo"
          />

        </Link>
        <div className="right-controls">
          <Link to="/start-a-project">
            <button className="project-btn">START A PROJECT</button>
          </Link>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fullscreen-menu">
          <div class="menu-wrapper">
            <ul className="menu-list">
              {menuItems.map((item, index) => (
                <li
                  key={item.label}
                  className={location.pathname === item.href ? 'active' : ''}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <img src={menubackground} alt="Menu Background" className="fullscreen-menu-logo" />
          </div>

        </div>
      )}
    </header>
  );
};

export default Header;

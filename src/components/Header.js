import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Header.css';
import logo from '../icons/logo.svg';
import phoneIcon from '../icons/phone.svg';
import emailIcon from '../icons/email.svg';
import hamburgerIcon from '../icons/hamburger.svg';

const Header = () => {
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check if the vertical scroll position is greater than a threshold (e.g., 100px)
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]); // Re-run effect only if 'scrolled' state changes

  return (
    // Conditionally apply the 'scrolled' class based on the 'scrolled' state
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="contact-info">
          <img src={phoneIcon} alt="Phone" />
          <span>+40 758 577 624</span>
          <img src={emailIcon} alt="Email" />
          <span>bizfuturix@gmail.com</span>
        </div>
        <div className="social-links">
          <button>Facebook</button>
          <button>Instagram</button>
          <button>LinkedIn</button>
        </div>
      </div>

      <div className="header-bottom">
        <img src={logo} alt="Bizfuturix Logo" className="logo" />
        <div className="right-controls">
          <button className="project-btn">START A PROJECT</button>
          <img src={hamburgerIcon} alt="Menu" className="hamburger" />
        </div>
      </div>
    </header>
  );
};

export default Header;

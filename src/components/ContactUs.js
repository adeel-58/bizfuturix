import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/ContactUs.css';

import contactUsBackgroundphone from '../assets/images/contactusbackgroundphone.png';
import contactUsBackground from '../assets/images/contactusbackground.png';

const ContactUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e6a5844f-582c-46d9-ad96-2ff3831b7552");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setShowSuccess(true);

      // Hide after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);

      // Reset form
      event.target.reset();
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-content-wrapper">
        {!isMobile ? (
          <>
            <div className="contact-left-section">
              <img src={contactUsBackground} alt="Contact" className="contact-background-image" />
            </div>

            <div className="contact-right-section">
              <h2 className="contact-heading">Need support?</h2>
              <p className="contact-subtext">Contact us if you need further assistance</p>

              {showSuccess && (
                <div className="popup-notification">
                  Your message has been sent successfully!
                </div>
              )}

              <form onSubmit={onSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name and surname</label>
                  <input type="text" id="name" name="name" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" id="email" name="email" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Please enter the details of your request</label>
                  <textarea id="message" name="message" className="form-input textarea"></textarea>
                </div>
                <button type="submit" className="contact-us-start-project-button">START A PROJECT</button>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="mobile-header-wrapper">
              <div className="mobile-image-wrapper">
                <img src={contactUsBackgroundphone} alt="Contact Phone" className="mobile-contact-image" />
              </div>
              <div className="mobile-text-wrapper">
                <h2 className="contact-heading">Need support?</h2>
                <p className="contact-subtext">Contact us if you need<br /> further assistance</p>
              </div>
            </div>

            <div className="contact-right-section">
              {showSuccess && (
                <div className="popup-notification">
                  Your message has been sent successfully!
                </div>
              )}

              <form onSubmit={onSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name and surname</label>
                  <input type="text" id="name" name="name" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" id="email" name="email" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Please enter the details of your request</label>
                  <textarea id="message" name="message" className="form-input textarea"></textarea>
                </div>
                <button type="submit" className="contact-us-start-project-button">START A PROJECT</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

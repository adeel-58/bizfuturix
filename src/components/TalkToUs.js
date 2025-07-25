import React, { useEffect, useRef, useState } from 'react';
import './TalkToUs.css';

const TalkToUs = () => {
    const sectionRef = useRef(null);
    const [animateCircles, setAnimateCircles] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateCircles(true);
                    observer.unobserve(entry.target); // Run once
                }
            },
            { threshold: 0.08 } // Trigger when 50% is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="talk-to-us-container" ref={sectionRef}>
            <div className="talk-to-us-header">
                <div className={`overlapping-circles ${animateCircles ? 'animate-circles' : ''}`}>
                    <div className="circle circle1"></div>
                    <div className="circle circle2"></div>
                    <div className="circle circle3"></div>
                </div>
                <h2 className="talk-to-us-title">Talk to Us!</h2>
            </div>

            <p className="talk-to-us-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" id="email" name="email" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" className="form-input textarea"></textarea>
                </div>
                <button type="submit" className="send-message-button">Send message</button>
            </form>
        </div>
    );
};

export default TalkToUs;

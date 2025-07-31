import React, { useEffect, useRef, useState } from 'react';
import '../styles/TalkToUs.css';

const TalkToUs = () => {
    const sectionRef = useRef(null);
    const [animateCircles, setAnimateCircles] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateCircles(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.08 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

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
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
            event.target.reset();
        }
    };

    return (
        <div className="talk-to-us-container" ref={sectionRef}>
            {showNotification && (
                <div className="notification-banner">
                    Your message has been sent successfully!
                </div>
            )}

            <div className="talk-to-us-header">
                <div className={`overlapping-circles ${animateCircles ? 'animate-circles' : ''}`}>
                    <div className="circle circle1"></div>
                    <div className="circle circle2"></div>
                    <div className="circle circle3"></div>
                </div>
                <h2 className="talk-to-us-title">Talk to Us!</h2>
            </div>

            <p className="talk-to-us-description">
                Have a project in mind? Let’s bring it to life. we’re just a message away.
            </p>

            <form className="contact-form" onSubmit={onSubmit}>
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

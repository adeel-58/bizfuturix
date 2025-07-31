import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/ClientLove.css';

import logoNooky from '../assets/images/logo-nooky.svg';
import logoConstructors from '../assets/images/logo-constructors.svg';
import logoNailova from '../assets/images/logo-nailova.png';
import commaIcon from '../assets/images/comma-icon.svg';
import { Link } from 'react-router-dom';

const clientReviews = [
    {
        id: 1,
        name: "NovaFit Apparel",
        review: "They just got our vision. The logo, the vibe, everything felt right from day one",
        avatar: "https://placehold.co/60x60/FFFFFF/000000?text=N"
    },
    {
        id: 2,
        name: "Bloom Organics",
        review: "Our new website not only looks beautiful, it tells our story perfectly.",
        avatar: "https://placehold.co/60x60/FFFFFF/000000?text=B"
    },
    {
        id: 3,
        name: "TechNest Solutions",
        review: "Working with BizFuturix felt like having an in-house team. The results? Way beyond our expectations.",
        avatar: "https://placehold.co/60x60/FFFFFF/000000?text=T"
    },
];

const ClientLove = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className="clientlove-container">
            <div className="clientlove-content">
                {/* Left Section (keep original button hidden on mobile) */}
                <div className="left-section">
                    <img src={commaIcon} alt="Quote Icon" className="comma-icon" />
                    <h2 className="client-title">Clients Love</h2>
                    <p className="client-description">
                        Our clients don’t just work with us, they trust us, love the results, and keep coming back.
                    </p>

                    <div className="client-logos">
                        <img src={logoNooky} alt="Nooky Logo" className="client-logo" />
                        <img src={logoConstructors} alt="Constructors Logo" className="client-logo" />
                        <img src={logoNailova} alt="Nailova Logo" className="client-logo" />
                    </div>

                    {/* Desktop only */}
                    {!isMobile && (
                        <Link to="/contact-us" className="start-project-button2">Contact us</Link>
                        
                    )}
                </div>

                {/* Right Section - Reviews + Mobile button */}
                <div className="right-section">
                    {clientReviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <div className="avatar-circle">
                                    <img src={review.avatar} alt={review.name} className="avatar-img" />
                                </div>
                                <div className="reviewer-info">
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <p className="review-text-snippet">{review.review.substring(0, 50)}...</p>
                                </div>
                                <div className="quote-icon-right"></div>
                            </div>
                            <p className="full-review-text">{review.review}</p>
                        </div>
                    ))}

                    {/* Mobile only */}
                    {isMobile && (
                        <Link to="/contact-us"  className="start-project-button2 mobile-contact-button fixed-bottom-button">Contact us</Link>
                        
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientLove;

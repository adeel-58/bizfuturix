import React from 'react';
import './ClientLove.css';

import logoNooky from '../assets/images/logo-nooky.svg';
import logoConstructors from '../assets/images/logo-constructors.svg';
import logoNailova from '../assets/images/logo-nailova.png';
import commaIcon from '../assets/images/comma-icon.svg';

const clientReviews = [
    {
        id: 1,
        name: "Adeel",
        review: "Lorem Ipsum is simply dummy text of the printing",
        avatar: "https://placehold.co/60x60/FFFFFF/000000?text=A"
    },
    {
        id: 2,
        name: "Adeel",
        review: "Lorem Ipsum is simply dummy text of the printing",
        avatar: "https://placehold.co/60x60/FFFFFF/000000?text=A"
    },
    {
        id: 3,
        name: "Adeel",
        review: "Lorem Ipsum is simply dummy text of the printing",
        avatar: "https://placehold.co/60x60/FFFFFF/000000?text=A"
    },
];

const ClientLove = () => {
    return (
        <div className="clientlove-container">
            <div className="clientlove-content">
                {/* Left Section */}
                <div className="left-section">
                    <img src={commaIcon} alt="Quote Icon" className="comma-icon" />
                    <h2 className="client-title">Clients Love</h2>
                    <p className="client-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <div className="client-logos">
                        <img src={logoNooky} alt="Nooky Logo" className="client-logo" />
                        <img src={logoConstructors} alt="Constructors Logo" className="client-logo" />
                        <img src={logoNailova} alt="Nailova Logo" className="client-logo" />
                    </div>

                    <button className="start-project-button2">Contact us</button>
                </div>

                {/* Right Section - Client Reviews */}
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
                </div>
            </div>
        </div>
    );
};

export default ClientLove;

import React from 'react';
import './ClientLove.css'; // Import the raw CSS file

// Import the specific logo image
import logoNooky from '../assets/images/logo-nooky.png'; 

const ClientLove = () => {
    // Dummy client review data
    const clientReviews = [
        {
            id: 1,
            name: "Adeel",
            review: "Lorem Ipsum is simply dummy text of the printing",
            avatar: "https://placehold.co/60x60/FFFFFF/000000?text=A" // Placeholder for avatar
        },
        {
            id: 2,
            name: "Adeel",
            review: "Lorem Ipsum is simply dummy text of the printing",
            avatar: "https://placehold.co/60x60/FFFFFF/000000?text=A" // Placeholder for avatar
        },
        {
            id: 3,
            name: "Adeel",
           review: "Lorem Ipsum is simply dummy text of the printing",
            avatar: "https://placehold.co/60x60/FFFFFF/000000?text=A" // Placeholder for avatar
        },
    ];

    return (
        <div className="clientlove-container">
            <div className="clientlove-content">
                <div className="left-section">
                    {/* Only the logo image is present in the left section as requested */}
                    <img src={logoNooky} alt="Nooky Logo" className="single-client-logo" />
                </div>

                <div className="right-section">
                    {clientReviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <div className="avatar-circle">
                                    <img src={review.avatar} alt={review.name} className="avatar-img" />
                                </div>
                                <div className="reviewer-info">
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <p className="review-text-snippet">{review.review.substring(0, 50)}...</p> {/* Snippet */}
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

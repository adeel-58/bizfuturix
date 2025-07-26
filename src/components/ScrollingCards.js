import React from 'react';
import './ScrollingCards.css';

const ScrollingCardsVertical = () => {
    const dummyData = Array.from({ length: 6 }, (_, index) => ({
        title: `Card ${index + 1}`,
        description: `This is card number ${index + 1}`,
    }));

    return (
        <div className="vertical-scroll-wrapper">
            <div className="vertical-scroll-track">
                {[...dummyData, ...dummyData].map((item, index) => (
                    <div key={index} className="vertical-card">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingCardsVertical;

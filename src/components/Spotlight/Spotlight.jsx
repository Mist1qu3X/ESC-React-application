import React from 'react';
import './Spotlight.css';

const Spotlight = () => {
    const handleMore = () => {
        console.log('clicked: MORE');
    };

    const miniNews = [
        {
            img: '/img/mini-news-1.jpg',
            theme: 'FEATURES',
            text: 'Kováčová sets European record in air rifle qualification'
        },
        {
            img: '/img/news3.jpg',
            theme: 'INTERVIEW',
            text: "Champion's mindset: Behind the scenes with gold medalist"
        },
        {
            img: '/img/mini-news-2.jpg',
            theme: 'ANALYSIS',
            text: 'Technical breakdown: What makes a perfect 10.9 shot'
        },
        {
            img: '/img/mini-news-3.jpg',
            theme: 'DEVELOPMENT',
            text: 'New youth development program launches across Europe'
        }
    ];

    return (
        <section className="esc-spotlight">
            <div className="spotlight-naming">
                <p className="spotlight-title">ESC SPOTLIGHT</p>
                <div className="spotlight-line"></div>
                <div className="spotlight-spacer"></div>
                <button className="spotlight-more-btn" onClick={handleMore}>MORE →</button>
            </div>
            <div className="spotlight-container">
                {miniNews.map((item, index) => (
                    <div className="mini-news-container" key={index}>
                        <img src={item.img} alt={`mini-news-${index + 1}`} />
                        <div className="mini-news-content">
                            <p className="theme">{item.theme}</p>
                            <p className="text-info">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Spotlight;
import React from 'react';
import './Info.css';

const Info = () => {
    const handleViewEvent = () => {
        console.log('clicked: VIEW EVENT');
    };

    const handleAllEvents = () => {
        console.log('clicked: ALL EVENTS');
    };

    const newsCards = [
        {
            className: 'news-card-1',
            title: 'CHAMPIONSHIP',
            excerpt: 'Youth League Regional Round closes with record entries'
        },
        {
            className: 'news-card-2',
            title: 'OFFICIAL',
            excerpt: 'ESC confirms 2026 championship calendar framework'
        },
        {
            className: 'news-card-3',
            title: 'RESULTS',
            excerpt: 'European record set in qualifying — Prague preview'
        }
    ];

    return (
        <section className="info">
            <div className="info-content">
                <p className="nameing">
                    EUROPEAN<br />
                    CHAMPIONSHIP<br />
                    10M AIR<br />
                    WEAPONS
                </p>

                <div className="event-details">
                    <div className="location-wrapper">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="location">Prague, Czech Republic</p>
                    </div>
                    <div className="date-wrapper">
                        <i className="fa-regular fa-calendar"></i>
                        <p className="date">Nov 12-18, 2026</p>
                    </div>
                </div>

                <div className="buttons-wrapper">
                    <button className="btn-view-event" onClick={handleViewEvent}>
                        VIEW EVENT &gt;
                    </button>
                    <button className="btn-all-events" onClick={handleAllEvents}>
                        ALL EVENTS
                    </button>
                </div>
            </div>

            <div className="news-content">
                <div className="news-container">
                    {newsCards.map((card, index) => (
                        <div 
                            key={index} 
                            className={`news-card ${card.className}`}
                        >
                            <h4 className="news-title">{card.title}</h4>
                            <p className="news-excerpt">{card.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Info;
import React from 'react';
import './LatestFromEsc.css';

const LatestFromEsc = () => {
    const handleMore = () => {
        console.log('clicked: MORE');
    };

    const news = [
        {
            img: '/img/news3.jpg',
            theme: 'OFFICIAL',
            description: 'ESC CONFIRMS FRAMEWORK FOR 2026 CHAMPIONSHIP CALENDAR',
            date: 'Apr 18'
        },
        {
            img: '/img/news2.png',
            theme: 'EVENTS',
            description: 'YOUTH LEAGUE REGIONAL ROUND CONCLUDES IN BUDAPEST',
            date: 'Apr 6'
        },
        {
            img: '/img/news1.jpg',
            theme: 'EDUCATION',
            description: 'TECHNICAL OFFICIALS SEMINAR OPENS AUTUMN REGISTRATION',
            date: 'Mar 30'
        },
        {
            img: '/img/news4.jpg',
            theme: 'SUSTAINABILITY',
            description: 'NEW SUSTAINABILITY GUIDELINES PUBLISHED FOR ESC EVENTS',
            date: 'Mar 22'
        }
    ];

    return (
        <section className="lastest-from-esc">
            <div className="section-naming">
                <p className="section-title">LATEST FROM ESC</p>
                <div className="section-line"></div>
                <div className="section-spacer"></div>
                <button className="more-btn" onClick={handleMore}>MORE &gt;</button>
            </div>
            <div className="lastest-news-container">
                {news.map((item, index) => (
                    <div className="news" key={index}>
                        <img src={item.img} alt={`news-${index + 1}`} />
                        <p className="theme">{item.theme}</p>
                        <p className="description">{item.description}</p>
                        <p className="date">{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestFromEsc;
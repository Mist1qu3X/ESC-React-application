import React, { useState, useEffect } from 'react';
import './FullInfo.css';

const FullInfo = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 198,
        hours: 14,
        minutes: 32
    });

    useEffect(() => {
        const targetDate = new Date('2026-11-12T00:00:00');
        
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;
            
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                
                setTimeLeft({ days, hours, minutes });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleEventInfo = () => {
        console.log('clicked: EVENT INFO');
    };

    const handleEntrySystem = () => {
        console.log('clicked: ENTRY SYSTEM');
    };

    const handleAllEvents = () => {
        console.log('clicked: ALL EVENTS');
    };

    const handleFull = () => {
        console.log('clicked: FULL');
    };

    const upcomingEvents = [
        { date: '12', month: 'NOV', name: 'European Championship 10m', location: 'Prague, CZE' },
        { date: '22', month: 'JUN', name: 'Coaches & Official course', location: 'Munich, GER' },
        { date: '3', month: 'SEP', name: 'Youth League Final', location: 'Bologna, ITA' }
    ];

    const rankingData = [
        { rank: 1, name: 'A. Kovářová', country: 'CZE', points: '1,240', isFirst: true },
        { rank: 2, name: 'M. BECKER', country: 'GER', points: '1,187', isFirst: false },
        { rank: 3, name: 'S. HANSEN', country: 'CZE', points: '1,155', isFirst: false },
        { rank: 4, name: 'E. ROSSI', country: 'ITA', points: '1,134', isFirst: false },
        { rank: 5, name: 'H. Novotná', country: 'SVK', points: '1,118', isFirst: false }
    ];

    return (
        <section className="full-info">
            <div className="full-info-content">
                <div className="wrapper">
                    {/* PART 1 */}
                    <div className="part1">
                        <div className="part-top">
                            <p className="theme1">WHAT'S ON</p>
                            <p className="title1">EUROPEAN CHAMPIONSHIP</p>
                            <div>
                                <span className="card-text1">10m Air Weapons</span>
                                <span className="point">•</span>
                                <span className="card-text1">Prague</span>
                            </div>
                        </div>
                        <div className="part-bottom">
                            <p className="theme1">STARTS IN</p>
                            <div className="countdown-timer">
                                <div className="time-block">
                                    <span className="time-number">{String(timeLeft.days).padStart(3, '0')}</span>
                                    <span className="time-label">DAYS</span>
                                </div>
                                <div className="time-block">
                                    <span className="time-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                                    <span className="time-label">HRS</span>
                                </div>
                                <div className="time-block">
                                    <span className="time-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <span className="time-label">MIN</span>
                                </div>
                            </div>
                            <button className="event-info-btn" onClick={handleEventInfo}>
                                EVENT INFO &gt;
                            </button>
                        </div>
                    </div>

                    {/* PART 2 */}
                    <div className="part2">
                        <div className="part-top">
                            <p className="theme2">ESC PLATFORM</p>
                            <p className="title2">GET CLOSER<br /> TO THE ACTION</p>
                            <p className="card-text2">
                                Access live results, rankings, and event documents all in one place.
                            </p>
                        </div>
                        <div className="part-bottom">
                            <button className="entry-system-btn" onClick={handleEntrySystem}>
                                ENTRY SYSTEM &gt;
                            </button>
                        </div>
                    </div>

                    {/* PART 3 */}
                    <div className="part3">
                        <div className="all-event-item">
                            <h4>UPCOMING EVENTS</h4>
                            {upcomingEvents.map((event, index) => (
                                <div className="event-item" key={index}>
                                    <div className="event-left">
                                        <div className="event-date-block">
                                            <span className="event-date">{event.date}</span>
                                            <span className="event-month">{event.month}</span>
                                        </div>
                                        <div className="event-details">
                                            <span className="event-name">{event.name}</span>
                                            <div className="geolocation">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>{event.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="status">UPCOMING</span>
                                </div>
                            ))}
                        </div>
                        <button className="all-events-btn" onClick={handleAllEvents}>
                            ALL EVENTS &gt;
                        </button>
                    </div>

                    {/* PART 4 */}
                    <div className="part4">
                        <div className="ranking-header">
                            <h4>ESC RANKING</h4>
                            <button className="go-to-full" onClick={handleFull}>FULL &gt;</button>
                        </div>
                        <p className="description">10M AIR RIFLE W</p>
                        <div className="ranking-list">
                            {rankingData.map((item, index) => (
                                <div 
                                    className={`ranking-item ${item.isFirst ? 'first-place' : ''}`} 
                                    key={index}
                                >
                                    <div className="rank-info">
                                        <span className="rank">{item.rank}</span>
                                        <div className="athlete-info">
                                            <span className="name">{item.name}</span>
                                            <span className="country">{item.country}</span>
                                        </div>
                                    </div>
                                    <span className="points">{item.points}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FullInfo;
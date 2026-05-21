import React from 'react';
import './MustSeeAction.css';

const MustSeeAction = () => {
    const handleMore = () => {
        console.log('clicked: MORE');
    };

    const handleWatch = (videoNumber) => {
        console.log(`clicked: WATCH ${videoNumber}`);
    };

    const videos = [
        {
            number: '01',
            img: '/img/news3.jpg',
            title: 'CHAMPIONSHIP',
            text: 'Kováčová & Hansen rally in dramatic Prague final rounds'
        },
        {
            number: '02',
            img: '/img/video-1.png',
            title: 'WORLD CUP',
            text: 'AMERICAN DEBUT PAIR STUN IN 10M AIR PISTOL MIXED'
        },
        {
            number: '03',
            img: '/img/mini-news-2.jpg',
            title: 'WORLD CUP',
            text: 'Schläfer claims comeback win at European Development Workshop'
        }
    ];

    return (
        <section className="must-see-action">
            <div className="action-naming">
                <p className="action-title">MUST-SEE ACTION</p>
                <div className="action-line"></div>
                <div className="action-spacer"></div>
                <button className="action-more-btn" onClick={handleMore}>MORE &gt;</button>
            </div>
            <div className="action-container">
                {videos.map((video, index) => (
                    <div className="video-container" key={index}>
                        <p className="number-video">{video.number}</p>
                        <div className="video-image-wrapper">
                            <img src={video.img} alt={`video-${index + 1}`} />
                            <div className="play-icon">
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </div>
                        <div className="video-info">
                            <p className="title-video">{video.title}</p>
                            <p className="text-information">{video.text}</p>
                        </div>
                        <button 
                            className="watch-btn" 
                            onClick={() => handleWatch(video.number)}
                        >
                            WATCH &gt;
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MustSeeAction;
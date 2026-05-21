import React from 'react';
import './Ad.css';

const Ad = () => {
    return (
        <section className="ad">
            <div className="ad-divider"></div>
            <div className="ad-content">
                <div className="sponsors">
                    <p className="name-sponsors">SPONSORS</p>
                    <div className="sponsors-logos">
                        <img src="/img/sponsors-1.png" alt="sponsors-1" />
                        <img src="/img/sponsors-2.png" alt="sponsors-2" />
                        <img src="/img/sponsors-3.png" alt="sponsors-3" />
                    </div>
                </div>
                <div className="partners">
                    <p className="name-partners">PARTNERS</p>
                    <div className="partners-logos">
                        <img src="/img/partners-1.png" alt="partners-1" />
                        <img src="/img/partners-2.png" alt="partners-2" />
                        <img src="/img/partners-3.png" alt="partners-3" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ad;
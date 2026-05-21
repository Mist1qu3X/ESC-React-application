import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const navItems = ['Home', 'About Us', 'Calendar', 'Results & Ranking', 'Documents', 'Media', 'Contacts'];

    return (
        <header className='header'>
            <a href='#' className='logospace'>
                <img src='/img/logo.jpeg' alt='ESC Logo' />
                <h1>ESC</h1>
            </a>
            <nav className='navigation'>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className={activeTab === index ? 'active' : ''} onClick={() => setActiveTab(index)}>
                            <a href='#'>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='search-bar-container'>
                <div className={'search-wrapper ' + (isSearchActive ? 'active' : '')}>
                    <i className='fa-solid fa-magnifying-glass search-icon' onClick={() => setIsSearchActive(!isSearchActive)}></i>
                    <input type='text' className='search-input' placeholder='Search events, news...' onKeyDown={(e) => e.key === 'Escape' && setIsSearchActive(false)} />
                </div>
                <button className='search-input-button' onClick={() => console.log('clicked: ENTRY SYSTEM')}>ENTRY SYSTEM 🡥</button>
            </div>
        </header>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        'Home',
        'About Us',
        'Calendar',
        'Results & Ranking',
        'Documents',
        'Media',
        'Contacts'
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            const searchWrapper = document.querySelector('.search-wrapper');
            const searchIcon = document.querySelector('.search-icon');
            if (searchWrapper && !searchWrapper.contains(e.target) && 
                searchIcon && !searchIcon.contains(e.target)) {
                setIsSearchActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleSearchToggle = () => {
        setIsSearchActive(!isSearchActive);
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsSearchActive(false);
        }
    };

    const handleNavClick = (index) => {
        setActiveTab(index);
        setIsMobileMenuOpen(false);
    };

    const handleEntrySystem = () => {
        console.log('clicked: ENTRY SYSTEM');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="header">
                <a href="#" className="logospace">
                    <img src="/img/logo.svg" alt="ESC Logo" />
                    <h1>ESC</h1>
                    <span className="full-title">European Shooting Confederation</span>
                </a>

                <nav className="navigation">
                    <ul>
                        {navItems.map((item, index) => (
                            <li 
                                key={index} 
                                className={activeTab === index ? 'active' : ''}
                                onClick={() => handleNavClick(index)}
                            >
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="search-bar-container">
                    <div className={`search-wrapper ${isSearchActive ? 'active' : ''}`}>
                        <i 
                            className="fa-solid fa-magnifying-glass search-icon"
                            onClick={handleSearchToggle}
                        ></i>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search..."
                            onKeyDown={handleSearchKeyDown}
                        />
                    </div>
                    <button className="search-input-button" onClick={handleEntrySystem}>
                        ENTRY SYSTEM<span className="arrow">🡥</span>
                    </button>
                    <button className="burger-menu" onClick={toggleMobileMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </header>

            <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul>
                    {navItems.map((item, index) => (
                        <li 
                            key={index} 
                            className={activeTab === index ? 'active' : ''}
                            onClick={() => handleNavClick(index)}
                        >
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Header;
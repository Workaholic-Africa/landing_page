import React from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo Section */}
                <Link to="/" className="logo-section">
                    <div className="logo-icon">
                        <span>W</span>
                    </div>
                    <div className="logo-text">
                        Workaholic<span className="logo-dot"></span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/404">Location</Link>
                    <Link to="/404">Mission</Link>
                    <Link to="/404">About</Link>
                    <Link to="/404">Contact</Link>
                </nav>

                {/* Action Section */}
                <div className="action-section">
                    <div className="nav-search-wrapper">
                        <Search size={14} className="nav-search-icon" />
                        <input type="text" placeholder="Search" className="nav-search-input" />
                    </div>

                    <div className="location-selectors">
                        <span className="loc-option" onClick={() => navigate('/404')}>NG</span>
                        <span className="loc-option active" onClick={() => navigate('/404')}>ID</span>
                    </div>

                    <button className="menu-btn" onClick={() => navigate('/404')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="10" x2="20" y2="10" />
                            <line x1="12" y1="16" x2="20" y2="16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

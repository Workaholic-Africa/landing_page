import React from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo Section */}
                <Link to="/" className="logo-section">
                    <img src="/images/logofile.png" alt="Workaholic" className="logo-image" />
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

                    <button className="menu-btn" onClick={toggleMobileMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="10" x2="20" y2="10" />
                            <line x1="12" y1="16" x2="20" y2="16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>

            {/* Mobile Menu Sidebar */}
            <div className={`mobile-menu-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <img src="/images/logofile.png" alt="Workaholic" className="mobile-logo-image" />
                    <button className="close-menu-btn" onClick={toggleMobileMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <nav className="mobile-nav-links">
                    <Link to="/" onClick={toggleMobileMenu}>Home</Link>
                    <Link to="/404" onClick={toggleMobileMenu}>Location</Link>
                    <Link to="/404" onClick={toggleMobileMenu}>Mission</Link>
                    <Link to="/404" onClick={toggleMobileMenu}>About</Link>
                    <Link to="/404" onClick={toggleMobileMenu}>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

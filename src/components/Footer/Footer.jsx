import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Background large text */}
            <div className="footer-bg-text">Workaholic.</div>

            <div className="footer-container">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <img src="/images/logo_02.png" alt="Workaholic" className="footer-logo-img" />
                    </Link>
                    <p className="footer-mission">
                        Redefining how the world works, starting with Nigeria.<br />
                        Join our mission to build a more flexible future.
                    </p>
                </div>

                <div className="footer-col links-col">
                    <ul className="social-links">
                        <li><a href="https://www.linkedin.com/company/112089948/admin/dashboard/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://web.facebook.com/profile.php?id=61587841761666" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com/workaholicafrica/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://x.com/workaholicng?s=11" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.tiktok.com/@workaholicafrica?_r=1&_t=ZS-93zqANCio5J" target="_blank" rel="noopener noreferrer">Tiktok</a></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4 className="contact-heading">Contact</h4>
                    <Link to="/404" className="contact-email">
                        Info@workaholicafrica.com
                    </Link>
                    <div className="contact-phones">
                        <p>(+234) 816 262 3178</p>
                        <p>(+234) 812 068 5092</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

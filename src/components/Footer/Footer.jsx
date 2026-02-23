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
                    <div className="footer-logo">
                        Workaholic<span className="logo-dot"></span>
                    </div>
                    <p className="footer-mission">
                        Redefining how the world works, starting with Nigeria.<br />
                        Join our mission to build a more flexible future.
                    </p>
                </div>

                <div className="footer-col links-col">
                    <ul className="social-links">
                        <li><Link to="/404">LinkedIn</Link></li>
                        <li><Link to="/404">Facebook</Link></li>
                        <li><Link to="/404">Instagram</Link></li>
                        <li><Link to="/404">Twitter</Link></li>
                        <li><Link to="/404">Tiktok</Link></li>
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

import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-container">
                <h1 className="headline">
                    Experience <span className="italic">the future</span>
                    <br />
                    <span style={{ marginRight: '-10px' }}>of</span> <span className="highlight">Productivity</span>
                </h1>

                <p className="subhead">
                    Join the waitlist and be among the first to access the easiest way to book workspaces in your city.
                </p>

                <div className="search-bar-wrapper">
                    <div className="search-bar">
                        <div className="search-input-group">
                            <div className="search-icon-circle" onClick={() => navigate('/404')} style={{ cursor: 'pointer' }}>
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Location or keyword"
                                className="search-input"
                            />
                        </div>

                        <button className="state-selector" onClick={() => navigate('/404')}>
                            Any state
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

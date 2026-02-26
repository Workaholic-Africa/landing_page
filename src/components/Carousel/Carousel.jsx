import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

const Carousel = () => {
    const navigate = useNavigate();
    // Using generic placeholder URLs that we can style to look like the mock
    // In the real app, these would be the actual image assets
    const images = [
        { id: 1, src: '/images/tower.png', type: 'bw' },
        { id: 2, src: '/images/dome.png', type: 'bw' },
        { id: 3, src: '/images/ferrris.png', type: 'color' }, // the middle one is colored
        { id: 4, src: '/images/street.png', type: 'bw' },
        { id: 5, src: '/images/eifel.png', type: 'bw' },
    ];

    return (
        <section className="carousel-section">
            <div className="carousel-container">
                <div className="carousel-track">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className={`carousel-item ${img.type === 'color' ? 'active-color' : ''}`}
                        >
                            <img src={img.src} alt="Location highlight" className="carousel-image" />
                        </div>
                    ))}
                </div>

                <div className="cta-group">
                    <button className="btn cta-btn cta-dark" onClick={() => window.open('https://waitlist.workaholicafrica.com', '_blank', 'noopener,noreferrer')}>Join Waitlist</button>
                    <button className="btn cta-btn cta-primary" onClick={() => navigate('/404')}>Subscribe Now</button>
                </div>
            </div>
        </section>
    );
};

export default Carousel;

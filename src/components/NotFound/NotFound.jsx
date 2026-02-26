import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="not-found-container">
                <h1 className="not-found-title">ewo</h1>
                <h2 className="not-found-heading">Page Not Found!!</h2>
                <p className="not-found-text">We are still cooking, check back later.</p>
                <Link to="/" className="btn not-found-btn">Back to home</Link>
            </div>
        </section>
    );
};

export default NotFound;

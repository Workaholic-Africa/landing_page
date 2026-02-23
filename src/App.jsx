import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import './index.css';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Carousel />
                        </>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;

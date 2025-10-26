// src/components/HeroSection.jsx
import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
    return (
        // The main container with the red background and complex shape
        <header className={styles.heroHeader}>
            <div className={styles.container}>
                {/* -------------------- Navigation Bar -------------------- */}
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        {/* Placeholder for the AppCoders logo image/SVG */}
                        <span className={styles.logoIcon}>A</span>ppcoders <span className={styles.inc}>Inc.</span>
                    </div>
                    <div className={styles.navLinks}>
                        <a href="#home" className={styles.navLink}>HOME</a>
                        <a href="#about" className={styles.navLink}>About</a>
                        <a href="#services" className={styles.navLink}>Services</a>
                        <a href="#whychooseus" className={styles.navLink}>Why Choose Us</a>
                        <a href="#portfolio" className={styles.navLink}>Portfolio</a>
                        <a href="#products" className={styles.navLink}>Products</a>
                        <a href="#testimonial" className={styles.navLink}>Testimonial</a>
                        <a href="#technologies" className={styles.navLink}>Technologies</a>
                        <a href="#contact" className={styles.navLink}>Contact</a>
                    </div>
                    <a href="tel:+18008369018" className={styles.contactButton}>
                        +1 (800) 836-9018
                    </a>
                </nav>

                {/* -------------------- Hero Content Area -------------------- */}
                <div className={styles.heroContent}>
                    
                    {/* Left Side: Mobile Mockups */}
                    <div className={styles.mockupContainer}>
                        {/* Smaller, tilted mockup (Calendar app) */}
                        <div className={`${styles.phoneMockup} ${styles.backPhone}`}>
                            <div className={styles.screenContent}>
                                <div className={styles.calendarApp}>
                                    <div className={styles.appHeader}>
                                        <div className={styles.schedule}>Schedule</div>
                                        <div className={styles.dailyStandup}>Daily stand-up</div>
                                    </div>
                                    <div className={styles.calendarPlaceholder}>Calendar</div>
                                </div>
                            </div>
                        </div>

                        {/* Main, front-facing mockup (Daily List app) */}
                        <div className={`${styles.phoneMockup} ${styles.frontPhone}`}>
                            <div className={styles.screenContent}>
                                <div className={styles.dailyListApp}>
                                    <h3 className={styles.dailyListTitle}>Daily List</h3>
                                    <div className={styles.dayTabs}>
                                        {['M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                            <span 
                                                key={index} 
                                                className={index === 2 ? styles.activeDay : ''}
                                            >
                                                {day}
                                                <span className={styles.dayDate}> {19 + index}</span>
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.card}>
                                        <p className={styles.time}>9:00 - 9:30 AM</p>
                                        <p className={styles.task}>Daily standup</p>
                                        <div className={styles.avatars}>
                                            <span className={styles.avatar}>A</span>
                                            <span className={styles.avatar}>B</span>
                                            <span className={styles.avatar}>C</span>
                                        </div>
                                    </div>
                                    {/* Additional cards would follow the same pattern... */}
                                </div>
                            </div>
                            <div className={styles.homeIndicator}></div>
                        </div>
                    </div>

                    {/* Right Side: Text and CTA */}
                    <div className={styles.textBlock}>
                        <h1 className={styles.heroTitle}>
                            Leading the Way in App <br/> Development Innovation
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
                        </p>
                        <button className={styles.ctaButton}>
                            GET A FREE QUOTE
                        </button>

                        {/* Navigation Arrows */}
                        <div className={styles.sliderControls}>
                            <button className={styles.arrowButton}>&larr;</button>
                            <button className={styles.arrowButton}>&rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
import React from 'react';
import styles from '../styles/HeaderHero.module.css';

const HeaderHero = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <button className={styles.signInButton}>
          Sign In
        </button>
      </nav>

      <div className={styles.heroContent}>
        <div className={styles.textBlock}>
          <h1 className={styles.heroTitle}>
            Scaling your <span className={styles.highlight}>business to the max</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <form className={styles.emailForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button
              type="submit"
              className={styles.submitButton}
            >
              Start Free
            </button>
          </form>
        </div>

        <div className={styles.imageBlock}>
          <div className={styles.mobileMockup}>
            <span>Mobile UI Mockup [App Interface]</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
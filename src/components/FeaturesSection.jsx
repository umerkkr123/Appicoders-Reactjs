// src/components/FeaturesSection.jsx
import React from 'react';
import styles from '../styles/FeaturesSection.module.css';

// Simple component for icon placeholder
const IconPlaceholder = ({ children }) => (
  <div className={styles.icon}>{children}</div>
);

const features = [
  { icon: '🚀', title: 'Fast Performance', description: 'Experience blazing-fast load times and smooth operations.' },
  { icon: '🔒', title: 'Secure Platform', description: 'Your data is protected with industry-leading encryption.' },
  { icon: '💡', title: 'Intuitive Design', description: 'Easy-to-use interface makes navigation a breeze.' },
];

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.featureCard}
            >
              <IconPlaceholder>{feature.icon}</IconPlaceholder>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
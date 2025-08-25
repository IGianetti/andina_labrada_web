import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Arte en Metal, Inspiración en la Tierra
        </h1>
        <p className={styles.heroSubtitle}>
          Cada pieza cuenta una historia forjada a mano con pasión, tradición y el espíritu de la orfebrería andina.
        </p>
        <Link to="/gallery" className={styles.heroButton}>
          Explora la Colección
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
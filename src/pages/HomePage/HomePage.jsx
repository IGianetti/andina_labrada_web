import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection'; 
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <section className={styles.homeContainer}>
      <HeroSection />
      {/* Aquí podríamos agregar más secciones como productos destacados */}
    </section>
  );
}

export default HomePage;
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { db } from '../../firebase/firebase'; 
import { doc, getDoc } from "firebase/firestore"; 

import styles from './Header.module.css';

function Header() {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchLogoUrl = async () => {
      try {
        const docRef = doc(db, "configuracion", "logo");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLogoUrl(docSnap.data().urlLogo); 
        } else {
          console.log("No se encontró el documento del logo en Firestore.");
        }
      } catch (error) {
        console.error("Error al obtener el logo desde Firestore: ", error);
      }
    };

    fetchLogoUrl();
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/">
        {logoUrl ? (
          <img src={logoUrl} alt="Andina Labrada Orfebrería" className={styles.logo} />
        ) : (
          <p>Cargando logo...</p>
        )}
        <h2 className={styles.logoTextMobile}>Andina Labrada</h2>
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
          Inicio
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
          Sobre Mí
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
          Galería
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
          Servicios
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getConfig } from '../../services/firebaseService';
import styles from './Header.module.css';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [mostrarServicios, setMostrarServicios] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');
  const [headerBgImage, setHeaderBgImage] = useState('');

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const fetchConfiguracion = async () => {
      try {
        const [logoData, navegacionData] = await Promise.all([
          getConfig("logo"),
          getConfig("navegacion")
        ]);

        if (logoData) {
          setLogoUrl(logoData.urlLogo);
        }
        if (navegacionData) {
          setMostrarServicios(navegacionData.mostrarServicios);
          setHeaderBgImage(navegacionData.headerBgImage || '');
        }
      } catch (error) {
        console.error("Error al obtener la configuración:", error);
      }
    };
    fetchConfiguracion();
  }, []);

  return (
    <header
      className={styles.header}
      style={headerBgImage ? { backgroundImage: `url(${headerBgImage})` } : {}}
    >
      {/* Nueva capa de vidrio */}
      <div className={styles.headerGlassLayer}>
        {/* Contenido del Header (Logo, Menú, etc.) */}
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link to="/">
              {logoUrl ? (
                <img src={logoUrl} alt="Andina Labrada Logo" className={styles.logo} />
              ) : (
                <span>Andina Labrada</span>
              )}
            </Link>
          </div>

          {/* Botón del Menú Hamburguesa */}
          <div className={styles.menuIcon} onClick={toggleNav}>
            {navOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navegación */}
          <nav className={`${styles.nav} ${navOpen ? styles.navOpen : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleNav}>Inicio</Link></li>
              <li><Link to="/gallery" onClick={toggleNav}>Galería</Link></li>
              {mostrarServicios && (
                <li><Link to="/services" onClick={toggleNav}>Servicios</Link></li>
              )}
              <li><Link to="/about" onClick={toggleNav}>Sobre Mí</Link></li>
              <li><Link to="/contact" onClick={toggleNav}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';


function Footer() {
 
  const currentYear = new Date().getFullYear();



  return (
    <footer className={styles.footer}>
      {/* Primera parte del Footer */}
      <div className={styles.footerTop}>
        {/* Navegación */}
        <div className={styles.footerSection}>
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/gallery">Galería</Link></li>
            <li><Link to="/about">Sobre Mí</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className={styles.footerSection}>
          <h4>Contacto</h4>
          <p><FaMapMarkerAlt /> Dirección: Av. Bruix, Ciudad Autonoma de Buenos Aires</p>
          <p><FaPhone /> Teléfono: 155444444</p>
          <p><FaEnvelope /> Email: andinalabrada@gmail.com</p>
        </div>

        {/* Redes Sociales */}
        <div className={styles.footerSection}>
          <h4>Redes Sociales</h4>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/andinalabrada/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@andinalabrada" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/channel/tu_canal_youtube" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaYoutube />
            </a>
          </div>
        </div> 
      </div>

      {/* Segunda parte del Footer */}
      <div className={styles.footerBottom}>
        <p>Creado por IGianetti</p>
        <p>&copy; {currentYear} Andina Labrada. Todos los derechos reservados.</p>
        <p>Defensa de las y los consumidores. <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank" rel="noopener noreferrer">Para reclamos ingresá acá.</a></p>
      </div>
    </footer>
  );
}

export default Footer;
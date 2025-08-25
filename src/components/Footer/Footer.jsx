import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
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
      <p className={styles.copyright}>© {new Date().getFullYear()} Karina Orfebrería. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
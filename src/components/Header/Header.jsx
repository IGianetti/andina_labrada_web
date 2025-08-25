import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '/images/andina-logo.png'
function Header() {
  return (
    <header className={styles.header}>
       <Link to="/">
      <img src={logo} alt="Andina Labrada Orfebrería" className={styles.logo} />
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
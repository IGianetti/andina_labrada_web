import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Karina Orfebrería</h1>
      </div>
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
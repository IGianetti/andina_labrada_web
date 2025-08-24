import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <h2 className={styles.notFoundSubtitle}>Página No Encontrada</h2>
      <p className={styles.notFoundText}>
        La página que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className={styles.notFoundLink}>
        Volver a la página de inicio
      </Link>
    </div>
  );
}

export default NotFoundPage;
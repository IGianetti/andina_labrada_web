import React from 'react';
import galleryItems from '../../data/galleryData';
import GalleryItem from '../../components/GalleryItem/GalleryItem'; // Importamos el nuevo componente
import styles from './GalleryPage.module.css';

function GalleryPage() {
  return (
    <section className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>Galería de Obras</h1>
      <p className={styles.gallerySubtitle}>
        Descubre la colección completa de piezas únicas, forjadas a mano con pasión y tradición.
      </p>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} item={item} /> // Renderizamos el componente
        ))}
      </div>
    </section>
  );
}

export default GalleryPage;
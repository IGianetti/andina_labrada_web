import React from 'react';
import styles from './GalleryItem.module.css';

function GalleryItem({ item }) {
  // Ya no necesitas obtener los datos, solo los usas.
  return (
    <div className={styles.galleryItem}>
      <img src={item.urlDeImagen} alt={item.nombre} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h3>{item.nombre}</h3>
        <p>{item.descripcion}</p>
        <p className={styles.itemPrice}>{item.precio}</p>
      </div>
    </div>
  );
}

export default GalleryItem;
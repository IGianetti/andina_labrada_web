import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GalleryItem.module.css';

function GalleryItem({ item }) {
  return (
    <div className={styles.galleryItem}>
      <Link to={`/gallery/${item.id}`}>
        <img src={item.imageUrl} alt={item.title} className={styles.itemImage} />
      </Link>
      <div className={styles.itemInfo}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span>{item.price}</span>
      </div>
    </div>
  );
}

export default GalleryItem;
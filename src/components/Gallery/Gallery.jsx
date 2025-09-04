import React, { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'; 
import { getGalleryItems } from '../../services/firebaseService';
import styles from './Gallery.module.css';

function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getGalleryItems();
        if (data) {
          setItems(data);
        }
      } catch (error) {
        console.error("Error al obtener documentos: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <p>Cargando galería...</p>;
  }

  if (items.length === 0) {
    return <p>No hay artículos en la galería.</p>;
  }

  return (
    <div className={styles.galleryContainer}>
      {items.map(item => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Gallery;
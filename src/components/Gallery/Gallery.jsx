import React, { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'; 
import styles from './Gallery.module.css';

function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_GALLERY_API_URL);
        if (!response.ok) {
          throw new Error('No se pudo obtener la galería.');
        }
        const data = await response.json();
        setItems(data);
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
import React from 'react';
import Gallery from '../../components/Gallery/Gallery'
import styles from './GalleryPage.module.css';

function GalleryPage() {
  return (
    <div className={styles.galleryPage}>
      
      <Gallery />
    </div>
  );
}

export default GalleryPage;
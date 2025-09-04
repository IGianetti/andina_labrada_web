import { useState, useEffect } from 'react';
import { getConfig } from '../../services/firebaseService';
import styles from './AboutPage.module.css';

function AboutPage() {
  const [aboutData, setAboutData] = useState({ historia: '', imagenUrl: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getConfig("sobreMi");
        if (data) {
          setAboutData({
            historia: data.historia || 'No hay texto disponible.',
            imagenUrl: data.imagenUrl || ''
          });
        }
      } catch (error) {
        console.error("Error al obtener datos de 'Sobre Mí': ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  if (loading) {
    return <p>Cargando información...</p>;
  }


return (
    <section className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Sobre Mí</h1>
      <div className={styles.aboutContent}>
        {aboutData.imagenUrl && (
          <div className={styles.aboutImageContainer}> {/* <-- ¡Aquí va la clase! */}
            <img src={aboutData.imagenUrl} alt="Karina de Andina Labrada" className={styles.aboutImage} />
          </div>
        )}
        <div className={styles.aboutText}>
          <p>{aboutData.historia}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
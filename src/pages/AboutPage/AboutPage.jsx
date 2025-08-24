import React from 'react';
import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <section className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Sobre Mí</h1>
      <div className={styles.aboutContent}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/karina-profile.jpg" // Reemplaza con una foto real de Karina
            alt="Karina, la orfebre"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <p>
            Karina es una orfebre apasionada por la conexión entre el arte ancestral y la modernidad.
            Cada una de sus piezas es el resultado de un viaje de autodescubrimiento, donde combina
            técnicas tradicionales andinas con un diseño minimalista y contemporáneo.
          </p>
          <p>
            Su amor por la naturaleza, los minerales y la historia de los pueblos originarios de
            Latinoamérica se refleja en cada curva y cada textura de sus creaciones. Para ella, la
            orfebrería no es solo un oficio, sino una forma de honrar el legado de sus ancestros y de
            plasmar su propia historia en metal.
          </p>
          <p>
            Trabaja principalmente con cobre y plata, valorando la autenticidad y la nobleza de estos
            materiales. Cree firmemente que cada joya debe contar una historia, resonar con la esencia de
            quien la porta y trascender el tiempo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
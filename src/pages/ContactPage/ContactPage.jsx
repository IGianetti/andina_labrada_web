import React, { useState, useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { getConfig } from '../../services/firebaseService';
import styles from './ContactPage.module.css';

function ContactPage() {
  const [horario, setHorario] = useState('');

  useEffect(() => {
    const fetchHorario = async () => {
      const atencionData = await getConfig("atencion");
      if (atencionData) {
        setHorario(atencionData.horarioAtencion);
      }
    };
    fetchHorario();
  }, []);

  return (
    <section className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contacto</h1>
      <p className={styles.contactSubtitle}>
        ¿Tienes alguna pregunta, una idea o te gustaría encargar una pieza personalizada? No dudes en contactarnos.
      </p>
      
      <ContactForm />

       {horario && (
        <p className={styles.contactSubtitle}>
          Horario de atención por WhatsApp: **{horario}**
        </p>
      )}

    </section>
  );
}

export default ContactPage;
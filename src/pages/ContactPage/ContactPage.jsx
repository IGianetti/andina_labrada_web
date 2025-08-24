import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './ContactPage.module.css';

function ContactPage() {
  return (
    <section className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contacto</h1>
      <p className={styles.contactSubtitle}>
        ¿Tienes alguna pregunta, una idea o te gustaría encargar una pieza personalizada? No dudes en contactarnos.
      </p>
      <ContactForm />
    </section>
  );
}

export default ContactPage;